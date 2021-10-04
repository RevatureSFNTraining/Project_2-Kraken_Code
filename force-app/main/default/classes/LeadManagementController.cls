public with sharing class LeadManagementController {
    
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