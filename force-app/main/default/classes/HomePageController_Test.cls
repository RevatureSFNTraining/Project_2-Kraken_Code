@isTest public with sharing class HomePageController_Test {
    
    @isTest static void fetchCasesTest() {
        
        Case c = new Case(Description = 'This is a test.');
        insert c;

        Case[] myTestCase = HomePageController.fetchCases();

        System.assertEquals('This is a test.', myTestCase[0].Description);
    }

    @isTest static void getUserNameTest() {

         //We set up the user
         String userName = 'fakeUser54343543' + '@fake.com';
         Profile p = [SELECT id 
                     FROM Profile
                     WHERE name='Standard User'];
         
         User u = new User(alias = 'testUser', email='user@fake.com',
                           emailencodingkey='UTF-8', lastname = 'Test', languagelocalekey='en_us',
                           timezonesidkey='america/new_york', localeSidKey='en_us', 
                           profileId=p.id, username=userName);
 
         System.RunAs(u) {
             System.assertEquals(HomePageController.getUserName(), UserInfo.getName());
         }
    }
}