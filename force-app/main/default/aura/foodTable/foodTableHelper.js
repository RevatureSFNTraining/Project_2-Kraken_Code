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
})