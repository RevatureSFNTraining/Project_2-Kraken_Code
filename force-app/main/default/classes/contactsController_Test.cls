@isTest public with sharing class contactsController_Test {
   
    //tests contactsController ability to fetch a list of contacts
    @isTest static void createSingleTest() {

        Contact c = new Contact(firstName = 'John', lastName = 'Doe');
        insert c;

        Contact[] myContact = contactsController.fetchContacts();
        System.assertEquals(myContact[0].Name, 'John Doe');
        System.assertEquals(myContact, contactsController.fetchContacts());
    }

    //tests contactsController ability to delete a list of contacts
    @isTest static void deleteSingleTest() {

        Contact c = new Contact(firstName = 'John', lastName = 'Doe');
        insert c;
        List<Contact> cList = [SELECT Id FROM Contact];
  
        contactsController.deleteContactList(cList);

        List<Contact> cListAfterDelete = [SELECT Id FROM Contact];

        System.assertEquals(cListAfterDelete, [SELECT Id FROM Contact]);
    }
}