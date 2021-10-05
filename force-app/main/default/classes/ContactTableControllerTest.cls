@isTest
public class ContactTableControllerTest {
    
    @testSetup 
    static void setup() {   
        List <Contact> testContacts = new List < Contact >();  
        for ( Integer i = 0; i<200; i++ ) {  
            testContacts.add(new Contact(LastName = 'Test'+i));  
        }  
        insert testContacts;       
    }
    
    @isTest
    public static void testGetAllContacts() {
        Test.startTest();
        List<Contact> c = ContactTableController.getAllContacts();
        Test.stopTest();
        System.assertEquals(200, c.size());
    } 
    
    @isTest
    public static void testUpdateContact() {
        
        Test.startTest();
        contact c=[Select id, LastName From Contact Where LastName='test0'];
        c.LastName='tests';
        List<contact> t=new List<contact>();
        t.add(c);
        ContactTableController.updateContact(t);
        List<Contact> cl = [Select id, LastName From Contact Where LastName='tests'];
        Test.stopTest();
        System.assertEquals(1, cl.size());
    } 
    
    @isTest
    public static void testBulkUpdateContact() {
        
        Test.startTest();
        list<contact> c=[Select id, LastName From Contact];
        integer i = 0;
        for (contact d: c){
            d.LastName='tests'+i;
            i++;
        }
        ContactTableController.updateContact(c);
        List<Contact> cl = [Select id, LastName From Contact];
        Test.stopTest();
        System.assertEquals(200, cl.size());
    }
    
    @isTest
    public static void testFailUpdateContact() {
        
        try{
            Test.startTest();
            contact c=[Select id, LastName From Contact Where LastName='test0'];
            c.LastName='';
            List<contact> t=new List<contact>();
            t.add(c);
            ContactTableController.updateContact(t);
        }catch (DmlException e) {
            Test.stopTest();
            System.assertEquals('REQUIRED_FIELD_MISSING', e.getDmlStatusCode(0));
        }
    }
    
    @isTest
    public static void testDelContact() {
        contact t=new contact(LastName='tested');
        insert t;
        Test.startTest();
        ContactTableController.delContact(t);
        List<Contact> c = ContactTableController.getAllContacts();
        Test.stopTest();
        System.assertEquals(200, c.size());
    } 
    
    @isTest
    public static void testFailDelContact() {
        contact t=new contact(LastName='tested');
        insert t;
        Test.startTest();
        delete t;
        try{
            ContactTableController.delContact(t);
        }
        catch(DmlException e){
            Test.stopTest();
            System.assertEquals('ENTITY_IS_DELETED', e.getDmlStatusCode(0) );
        }
    }
}