({

    assignSelectedAccount : function(component, event) {
        // assign selected account from event to component
        // attribute to update children
        let selected = event.getParam("selectedAccount");
        component.set("v.selectedAccount", selected);
    }
})