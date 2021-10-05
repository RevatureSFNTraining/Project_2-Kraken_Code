@isTest
public with sharing class EmployeeControllerTest {
    @TestSetup
    static void makeData(){
        List<Employee__c> employees = new List<Employee__C>();
        for(Integer i = 0; i < 99; i++) {
            Date d = Date.newInstance(2020, 10, 5);
            employees.add(new Employee__c(Name = 'Employee '+i, Salary__c = 50, Hired_On_Date__c = d, End_Employment_Date__c = NULL));
        }
        for(Integer i = 0; i < 99; i++) {
            Date d = Date.newInstance(2020, 10, 5);
            Date d2 = Date.newInstance(2020, 11, 5);
            employees.add(new Employee__c(Name = 'Past Employee '+i, Salary__c = 50, Hired_On_Date__c = d, End_Employment_Date__c = d2));
        }
        
        insert employees;
    }

    @isTest static void singleTest() {
        Test.startTest();
		
		Employee__c eSuccess = [SELECT Id, Salary__c, End_Employment_Date__c FROM Employee__c WHERE Name = 'Employee 1' LIMIT 1];
        
        eSuccess.Salary__c = 500;
        Database.SaveResult srSuccess = Database.update(eSuccess, false);
        
        Integer numSuccess = 0;
        if(srSuccess.isSuccess()) {
            numSuccess++;
        }
        
        System.assertEquals(1, numSuccess);

        Test.stopTest();
    }

    @isTest static void bulkTest() {
        Test.startTest();

		List<Employee__c> employees = [SELECT Id, Salary__c, End_Employment_Date__c FROM Employee__c WHERE End_Employment_Date__c = NULL OR End_Employment_Date__c != NULL];
        for(Employee__c e: employees) {
            e.Salary__c = 500;
        }
        
        List<Database.SaveResult> srs = Database.update(employees, false);
        
        Integer numSuccess = 0;
        for(Database.SaveResult sr: srs) {
            if(sr.isSuccess()) {
                numSuccess++;
            }
        }
        
        System.assertEquals(198, numSuccess);

        Test.stopTest();
    }
}