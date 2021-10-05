({
    setDecision : function(component, event) {

        let decision = event.getSource().getLocalId();
        component.set("v.isNewCustomer", decision);
    }
})