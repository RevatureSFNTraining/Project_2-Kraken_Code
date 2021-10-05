({
    getUser: function(component){
        var action = component.get("c.getUserName");
        action.setCallback(this, function(res){
            var state = res.getState();
            if (state === "SUCCESS") {
                component.set("v.Name", res.getReturnValue());
             }
          });
           $A.enqueueAction(action);
         },

    fetchOpenCases : function(component){
        let cases = component.get("c.fetchCases");
        cases.setCallback(this, function(res){
            if(cases.getState() === "SUCCESS") {
                component.set("v.openCases", res.getReturnValue());
            }
        });
        $A.enqueueAction(cases);
        
    },

    changeMode : function(component, event) {
        let decision = event.getSource().getLocalId();
        component.set("v.mode", decision);
    }

})