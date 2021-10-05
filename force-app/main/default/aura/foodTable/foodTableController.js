({
	doInit: function(cmp, event, helper) 
    {
		cmp.set('v.columns', [
            {label: 'Food Name', fieldName: 'Name', type: 'text'},
            {label: 'Store', fieldName: 'Account__rName', type: 'name'},
            {label: 'Stock', fieldName: 'Stock_Amount__c', type: 'number', editable:'true'}
        ]);

		helper.getControllerData(cmp);
	},

    filterChange: function(cmp, event, helper)
    {
        helper.getControllerData(cmp);
    },

    handleTableSave: function(cmp, event, helper)
    {
        helper.updateRecord(cmp, event, helper);
        //helper.getControllerData(cmp);
    },

    isRefreshed: function(component, event, helper) {
        location.reload();
    },
})