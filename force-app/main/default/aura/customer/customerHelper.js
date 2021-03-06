({
    fetchData: function (component,event,helper) {
        var action = component.get("c.getAllContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                component.set('v.data',data);
                component.set('v.fdata',data);
            }
            
        });
        $A.enqueueAction(action);
    },
    
    Save: function (component, event, helper) {
        var draftValues = event.getParam('draftValues');
        console.log(draftValues);
        var action = component.get("c.updateContact");
        action.setParams({"con" : draftValues});
        action.setCallback(this, function(response) {
            var state = response.getState();
            $A.get('e.force:refreshView').fire();
            
        });
        $A.enqueueAction(action);
    },
    
    deleteRecord : function(component, event, helper) {
        var contactRec = event.getParam('row');        
        var action = component.get("c.delContact");
        action.setParams({"contactRec": contactRec});
        action.setCallback(this, function(response) {            
            if (response.getState() === "SUCCESS" ) {
                $A.get('e.force:refreshView').fire();
            }
        });
        $A.enqueueAction(action);
    },
    
    success : function(component,event,helper){
        $A.get('e.force:refreshView').fire();
    },
    
    sortData: function (component, fieldName, sortDirection) {
        var data = component.get("v.fdata");
        var reverse = sortDirection !== 'asc';
        data.sort(this.sortBy(fieldName, reverse))
        component.set("v.fdata", data);
    },
    
    sortBy: function (field, reverse, primer) {
        var key = primer ?
            function(x) {return primer(x[field])} :
        function(x) {return x[field]};
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a)?key(a):'', b = key(b)?key(b):'', reverse * ((a > b) - (b > a));
        }
    },
})