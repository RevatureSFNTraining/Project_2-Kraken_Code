({

    onNavChanged : function(component, event, helper) {
        helper.assignSelectedAccount(component, event);
    },
    openModal : function(component, event, helper) {
        component.set("v.isModalOpen", true);
    },
    closeModal : function(component, event, helper) {
        component.set("v.isModalOpen", false);
    }
})