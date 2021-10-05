({
    doInit : function (component, event, helper) {
        component.set('v.columns', [
            //{label: 'Transaction #', fieldName: 'Name', type: 'autonumber', editable: false, typeAttributes: { required: true }},
            {label: 'Customer', fieldName: 'Contact__rName', type: 'text', editable: false },
            {label: 'Employee', fieldName: 'Employee__rName', type: 'text', typeAttributes: {editable: false,  required: true } },
            {label: 'Meal', fieldName: 'Meal__rName', type: 'text', editable: false },
            {label: 'Sale Price', fieldName: 'Sale_Price__c', type: 'currency', editable: false},
        ]);
            
        helper.fetchData(component);
        },

    handleEvents : function(component, event, helper) {

        helper.fetchData(component);
    },

    storeRows : function(component, event, helper) {
        let selectedRows = event.getParam("selectedRows");
        component.set("v.selectedRows", selectedRows);
    },

    deleteSelectedTransactions : function (component, event, helper) {
        helper.deleteTransactions(component, component.get("{!v.selectedRows}"));
    }
})