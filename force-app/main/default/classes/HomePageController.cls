public with sharing class HomePageController {
    
    @AuraEnabled
    public static string getUserName(){
        try {
            
            return UserInfo.getName();

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Case> fetchCases(){
        try {

            return [SELECT id, CaseNumber, AccountId, ContactPhone, Description FROM Case WHERE Status != 'Closed'];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}