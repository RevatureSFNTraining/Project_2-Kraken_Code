({

    doInit : function(component, event, helper) {
        document.title = "The Restäurant";
        
    },

    handleSelect : function(component, event, helper) {

        helper.changePage(event.getParam('value'), component);
    }
})