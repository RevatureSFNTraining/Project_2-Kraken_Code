({
    doInit : function(component) {
        let action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                let accs = response.getReturnValue();
                component.set("v.accounts", accs);
            }
        });
        $A.enqueueAction(action);
    },
    filter : function(component, event) {
        let input = event.getSource().get("v.value");
        let tempAccounts = component.get("v.accounts");
        let filtered = tempAccounts.filter(function(val){
            return val.Name.toLowerCase().includes(input.toLowerCase());
        });
        component.set("v.filteredAccounts", filtered);
    },
    assignSelectedAccount : function(component) {
        let accs = component.get("v.accounts");
        let selected = component.get("v.selectedItem");
        let found = accs.find(function (acc){
            return acc.Id === selected;
        });
        if (found) {
            console.log(found);
            let updateEvent = component.getEvent("updateSelectedAccount");
            updateEvent.setParams({"selectedAccount":found});
            updateEvent.fire();           
            console.log(updateEvent.getParams());
            console.log(updateEvent.getName());
            console.log(updateEvent.getParam("selectedAccount"));
            console.log(updateEvent.getType());
        }
    }
})