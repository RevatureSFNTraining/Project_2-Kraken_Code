<aura:application extends="force:slds">

    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <aura:handler name="pageChangeEvent" event="c:pageChangeEv" action="{!c.handlePageChange}"/>
    <aura:attribute name="isHome" type="Boolean" default="true"/>
    <aura:attribute name="isDistributors" type="Boolean" default="false"/>
    <aura:attribute name="isInventory" type="Boolean" default="false"/>
    <aura:attribute name="isCustomers" type="Boolean" default="false"/>
    <aura:attribute name="isTransactions" type="Boolean" default="false"/>
    <aura:attribute name="isAccounts" type="Boolean" default="false"/>
    <c:siteHeader />
    

    <aura:if isTrue="{!v.isHome}">
        
        <div class="slds-grid">
            <c:contacts />
            
        </div>
    </aura:if>

    <aura:if isTrue="{!v.isDistributors}">
        
        
    </aura:if>

    <aura:if isTrue="{!v.isInventory}">
        
        <div class="slds-grid">
            <c:foodTable />
            
        </div>
        
    </aura:if>

    <aura:if isTrue="{!v.isCustomers}">
        
        
    </aura:if>

    <aura:if isTrue="{!v.isTransactions}">
        <c:transactionPage />
    </aura:if>

    <aura:if isTrue="{!v.isAccounts}">
      
        <c:Account/>
    </aura:if>
    
        
</aura:application>