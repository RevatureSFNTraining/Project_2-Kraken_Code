({

    initializeSettings : function(component, event, helper) {
        //console.log(window.location.hash);
        //console.log(decodeURIComponent(window.location.hash));
        //let uri = decodeURIComponent(window.location.hash);
        //console.log(uri.substring(1));
        //this.navigate(uri.subString(1), component);
        /*
        document.title = "The Restaürant";
        var meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        meta.setAttribute("content", "width=device-width, initial-scale=1");
        document.getElementsByTagName('head')[0].appendChild(meta);
        */
    },
    handleLocationChange : function(component, event){
        this.navigate(decodeURIComponent(event.getParam("token")), component);
    },


    handlePageChange : function(component, event) {

        let page = event.getParam("currentPage");
       
		window.location.hash = encodeURIComponent(page);
		//window.location.hash = '';
		//window.history.pushState(null, null, encodeURIComponent(page));
        this.navigate(page, component);

    },
    navigate : function(page, component) {
        switch(page) {
            case 'Home':
                component.set("v.isHome", true);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                component.set("v.isEmployees", false);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Distributors':
                component.set("v.isHome", false);
                component.set("v.isDistributors", true);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                component.set("v.isEmployees", false);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Inventory':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", true);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                component.set("v.isEmployees", false);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Customers':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", true);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false);
                component.set("v.isEmployees", false);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Transactions':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", true);
                component.set("v.isAccounts", false);
                component.set("v.isEmployees", false);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Accounts':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", true);
                component.set("v.isEmployees", false);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Employees':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false); 
                component.set("v.isEmployees", true);
                component.set("v.isEmployeeCard", false);
                break;
            case 'Employee Cards':
                component.set("v.isHome", false);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false); 
                component.set("v.isEmployees", false);                
                component.set("v.isEmployeeCard", true);
                break;
            default:
                component.set("v.isHome", true);
                component.set("v.isDistributors", false);
                component.set("v.isInventory", false);
                component.set("v.isCustomers", false);
                component.set("v.isTransactions", false);
                component.set("v.isAccounts", false); 
                component.set("v.isEmployees", false);                
                component.set("v.isEmployeeCard", false);                
        }
    }
})