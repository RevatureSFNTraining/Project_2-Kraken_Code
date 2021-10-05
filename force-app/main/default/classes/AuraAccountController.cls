public with sharing class AuraAccountController {
    @AuraEnabled
    public static Account[] getAccounts(){
        try {
            // Check to make sure all fields are accessible to this user
            String[] fieldsToCheck = new String[] {
                'Id', 'Name', 'BillingStreet', 'BillingCity', 'BillingState',
                'BillingPostalCode', 'BillingCountry', 'Phone'
            };
            Map<String,Schema.SObjectField> fieldDescribeTokens =
                Schema.SObjectType.Account.fields.getMap();
            for(String field : fieldsToCheck) {
                if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                    throw new System.NoAccessException();
                }
            }
            return Database.query('SELECT ' + String.join(fieldsToCheck, ', ') + ' FROM Account');
        } catch (Exception e) {
            throw new AuraHandledException('No access to records.');
        }
    }
}