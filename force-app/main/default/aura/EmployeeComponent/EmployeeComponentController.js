({
	doInit : function(component, event, helper) {
        var action = component.get("c.getEmployees");
        action.setCallback(this, function(response){
            var Employees = response.getReturnValue();
            component.set("v.Employees", Employees);
        });
        $A.enqueueAction(action);
    }
})