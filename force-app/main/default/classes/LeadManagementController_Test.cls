@isTest public with sharing class LeadManagementController_Test {
    
    @isTest public static void fetchLeadsTest() {

        Lead l = new Lead(Status = 'Open - Not Contacted', LastName = 'Doe', Company = 'ABC');
        insert l;

        List<Lead> leadList = LeadManagementController.fetchLeads();
        System.assertEquals('ABC', leadList[0].Company);
    }
}