@isTest
public with sharing class DistributorTest {
    @isTest public static void PosBulkTest() {
        // positive bulk test
        test.startTest();

        // new account
        Account ac = new Account(
            Name = 'Test Account'
        );
        insert ac;

        //new distributor loop
        integer i = 0;
        list<Distributor__c> disList = new List<Distributor__c>();
        while (i<=251){
            i+=1;
            disList.add(new Distributor__c(
                Name = 'Test Distributor',
                Primary_Email__c = 'test' + i + '@email.com',
                Additional_Email__c = 'test2' + i + '@email.com',
                Phone__c = '',
                Account__c = ac.id)
            );
        }
       	insert disList;
        	
        //new distribution contract loop
        integer e = 0;
        list<Distribution_Contract__c> disCon = new List<Distribution_Contract__c>();
        while (e<=251){
            
            disCon.add(new Distribution_Contract__c(
                Name = 'Test Contract',
                Account__c = ac.id,
                Distributor__c = disList[e].id,
                Cost__c = 30.00,
                Product_Count__c = 2)
            );
            e+=1;
        }
        insert disCon;
        

        // because SF is dumber than inanimate objects
            //and required me to make an additional lookup
            //so that Aura could show everything I wanted it to
            //we have to add the distribution contract field to the distributor record
        integer w = 0;
        while (w<=251){
        	disList[w].Distribution_Contract__c = disCon[w].id;
            w+=1;        
        }
        update disList;
       
        //call extension's methods to test
		DistributorController.getTheFrigginData();
        DistributorController.updateDisCon(disList);
        
        test.stopTest();
    }

    
    @isTest public static void PosSingleTest(){
        //positive single action test
        test.startTest();

        // new account
        Account ac = new Account(
            Name = 'Test Account'
        );
        insert ac;

        //new distributor loop
        integer i = 0;
        list<Distributor__c> disList = new List<Distributor__c>();
        while (i<=1){
            i+=1;
            disList.add(new Distributor__c(
                Name = 'Test Distributor',
                Primary_Email__c = 'test' + i + '@email.com',
                Additional_Email__c = 'test2' + i + '@email.com',
                Phone__c = '',
                Account__c = ac.id)
            );
        }
       	insert disList;
        	
        //new distribution contract loop
        integer e = 0;
        list<Distribution_Contract__c> disCon = new List<Distribution_Contract__c>();
        while (e<=1){
            
            disCon.add(new Distribution_Contract__c(
                Name = 'Test Contract',
                Account__c = ac.id,
                Distributor__c = disList[e].id,
                Cost__c = 30.00,
                Product_Count__c = 2)
            );
            e+=1;
        }
        insert disCon;
        

        // because SF is dumber than inanimate objects
            //and required me to make an additional lookup
            //so that Aura could show everything I wanted it to
            //we have to add the distribution contract field to the distributor record
        integer w = 0;
        while (w<=1){
        	disList[w].Distribution_Contract__c = disCon[w].id;
            w+=1;        
        }
        update disList;
       
        //call extension's methods to test
		DistributorController.getTheFrigginData();
        DistributorController.updateDisCon(disList);
        
        test.stopTest();
    }

    
    @isTest public static void NegBulkTest() {
        // negative bulk test
        test.startTest();


        test.stopTest();
    }

    
    @isTest public static void NegSingleTest(){
        // negative single action test
        test.startTest();


        test.stopTest();
    }
}