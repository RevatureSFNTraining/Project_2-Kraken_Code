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
    }
})