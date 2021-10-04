@isTest public with sharing class transactionsDataTable_Test {
    
    @isTest static void fetchTransactionsTest() {

        Contact c = new Contact(firstName = 'John', lastName = 'Doe', Email = 'fake@fake.com');
        Employee__c e = new Employee__c(Name = 'fakeName', Hired_On_Date__c = Date.today(), Salary__c = 30000);
        Meal__c m = new Meal__c(Name = 'testMeal');
        insert c;
        insert e;
        insert m;

        Transaction__c t = new Transaction__c(Contact__c = c.Id, 
                                                Employee__c = e.Id, 
                                                Meal__c = m.Id, 
                                                Sale_Price__c = 8);
        insert t;

        System.assertEquals(8, transactionsDataTable.fetchTransactionsData()[0].Sale_Price__c);

    }

    @isTest static void deleteTransactionsTest() {

        Contact c = new Contact(firstName = 'John', lastName = 'Doe', Email = 'fake@fake.com');
        Employee__c e = new Employee__c(Name = 'fakeName', Hired_On_Date__c = Date.today(), Salary__c = 30000);
        Meal__c m = new Meal__c(Name = 'testMeal');
        insert c;
        insert e;
        insert m;

        Transaction__c t = new Transaction__c(Contact__c = c.Id, 
                                                Employee__c = e.Id, 
                                                Meal__c = m.Id, 
                                                Sale_Price__c = 8);
        insert t;

        List<Transaction__c> tList = [SELECT Id, Sale_Price__c FROM Transaction__c];
        
        System.assertEquals(8, tList[0].Sale_Price__c);

        transactionsDataTable.deleteTransactionList(tList);

        List<Transaction__c> cListAfterDelete = [SELECT Id FROM Transaction__c];

        System.assertEquals(cListAfterDelete, [SELECT Id FROM Transaction__c]);
    }
}