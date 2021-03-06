({
    doInit : function(component, event, helper) {
        helper.getUser(component);
        helper.fetchOpenCases(component);
    },

    reDrawCases : function(component, event, helper) {
        helper.fetchOpenCases(component);
        helper.showToast(component);
    },

    
    changeMode : function(component, event, helper) {
        helper.changeMode(component, event);
    }
})