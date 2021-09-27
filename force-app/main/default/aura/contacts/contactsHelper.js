({
	fetchContacts : function(component) {
		
        let action = component.get('c.fetchContacts');
        action.setCallback(this, function(res){
            if (res.getState() === "SUCCESS") {
               
                component.set('v.data', res.getReturnValue());
                
            }
        });
        $A.enqueueAction(action);
	}
})