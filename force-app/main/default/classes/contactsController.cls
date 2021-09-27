public class contactsController {

    
    @AuraEnabled
    public static List<Contact> fetchContacts() {
        
        return [SELECT Name, Phone FROM Contact];
    }
}