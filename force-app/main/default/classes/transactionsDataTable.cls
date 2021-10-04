public with sharing class transactionsDataTable {
    
    //gets most recent 100 transaction records; for transaction page datatable
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
    
    
    //deletes list of transactions passed into it
    @AuraEnabled
    public static void deleteTransactionList(List<SObject> transactionList) {
        
        delete transactionList;
     
    } 
}