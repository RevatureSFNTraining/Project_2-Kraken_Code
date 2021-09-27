({

    assignSelectedAccount : function(component, event) {
        let selected = event.getParam("selectedAccount");
        component.set("v.selectedAccount", selected);
    }
})