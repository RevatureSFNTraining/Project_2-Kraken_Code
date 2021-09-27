({
	doInit: function(component, event, helper) {
		component.set('v.columns', [
            {label: 'Food Name', fieldName: 'Name', type: 'text'},
            {label: 'Store', fieldName: 'Account__rName', type: 'text'},
            {label: 'Stock', fieldName: 'Stock_Amount__c', type: 'number'}
        ]);

		helper.getControllerData(component);
	},
})