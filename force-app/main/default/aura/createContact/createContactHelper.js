({
    refreshContactDatatable : function() {

        var appEvent = $A.get("e.c:newContact");
        appEvent.fire();
    }
})