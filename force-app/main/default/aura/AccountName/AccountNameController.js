({
    handleClick : function(component, event, helper){
        // console.log(component.find("accNameItem"));
        // console.log(component.find("hiButton"));
        // component.find("accNameItem").forEach(function(cmp){
        //     cmp.set("v.isActive", false);
        // });
        // component.set("v.isActive", true);
        console.log(event.getSource().get("v.label"));
    }
})