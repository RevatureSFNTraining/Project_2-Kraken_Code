public with sharing class LightningRecordEditFormController {
    public LightningRecordEditFormController() {

    }

    @AuraEnabled
    public static void handleSuccess(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static void handleChange(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}