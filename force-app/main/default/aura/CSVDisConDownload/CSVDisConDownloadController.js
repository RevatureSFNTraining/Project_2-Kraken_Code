({
    // ## function call on component load  
    loadDCList: function(component, event, helper){
       helper.onLoad(component, event);
    },
    
    // ## function call on Click on the "Download As CSV" Button. 
    downloadCsv : function(component,event,helper){
        
        // get the list from 'ListOfDC' attribute 
        var stockData = component.get("v.ListOfDC");
        
        // call the helper function which "return" the CSV data as a String   
        var csv = helper.convertArrayOfObjectsToCSV(component,stockData);   
         if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
	     var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self';
          hiddenElement.download = 'ExportData.csv';  // CSV file Name* you can change it.[only name not .csv] 
          document.body.appendChild(hiddenElement); // Required for FireFox browser
    	  hiddenElement.click(); // using click() js function to download csv file
        }, 
 })