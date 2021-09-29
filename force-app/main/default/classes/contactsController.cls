public class contactsController {

    
    @AuraEnabled
    public static List<Contact> fetchContacts() {
        
        return [SELECT Name, Phone FROM Contact ORDER BY createdDate DESC LIMIT 100];
    }

    @AuraEnabled
    public static void deleteContactList(List<SObject> contactList) {
        
        delete contactList;
     
    } 
}