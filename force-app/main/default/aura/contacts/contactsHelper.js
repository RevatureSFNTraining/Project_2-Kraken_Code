({
	fetchContacts : function(component) {
		
        let action = component.get('c.fetchContacts');
        action.setCallback(this, function(res){
            if (res.getState() === "SUCCESS") {
               
                component.set('v.data', res.getReturnValue());
                
            }
        });
        $A.enqueueAction(action);
	},

    deleteContacts : function(component, event, rows) {

        let delContacts = component.get('c.deleteContactList');
        
        let contacts = [];
        for (let i = 0; i < rows.length; i++) {
            contacts.push(rows[i]);
        }
      

        delContacts.setParams({
            "contactList" : contacts
        });

        delContacts.setCallback(this, function(res) {
            if(res.getState() === "SUCCESS") {
                console.log("table updated");
            }
        });
        
        $A.enqueueAction(delContacts);
        component.set("v.rows", []);
        var appEvent = $A.get("e.c:contactDeletionEvent");
        appEvent.fire();
        this.fetchContacts(component); 
    }
})