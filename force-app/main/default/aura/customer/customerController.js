({
init: function (component, event, helper) {
	
	var actions = [
		{label: 'Delete', name: 'delete'}
	];
	component.set('v.columns', [
		
		{label: 'Name', fieldName: 'Name', type: 'text' ,editable: true, sortable:true},
		{label: 'Email', fieldName: 'Email', type: 'text' ,editable: true, sortable:true},
		{label: 'Phone', fieldName: 'Phone', type: 'phone' ,editable: true, sortable:true},
		{label: 'Transactions', fieldName: 'Transactions__c', type: 'lookup',editable: false, sortable:true},
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

updateSorting: function (component, event, helper) {
	var fieldName = event.getParam('fieldName');
	var sortDirection = event.getParam('sortDirection');
	component.set("v.sortedBy", fieldName);
	component.set("v.sortedDirection", sortDirection);
	helper.sortData(component, fieldName, sortDirection);
},

searchTable: function (component, event, helper) {
	var allRecords = component.get("v.data");
	var searchFilter = event.getSource().get("v.value").toUpperCase();
	var tempArray =[];
	var i;
	for(i=0; i<allRecords.length; i++){
		if((allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1) || 
			(allRecords[i].Phone && allRecords[i].Phone.toUpperCase().indexOf(searchFilter) != -1)|| 
			(allRecords[i].Email && allRecords[i].Email.toUpperCase().indexOf(searchFilter) != -1)){
			tempArray.push(allRecords[i]);
		}
	}
	component.set("v.fdata",tempArray);
},

handlesuccess : function(component,event,helper){
	helper.success(component, event, helper);
},

toggleSection : function(component, event, helper) {
	var sectionAuraId = event.target.getAttribute("data-auraId");
	var sectionDiv = component.find(sectionAuraId).getElement();
	var sectionState = sectionDiv.getAttribute('class').search('slds-is-open'); 
	
	if(sectionState == -1){
		sectionDiv.setAttribute('class' , 'slds-section slds-is-open');
	}else{
		sectionDiv.setAttribute('class' , 'slds-section slds-is-close');
	}
},
})