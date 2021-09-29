({
    doDisableAmount : function(component, event) {

        let checkBox = component.find("checkBox").get("v.value");
        if(checkBox == false || null) {
            component.set("v.hide", "false");
        } else {
            component.set("v.hide", "true");
        }
        
    },

    fireNewTransaction : function() {
        var appEvent = $A.get("e.c:newTransaction");
        appEvent.fire();
    }
})