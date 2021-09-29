({
    getDisData : function(component) {
        let action = component.get('c.getTheFrigginData');

        action.setCallback(this, function(yay) {
            if(yay.getState() === "SUCCESS") {
                
                var rows = yay.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if(row.Distributor__r){
                        row.Distributor__rName = row.Distributor__r.Name; 
                        row.Distributor__rPrimary_Email__c = row.Distributor__r.Primary_Email__c; 
                        row.Distributor__rAdditional_Email__c = row.Distributor__r.Additional_Email__c; 
                        row.Distributor__rPhone__c = row.Distributor__r.Phone__c;
                    }
                    if (row.Account__r) {
                        row.Account__rName = row.Account__r.Name;
                    }
                }
                    component.set('v.data', rows);
            }

        });
        $A.enqueueAction(action);
    },
  
})