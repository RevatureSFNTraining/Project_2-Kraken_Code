({
	doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName:'Name',sortable:true,type:'text', initialWidth: 400},
            {label: 'Gender', fieldName:'gender__c',sortable:false,type:'text', initialWidth: 300},
            {label: 'Email', fieldName:'email__c',sortable:true,type:'text', initialWidth: 300},
            {label: 'Hired On Date', fieldName:'Hired_On_Date__c',sortable:true,type:'text', initialWidth: 400}
        ]);
        helper.getEmployees(component, helper);
    },
    updateSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
    searchTable: function (cmp, event, helper) {
        var allRecords = cmp.get("v.allData");
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        var tempArray =[];
        var i;
        for(i=0; i<allRecords.length; i++){
            if((allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1)){
                tempArray.push(allRecords[i]);
            }
        }
        cmp.set("v.recordList",tempArray);
    }
})