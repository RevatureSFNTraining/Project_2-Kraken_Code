({
    doInit : function(component, event, helper) {
        helper.doInit(component);
    },
    onSearchChanged : function(component, event, helper) {
        helper.filter(component, event);
    },
    onNavChanged : function(component, event, helper) {
        helper.assignSelectedAccount(component);
    }
})