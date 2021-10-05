public with sharing class HomePageController {
    
    //gets current user name; for homepage custom welcome message
    @AuraEnabled
    public static string getUserName(){
        
         return UserInfo.getName();

    }

    //returns all open cases; used for homepage case management feature
    @AuraEnabled
    public static List<Case> fetchCases(){
       
        return [SELECT id, CaseNumber, AccountId, Description FROM Case WHERE Status != 'Closed'];
            
    }

}