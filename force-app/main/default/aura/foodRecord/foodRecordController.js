({
    onSave: function(cmp, event, helper)
    {
        var evt = $A.get('e.c:foodRecordSave');
        evt.fire();
        cmp.set('v.recordID', '');
        location.reload();
    }
})