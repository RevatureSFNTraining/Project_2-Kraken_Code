({

    doInit : function(component, event, helper) {
        
        
    },

    handleSelect : function(component, event, helper) {

        helper.changePage(event.getParam('value'), component);
    }
})