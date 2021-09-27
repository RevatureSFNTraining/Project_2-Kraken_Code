({
	doInit : function(component, event, helper) {
		
        component.set('v.columns', [
            {label: 'Customer Name', fieldName: 'Name', type: 'text', editable: false },
            {label: 'Phone Number', fieldName: 'Phone', type: 'Phone', editable: false},
        ]);
        
        helper.fetchContacts(component);
	}
})