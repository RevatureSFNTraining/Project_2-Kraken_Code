@isTest public class FoodControllerTest {

    @TestSetup static void makeData(){
        Account testAccount = new Account(Name = 'Test Account');
        insert testAccount;

        Distributor__c testDistributor = new Distributor__c(Name = 'Test Distributor', Primary_Email__c = 'testEmail@testEmail.com', Account__c = testAccount.Id);
        insert testDistributor;

        List<Food__c> foodList = new List<Food__c>();
        for(Integer i = 0; i < 250; i++)
        {
            foodList.add(new Food__c(Name = 'Test Food ' + i, Distributor__c = testDistributor.Id, Account__c = testAccount.Id, Stock_Amount__c = i));
        }

        insert foodList;
    }

    // test the update functionality in the controller
    @isTest static void positiveUpdate()
    {
        Food__c expectedFood = [SELECT Id FROM Food__c LIMIT 1];
        expectedFood.Stock_Amount__c = 9999;
        
        List<Food__c> foodList = new List<Food__c>();
        foodList.add(expectedFood);
        FoodController.updateInventory(foodList);

        Food__c actualFood = [SELECT Id, Stock_Amount__c FROM Food__c WHERE Stock_Amount__c = 9999];

        System.assertEquals(expectedFood, actualFood);
    }

    // test the retrieve records functionality in the controller
    @isTest static void positiveRead()
    {
        List<Food__c> expectedFoodList = [SELECT Id FROM Food__c];
        
        List<Food__c> actualFoodList = FoodController.getFoodRecords('Name');

        System.assertEquals(expectedFoodList.size(), actualFoodList.size());
    }

    // test the update functionality if the user enters a bad stock value
    @isTest static void negative()
    {
        Food__c expectedFood = [SELECT Id, Stock_Amount__c FROM Food__c LIMIT 1];
        Decimal initialStock = expectedFood.Stock_Amount__c;
        expectedFood.Stock_Amount__c = -9999;
        
        List<Food__c> foodList = new List<Food__c>();
        foodList.add(expectedFood);
        FoodController.updateInventory(foodList);

        Food__c actualFood = [SELECT Id, Stock_Amount__c FROM Food__c WHERE Stock_Amount__c = :initialStock];

        System.assertNotEquals(expectedFood, actualFood);
    }
    
    @isTest static void SingleAction() 
    {

    }

    @isTest static void BulkAction()
    {

    }
}