({
    handleSuccess : function(component, event, helper) {

        helper.fireNewTransaction();
    },

    disableAmount : function(component, event, helper) {
        helper.doDisableAmount(component, event);
    }
})