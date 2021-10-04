({
    init : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Distributor', fieldName: 'Distributor__rName', type: 'text', editable: true,},
            {label: 'Distributor Primary Email', fieldName: 'Distributor__rPrimary_Email__c', type:'email', editable: true},
            {label: 'Distributor Secondary Email', fieldName: 'Distributor__rAdditional_Email__c', type:'email', editable: true},
            {label: 'Phone Number', fieldName: 'Distributor__rPhone__c', type:'phone', editable: true},
            {label: 'Invoice Number', fieldName: 'ID__c', type:'auto number', editable: false},
            {label: 'Invoice Total', fieldName: 'Cost__c', type:'currency', editable: false},
            {label: 'Created Date', fieldName: 'CreatedDate', type:'date', editable: false},
            {label: 'Store', fieldName: 'Account__rName', type:'text', editable: false}
        ]);

        helper.getDisData(component);
    }
})