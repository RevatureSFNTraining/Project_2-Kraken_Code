({
	doInit : function(component, event, helper) {
		
        component.set('v.columns', [
            {label: 'Customer Name', fieldName: 'Name', type: 'text', editable: false },
            {label: 'Phone Number', fieldName: 'Phone', type: 'Phone', editable: false},
        ]);
        
        helper.fetchContacts(component);
	},

    handleNewContact : function(component, event, helper) {

        helper.fetchContacts(component);
    },

    storeRows : function(component, event, helper) {
        let selectedRows = event.getParam("selectedRows");
        component.set("v.selectedRows", selectedRows);
    },

    deleteSelectedContacts : function (component, event, helper) {
        helper.deleteContacts(component, event, component.get("{!v.selectedRows}"));
    }
})