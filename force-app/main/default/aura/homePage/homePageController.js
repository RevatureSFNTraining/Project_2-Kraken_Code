({
    doInit : function(component, event, helper) {
        helper.getUser(component);
        helper.fetchOpenCases(component);
    },

    reDrawCases : function(component, event, helper) {
        helper.fetchOpenCases(component);
    }
})