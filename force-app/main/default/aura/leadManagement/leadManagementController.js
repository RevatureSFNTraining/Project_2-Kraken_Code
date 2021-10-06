({
    doInit : function(component, event, helper) {
       
        helper.fetchOpenLeads(component);
    },

    reDrawLeads : function(component, event, helper) {
        helper.fetchOpenLeads(component);
        helper.showToast(component);
    }
    
})