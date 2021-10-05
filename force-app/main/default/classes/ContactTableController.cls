public class ContactTableController {
    
    @AuraEnabled
    public static List<Contact> getAllContacts(){
        return [SELECT Id, Name, Phone, Email, Transactions__c FROM Contact ORDER BY createdDate DESC] ; 
        
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