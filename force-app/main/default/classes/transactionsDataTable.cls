public with sharing class transactionsDataTable {
    
    @AuraEnabled
    public static List<Transaction__c> fetchTransactionsData() {
        
        return [SELECT 
                Name, 
                Contact__r.Name, 
                Employee__r.Name, 
                Meal__r.Name,
                Sale_Price__c 
                FROM Transaction__c ORDER BY createdDate DESC LIMIT 100];
    }
    
    
    
    @AuraEnabled
    public static void deleteTransactionList(List<SObject> transactionList) {
        
        delete transactionList;
     
    } 
}