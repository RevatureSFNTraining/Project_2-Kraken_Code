({
    onRender : function(component) {
        // after renedering assign map markers
        let acc = component.get("v.account");
        let markers;
        if(acc && acc.BillingStreet){
            markers = [
                {
                    location: {
                        Street: acc.BillingStreet,
                        City: acc.BillingCity,
                        State: acc.BillingState,
                        Country: acc.BillingCountry
                    },
                }
            ];
        } else {
            // default to salesforce tower
            markers = [
                {
                    location: {
                        Street: '415 Mission St',
                        City: 'San Francisco',
                        State: 'CA'
                    },
    
                    title: 'Salesforce Tower',
                    description: 'San Francisco\'s tallest building'
                }
            ];
        }
        component.find("mappy").set("v.mapMarkers", markers);
    }

})