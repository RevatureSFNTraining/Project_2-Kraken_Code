<aura:application extends="force:slds" implements="forceCommunity:themeLayout,forceCommunity:availableForAllPageTypes" access="global">

    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <aura:handler name="pageChangeEvent" event="c:pageChangeEv" action="{!c.handlePageChange}"/>
    <aura:attribute name="isHome" type="Boolean" default="true"/>
    <aura:attribute name="isDistributors" type="Boolean" default="false"/>
    <aura:attribute name="isInventory" type="Boolean" default="false"/>
    <aura:attribute name="isCustomers" type="Boolean" default="false"/>
    <aura:attribute name="isTransactions" type="Boolean" default="false"/>
    <aura:attribute name="isAccounts" type="Boolean" default="false"/>
<div class="pc">
    <div class="cc">

    <c:siteHeader />
    

    <aura:if isTrue="{!v.isHome}">
        
        <c:homePage />
    </aura:if>

    <aura:if isTrue="{!v.isDistributors}">
        <c:DistributorPage/>
    </aura:if>

    <aura:if isTrue="{!v.isInventory}">
        <c:inventoryPage/>
        
    </aura:if>

    <aura:if isTrue="{!v.isCustomers}">
          <div class="slds-grid">
            <c:customer />
            
        </div>
        
    </aura:if>

    <aura:if isTrue="{!v.isTransactions}">
        <c:transactionPage />
    </aura:if>

    <aura:if isTrue="{!v.isAccounts}">
      
        <c:Account/>
    </aura:if>
    </div>
    <c:siteFooter/>
    
    </div>
</aura:application>