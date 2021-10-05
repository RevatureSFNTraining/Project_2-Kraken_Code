public class FoodController {

    @AuraEnabled
    public static List<Food__c> getFoodRecords(String orderByType) 
    {
        String qString = 'SELECT Name, Account__r.Name, Stock_Amount__c FROM food__c';
        String pString = ' ORDER BY ' + orderByType;
        return Database.query(qString + pString);
    }

    
    @AuraEnabled
    public static boolean updateInventory(List<Food__c> foodList){
        try {
            update foodList;
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
}