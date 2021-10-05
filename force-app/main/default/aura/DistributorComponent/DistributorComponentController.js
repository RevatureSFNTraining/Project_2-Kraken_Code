({
    init : function(component, event, helper) {
        //var actions = [
            //{label: 'Save', name: 'save'}
        //];
        
        component.set('v.columns', [
            {label: 'Distributor', fieldName: 'Name', type: 'text', editable: true,},
            {label: 'Distributor Primary Email', fieldName: 'Primary_Email__c', type:'email', editable: true},
            {label: 'Distributor Secondary Email', fieldName: 'Additional_Email__c', type:'email', editable: true},
            {label: 'Phone Number', fieldName: 'Phone__c', type:'phone', editable: true},
            {label: 'Invoice Number', fieldName: 'Distribution_Contract__rID__c', type:'auto number', editable: false},
            {label: 'Invoice Total', fieldName: 'Distribution_Contract__rCost__c', type:'currency', editable: false},
            {label: 'Created Date', fieldName: 'Distribution_Contract__rCreatedDate', type:'date', editable: false},
            {label: 'Store', fieldName: 'Account__rName', type:'text', editable: false},
            //{type: 'action', typeAttributes: { rowActions: actions} }
        ]);

        helper.getDisData(component);
    },

    handleSaveEdition: function (component, event, helper) {
		helper.Save(component, event, helper);
    },

    isRefreshed: function(component, event, helper) {
		location.reload();
    }
})