({
    init : function(component, event, helper) {
        var today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        component.set("v.today", today);
    },
    cancel : function(component, event, helper) {
        component.getEvent("closeAccountModal").fire();
    },
    onSuccess : function(component, event, helper) {
        component.getEvent("closeAccountModal").fire();
        let toast = $A.get("e.force:showToast");
        if(toast){
            toast.setParams({"message":"Employee created!"});
            toast.fire();        
        }
    },
    onSubmit : function(component, event, helper) {
        let fields = event.getParam('fields');
        fields.Account__c = component.get("v.account.Id");
    }
})