({

    onNavChanged : function(component, event, helper) {
        // console.log(event.getSource());
        // console.log(event.getSource().get("v.selectedItem"));
        // console.log(component.get("v.selectedItem"));
        console.log("navchanged");
        helper.assignSelectedAccount(component, event);
    }
})