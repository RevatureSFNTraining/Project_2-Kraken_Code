({
	fetchData: function(component) {
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
            }
        });
        $A.enqueueAction(action);
    },

    deleteTransactions : function(component, rows) {

        let delTransactions = component.get('c.deleteTransactionList');
        
        let transactions = [];
        for (let i = 0; i < rows.length; i++) {
            transactions.push(rows[i]);
        }
        console.log(transactions);

        delTransactions.setParams({
            "transactionList" : transactions
        });

        delTransactions.setCallback(this, function(res) {
            if(res.getState() === "SUCCESS") {
                console.log("table updated");
            }
        });
        console.log(delTransactions);
        $A.enqueueAction(delTransactions);
        component.set("v.rows", [])
        this.fetchData(component); 
    }
      
})