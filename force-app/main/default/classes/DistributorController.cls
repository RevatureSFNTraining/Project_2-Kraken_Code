global class DistributorController {
    @AuraEnabled
    public static list<Distributor__c> getTheFrigginData(){
        
        return [SELECT 
                Name, 
                Primary_Email__c, 
                Additional_Email__c, 
                Phone__c, 
                Distribution_Contract__r.ID__c, 
                Distribution_Contract__r.Cost__c, 
                Distribution_Contract__r.CreatedDate,
                Account__r.Name 
            FROM Distributor__c WHERE Distribution_Contract__r.ID__c != null];
    }

    @AuraEnabled
    public static boolean updateDisCon(List<Distributor__c> disCon){
        try {
            update disCon;
            return true;
        } catch (Exception e) {
            system.debug(e);
            return false;
        }
    }

    /*@AuraEnabled
    public static void updateDisCon(List<Distributor__c> disCon){
        update disCon;
    }*/


    //public String csvParam {get; set;}
    //public String csvResult {get; set;}
    
    /*@AuraEnabled
    public static List<Distributor__c> getDistributors(){
        List<Distributor__c> ret = [SELECT id, Name FROM Distributor__c];
        return ret;
    }
    
    @AuraEnabled
    public static void csvFactory(){
        string csvResult = '';
        //System.debug(csvParam);
        Distributor__c d = Database.query('SELECT id, Name, (SELECT id, Name, Is_Active__c, Account__c, Cost__c, Product_Count__c FROM Distribution_Contracts__r) FROM Distributor__c WHERE id = :csvParam LIMIT 1');
        
        
        //List<Distribution_Contract__c> dcs = new List<Distribution_Contract__c>();
        
        List<Distribution_Contract__c> dcs = d.Distribution_Contracts__r;
        
        //for(Distribution_Contract__c dc: d.Distribution_Contract__r){ 
        //    dcs.add(dc);
        //}
        
        
        String row = '';
        String csv = '';
        
        for(Distribution_Contract__c dc: dcs){
            row = dc.id;
            row = row + ', ' + dc.Account__c;
            row = row + ', ' + d.Name;
            row = row + ', ' + dc.Name;
            row = row + ', ' + dc.Product_Count__c;
            row = row + ', ' + dc.Cost__c;
            row = row + ', ' + dc.Is_Active__c;
            csvResult = csvResult + row + '<br>';
        }  
    }
}


public with sharing class DistributorController {
    public List<Distributor__c> getDistributors(){
        List<Distributor__c> ret = [SELECT id, Name FROM Distributor__c];
        return ret;
    }
}*/
}