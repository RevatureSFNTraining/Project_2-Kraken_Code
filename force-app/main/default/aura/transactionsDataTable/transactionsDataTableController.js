({
    doInit : function (component, event, helper) {
        component.set('v.columns', [
            {label: 'Transaction #', fieldName: 'Name', type: 'autonumber', editable: false, typeAttributes: { required: true }},
            {label: 'Customer', fieldName: 'Contact__rName', type: 'text', editable: false },
            {label: 'Employee', fieldName: 'Employee__rName', type: 'text', typeAttributes: {editable: false,  required: true } },
            {label: 'Meal', fieldName: 'Meal__rName', type: 'text', editable: false },
            {label: 'Sale Price', fieldName: 'Sale_Price__c', type: 'currency', editable: false},
        ]);
            
        helper.fetchData(component);
        },

    handleNewTransaction : function(component, event, helper) {

        helper.fetchData(component);
    },
            
            /*
        handleSaveEdition: function (component, event, helper) {
            var draftValues = event.getParam('draftValues');
            
            helper.saveEdition(component, draftValues);
        } */
})