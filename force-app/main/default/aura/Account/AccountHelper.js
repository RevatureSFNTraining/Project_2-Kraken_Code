({

    assignSelectedAccount : function(component, event) {
        let selected = event.getParam("selectedAccount");
        console.log(selected);
        component.set("v.selectedAccount", selected);
    }
})