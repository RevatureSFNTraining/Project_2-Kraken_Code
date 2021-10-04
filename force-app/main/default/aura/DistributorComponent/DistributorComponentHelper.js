({
    getDisData : function(component) {
        let action = component.get('c.getTheFrigginData');

        action.setCallback(this, function(yay) {
            if(yay.getState() === "SUCCESS") {
                
                var rows = yay.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if(row.Distributor__r){
                        row.Distributor__rName = row.Distributor__r.Name; 
                        row.Distributor__rPrimary_Email__c = row.Distributor__r.Primary_Email__c; 
                        row.Distributor__rAdditional_Email__c = row.Distributor__r.Additional_Email__c; 
                        row.Distributor__rPhone__c = row.Distributor__r.Phone__c;
                    }
                    if (row.Account__r) {
                        row.Account__rName = row.Account__r.Name;
                    }
                }
                    component.set('v.data', rows);
            }

        });
        $A.enqueueAction(action);
    },
    
    /*Save: function (component, event, helper) {
		var draftValues = event.getParam("draftValues");
		//console.log(draftValues);
		var action = component.get("c.updateDisCon");
		action.setParams({"disCon" : draftValues});
		action.setCallback(this, function(response) {
		var state = response.getState();
		$A.get('e.force:refreshView').fire();

		});
		$A.enqueueAction(action);
    }

    isRefreshed: function(component, event, helper) {
		location.reload();
    },*/
    Save : function(cmp, event, helper)
    {
        var editedRecords = event.getParam('draftValues');
        var totalRecordEdited = editedRecords.length;
        var method = cmp.get('c.updateDisCon');
        method.setParams({"disCon" : editedRecords});

        method.setCallback(this, function(res)
        {
            //var state = res.getState();
            //$A.get('e.force:refreshView').fire();
            
            
            if(res.getState() === "SUCCESS")
            {
                if(res.getReturnValue() === true)
                {
                    
                    helper.showToast({
                        "title": "Record Update",
                        "type": "success",
                        "message": totalRecordEdited + 'records updated'
                    });

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

})