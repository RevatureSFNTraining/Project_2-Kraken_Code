public class transactionsDataTable {
    
    @AuraEnabled 
    public static List<Transaction__c> fetchTransactionsData() {
        
        return [SELECT 
                Name, 
                Contact__r.Name, 
                Employee__r.Name, 
                (SELECT Name FROM Meals__r), 
                Sale_Price__c 
                FROM Transaction__c];
    }
    
    /*
    @AuraEnabled
    public static void setNewTransactionsData(List<Transaction__c> draftValues) {
        
        upsert draftValues;
     
    } */
}