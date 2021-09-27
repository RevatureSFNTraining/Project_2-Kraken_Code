({

    handlePageChange : function (component, event, helper) {

        let page = event.getParam("currentPage");
       

        switch(page) {
            case 'Home':
                component.set("v.isHome", true);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                break;
            case 'Distributors':
                component.set("v.isHome", false);
                component.set("v.isDistributors", true);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                break;
            case 'Inventory':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", true);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                break;
            case 'Customers':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", true);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                break;
            case 'Transactions':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", true);
                component.set("v.isAccounts", false);
                break;
            case 'Accounts':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", true);
        }
    }
})