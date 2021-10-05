@isTest
public with sharing class AuraAccountControllerTest {

    @isTest
    public static void singlePositive(){
        test(1);
    }

    @isTest
    public static void bulkPositive(){
        test(200);
    }

    @isTest
    public static void userRestricted(){
        dbSetup(1);

        // get restricted user
        User restrictedUser = [SELECT Id FROM User WHERE Alias = 'Chatter' LIMIT 1];

        System.runAs(restrictedUser){
            try {
                List<Account> retrievedAccs = AuraAccountController.getAccounts();
            } catch (Exception e) {
                // assert exception type is as expected
                System.assertEquals('System.AuraHandledException', e.getTypeName());
            }
        }
    }

    // setup for tests
    // @testSetup methods cannot take parameters
    public static void dbSetup(Integer count){
        List<Account> accs = new List<Account>();

        for(Integer i = 0; i < count; i++) {
            Account acc = new Account(Name='Test' + i);
            accs.add(acc);
        }

        insert accs;
    }

    // primary test for single and bulk
    public static void test(Integer count){
        dbSetup(count);

        List<Account> retrievedAccs = AuraAccountController.getAccounts();

        System.assertEquals(count, retrievedAccs.size());
    }
}