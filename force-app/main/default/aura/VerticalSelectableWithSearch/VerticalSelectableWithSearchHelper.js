({
    doInit : function(component) {
        // get apex controller method and set callback
        let action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                // assign database values to component attribute
                let accs = response.getReturnValue();
                component.set("v.accounts", accs);
            } else if (state === "ERROR") {
                let errors = response.getError();
                // Default error message
                let message = 'Unknown error';
                // Retrieve the error message sent by the server
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    message = errors[0].message;
                }
                alert(message);
            }
        });
        $A.enqueueAction(action);
    },
    filter : function(component, event) {
        // get value entered by user
        let input = event.getSource().get("v.value");
        let tempAccounts = component.get("v.accounts");
        // search account names for input
        let filtered = tempAccounts.filter(function(val){
            return val.Name.toLowerCase().includes(input.toLowerCase());
        });
        component.set("v.filteredAccounts", filtered);
    },
    assignSelectedAccount : function(component) {
        let accs = component.get("v.accounts");
        let selected = component.get("v.selectedItem");
        // search through accounts for selected id
        let found = accs.find(function (acc){
            return acc.Id === selected;
        });
        if (found) {
            // sent event to parent so other children can be updated
            let updateEvent = component.getEvent("updateSelectedAccount");
            updateEvent.setParams({"selectedAccount":found});
            updateEvent.fire();
        }
    }
})