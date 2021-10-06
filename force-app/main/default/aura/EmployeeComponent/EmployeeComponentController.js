({
    handleComponentEvent : function(component, event, helper) {
        var valueFromChild = event.getParam("message");
        component.set("v.recordId", valueFromChild);
    },
    handleKeyUp: function (component, event) {
        var isEnterKey = event.keyCode === 13;
        if (isEnterKey) {
            var message = component.find('enter-search').get('v.value');
            component.set("v.recordId", message);
        }       
    },
    showSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Success',
            message: 'New Employee has been added!',
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'pester'
        });
        toastEvent.fire();
        cmp.find('field').forEach(function(f) {
            f.reset();
        });
    }
})