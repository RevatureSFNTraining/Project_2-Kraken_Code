({
fetchData: function (component,event,helper) {
	var action = component.get("c.getAllContacts");
	action.setCallback(this, function(response) {
		var state = response.getState();
		if (state === "SUCCESS") {
			var data = response.getReturnValue();
			component.set('v.data',data);
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
isRefreshed: function(component, event, helper) {
	location.reload();
},
})