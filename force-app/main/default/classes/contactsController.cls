public class contactsController {

    
    //fetches all contacts name, phone, returning most recent 100
    @AuraEnabled
    public static List<Contact> fetchContacts() {
        
        return [SELECT Name, Phone FROM Contact ORDER BY createdDate DESC LIMIT 100];
    }

    //deletes list of contact records passed to it
    @AuraEnabled
    public static void deleteContactList(List<SObject> contactList) {
        
        Database.Delete(contactList);
       
    } 
}