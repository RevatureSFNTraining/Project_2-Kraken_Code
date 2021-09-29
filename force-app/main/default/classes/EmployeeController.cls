public with sharing class EmployeeController {
/*
    public List<Employee__c> employeeList = [SELECT Name, gender__c, Email__c FROM Employee__c];
    public Employee__c newEmployee = new Employee__c();
    public List<Employee__c> newEmployeeList = new List<Employee__c>();
    
    @AuraEnabled
    public static List<Employee__c> findEmployee(String empName, String empGender, String empEmail) {
        String textBox = '%' + empName + '%';
        List<Employee__c> employeeList = new List<Employee__c>();
        if (!String.isEmpty(textBox)) {
            employeeList = [SELECT Name, gender__c, Email__c FROM Employee__c WHERE Name LIKE :textBox];
        }
        else {
            employeeList = [SELECT Name, gender__c, Email__c FROM Employee__c];
        }
        return employeeList;
    }*/
    
    @AuraEnabled
    public static List<Employee__c> getEmployees(String empName, String empGender, String empEmail) {
        List<Employee__c> employeeList = new List<Employee__c>();
        String empNameFilt = '%' + empName + '%';
        String empGenderFilt = '%' + empGender + '%';
        String empEmailFilt = '%' + empEmail + '%';
        EmployeeList = [SELECT Name, gender__c, Email__c 
                           FROM Employee__c WHERE Name LIKE :empNameFilt 
                           OR gender__c LIKE :empGenderFilt
                           OR Email__c LIKE :empEmailFilt];
        return EmployeeList;
    }
}