public with sharing class EmployeeController {
	@AuraEnabled
    public static list<Employee__c> getEmployeeList(){
        List<Employee__c> empList= [Select Name, Email__c, gender__c, Hired_On_Date__c, Salary__c From Employee__c Order By Name];
        if(empList != null && empList.size()>0){
            return empList;
        }
        else{return null;}
    }
}