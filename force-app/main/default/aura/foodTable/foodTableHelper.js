({
	getControllerData : function(cmp) {
		// start building function call to APEX controller method
		let method = component.get('c.getOneRecord');

		// create a callback funtion that will perform logic on return
		// from controller method
		method.setCallback(this, function(response)
		{
			if(response.getState() === "SUCCESS")
			{
				var rows = response.getReturnValue();
				/*
				for(var i = 0; i < rows.length; i++)
				{
					var row = rows[i];
					if(row.Account__r)
					{
						row.Account__rName = row.Account__r.Name;
					}
				}
				*/
				component.set('v.data', rows);
			}
		});
		$A.enqueueAction(method);
	},
})