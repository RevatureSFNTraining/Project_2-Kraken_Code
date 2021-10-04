public with sharing class LeadManagementController {
    
    //return list of leads that are not closed
    @AuraEnabled
    public static List<Lead> fetchLeads() {

        return [SELECT Name, 
                        Company, 
                        Description, 
                        Email, 
                        Status, 
                        Phone, 
                        Website 
                        FROM Lead
                        WHERE (Status != 'Closed - Converted') 
                        AND (Status != 'Closed - Not Converted')];
    }
}