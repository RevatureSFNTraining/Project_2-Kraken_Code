({
	fetchData: function (component) {
        let action = component.get('c.fetchTransactionsData');
        
        action.setCallback(this, function(res) {
            if(res.getState() === "SUCCESS") {
                
                var rows = res.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row.Contact__r) row.Contact__rName = row.Contact__r.Name;
                    if (row.Employee__r) row.Employee__rName = row.Employee__r.Name;
                    if (row.Meal__r) row.Meal__rName = row.Meal__r.Name;
                }
                component.set('v.data', rows);
                console.log('updated');
            }
        });
        $A.enqueueAction(action);
    },
    /*
    saveEdition: function (component, draftValues) {
        let a = component.get('c.setNewTransactionsData');
        console.log({draftValues : component.get("v.draftValues")});
        a.setParams({draftValues : component.get("v.draftValues")});
        
        var self = this;
        
        a.setCallback(this, function(res) {
            if (res.getState() === "SUCCESS") {
                var returnValue = res.getReturnValue();
                
                
                component.set('v.draftValues', []);
                self.fetchData(Component);
                
            }
        });
    } */
      
})