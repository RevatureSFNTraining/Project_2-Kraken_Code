({
    handleDecision : function(component, event, helper) {

        helper.setDecision(component, event);
    },

    handleSaveEvents : function(component, event, helper) {

        helper.showSaveToast(component);
    },

    handleDeleteEvents : function(component, event, helper) {

        helper.showDeleteToast(component);
    }
})