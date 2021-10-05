({
	getControllerData : function(cmp) {
		// start building function call to APEX controller method
		let method = cmp.get('c.getFoodRecords');

		let sortType = cmp.find('select').get('v.value');
		let sortObj;
		switch(sortType)
		{
			case 'food':
				sortObj = 'Name';
				break;
			case 'store':
				sortObj = 'Account__c';
				break;
			case 'stock':
				sortObj = 'Stock_Amount__c';
				break;
			default:
				sortObj = 'Account__c';
		}

		method.setParams({orderByType : sortObj});

		// create a callback funtion that will perform logic on return
		// from controller method
		method.setCallback(this, function(response)
		{
			if(response.getState() === "SUCCESS")
			{
				
				var rows = response.getReturnValue();
				// this loop is used to flatten the data
				// (converts objects into strings that can be presented in the table)
				for(var i = 0; i < rows.length; i++)
				{
					var row = rows[i];
					if(row.Account__r)
					{
						row.Account__rName = row.Account__r.Name;
					}
				}
				

				cmp.set('v.data', rows);
			}
		});
		$A.enqueueAction(method);
	},

	updateRecord : function(cmp, event, helper)
	{
		var editedRecords = event.getParam('draftValues');
		var msg = ' Food Record Updated';
		var totalRecordEdited = editedRecords.length;
		var method = cmp.get('c.updateInventory');
		method.setParams({"foodList" : editedRecords});

		if(editedRecords > 1)
		{
			msg = ' Food Records Updated';
		}

		method.setCallback(this, function(res)
		{			
			if(res.getState() === "SUCCESS")
			{
				if(res.getReturnValue() === true)
				{
					
                    helper.showToast({
                        "title": "Record Update",
                        "type": "success",
                        "message": totalRecordEdited + msg
                    });
                    //helper.reloadDataTable();
					helper.getControllerData(cmp);
                } 
				//if update got failed
				else
				{ 
                    helper.showToast({
                        "title": "Error!!",
                        "type": "error",
                        "message": "Error in update"
                    });
                }
			}
			
		});
		$A.enqueueAction(method);
	},

	/*
     * Show toast with provided params
     * */
    showToast : function(params){
        var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            toastEvent.setParams(params);
            toastEvent.fire();
        } else{
            alert(params.message);
        }
    },
	
	reloadDataTable : function()
	{
		var refreshEvent = $A.get("e.force:refreshView");
		if(refreshEvent){
			refreshEvent.fire();
		}
	}
	
})