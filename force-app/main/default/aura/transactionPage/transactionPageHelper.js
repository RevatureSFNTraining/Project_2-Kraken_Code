({
    setDecision : function(component, event) {

        let decision = event.getSource().getLocalId();
        component.set("v.isNewCustomer", decision);
    },

    showSaveToast : function(component) {
        component.find('notifLib').showToast({
            "title" : "Success!",
            "message" : "The record was saved successfully."
        });
    },

    showDeleteToast : function(component) {
        component.find('notifLib').showToast({
            "title" : "Success!",
            "message" : "The record was deleted successfully."
        });
    }
})