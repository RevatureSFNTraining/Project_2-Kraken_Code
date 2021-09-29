({
init: function (component, event, helper) {
	var actions = [
		{label: 'Delete', name: 'delete'}
	];
	component.set('v.columns', [
		
		{label: 'Name', fieldName: 'Name', type: 'text' ,editable: true},
		{label: 'Email', fieldName: 'Email', type: 'text' ,editable: true},
		{label: 'Phone', fieldName: 'Phone', type: 'phone' ,editable: true},
		{label: 'Transactions', fieldName: 'Transactions__c', type: 'lookup',editable: false},
		{type: 'action', typeAttributes: { rowActions: actions } }
	]);
	helper.fetchData(component,event, helper);
},
handleSaveEdition: function (component, event, helper) {
				helper.Save(component, event, helper);
	
},
	handleRowAction: function (component, event, helper) {
	
			helper.deleteRecord(component, event);
	
},
	isRefreshed: function(component, event, helper) {
	location.reload();
},
})