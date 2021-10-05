({
    fetchOpenLeads : function(component){
        
        let leads = component.get("c.fetchLeads");
        leads.setCallback(this, function(res){
            if(leads.getState() === "SUCCESS") {
                component.set("v.openLeads", res.getReturnValue());
            }
        });
        $A.enqueueAction(leads);
        
    }
})