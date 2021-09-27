({

    changePage : function(page, component) {

        let pageChangeEvent = component.getEvent("pageChangeEvent");
        pageChangeEvent.setParams({"currentPage" : page});
        pageChangeEvent.fire();
        
    }
})