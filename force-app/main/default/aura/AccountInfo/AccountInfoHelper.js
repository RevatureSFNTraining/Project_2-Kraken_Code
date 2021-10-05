({
    openModal : function(component) {
        // fire event to update boolean and open modal
        let event = component.getEvent("openAccountModal");
        event.fire();
    }
})