({
    inIt : function(cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Distributor', fieldName: 'Name', type: 'text', editable: true,},
            {label: 'Distributor Primary Email', fieldName: 'Primary_Email__c', type:'email', editable: true},
            {label: 'Distributor Secondary Email', fieldName: 'Additional_Email__c', type:'email', editable: true},
            {label: 'Phone Number', fieldName: 'Phone__c', type:'phone', editable: true},
            {label: 'Invoice Number', fieldName: 'Distributor_Name__rID__c', type:'auto number', editable: false},
            {label: 'Invoice Total', fieldName: 'Distributor_Name__rCost__c', type:'currency', editable: false},
            {label: 'Invoice Number', fieldName: 'Distributor_Name__rID__c', type:'auto number', editable: false},
            {label: 'Created Date', fieldName: 'Distributor_Name__rCreatedDate', type:'date', editable: false},
            {label: 'Store', fieldName: 'Account__rName', type:'text', editable: false}
        ]);
    }
})