<aura:application extends="force:slds">
        <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
        <aura:attribute name="InvoiceList" type="List[]" description="Invoice records" />
        <lightning:card iconName="utility:search" title="Export Data in CSV">
        <c:CSVDistributorContract records="{!v.iLList}" fileName="new file.csv"/>
        <table class="slds-table slds-table_bordered slds-table_cell-buffer">
      <thead>
        <tr class="slds-text-title_caps">
          <th scope="col">
            <div class="slds-truncate" title="Invoice Id">Invoice Id</div>
          </th>
          <th scope="col">
            <div class="slds-truncate" title="Cost">Cost</div>
          </th>
          <th scope="col">
            <div class="slds-truncate" title="Number of Products">Number of Products</div>
          </th>
        </tr>
      </thead>
      <tbody>
          <aura:iteration items="{!v.InvoiceList}" var="iL">
                <tr>
                  <th scope="row" data-label="Invoice Id">
                    <div class="slds-truncate" title="{!iL.Id}">{!iL.Id}</div>
                  </th>
                  <td data-label="Cost">
                    <div class="slds-truncate" title="{!iL.Name}">{!iL.Name}</div>
                  </td>
                  <td data-label="Number of Products">
                    <div class="slds-truncate" title="{!iL.Phone}">{!iL.Phone}</div>
                  </td>
                </tr>
        </aura:iteration>
        
      </tbody>
    </table>
        </lightning:card>
</aura:application>