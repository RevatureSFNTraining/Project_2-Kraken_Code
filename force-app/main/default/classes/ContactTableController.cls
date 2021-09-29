public class ContactTableController {
    @AuraEnabled
    public static List<Contact> getAllContacts(){
        return [Select Id, Name, Phone, Email, Transactions__c from Contact] ; 
        
    }
    @AuraEnabled
    public static void updateContact(List<Contact> con ){
        update con;
    }
    @AuraEnabled
    public static void delContact(Contact contactRec){
        delete contactRec;
    } 
    
}