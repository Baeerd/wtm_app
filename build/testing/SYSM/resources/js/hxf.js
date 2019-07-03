//初始化方法
function mainInit(){
    console.log('mainInit');
    //设置store的通讯地址
    // var WAREHOUSEAjaxStore = Ext.getStore('WAREHOUSEJsonStore');
    // WAREHOUSEAjaxStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    // WAREHOUSEAjaxStore.setParams({
    //     tableName: 'V_MOBILE_WAREHOUSE_CP',
    //     displayField: 'WAREHOUSE_NAME',
    //     valueField:'WAREHOUSE_ID'
    // });
    //
    // var WAREHOUSE_HALLJsonStore = Ext.getStore('WAREHOUSE_HALLJsonStore');
    // WAREHOUSE_HALLJsonStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    //
    // var WAREHOUSE_HALL_ZONEJsonStore = Ext.getStore('WAREHOUSE_HALL_ZONEJsonStore');
    // WAREHOUSE_HALL_ZONEJsonStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    //
    // var TargetSelectStore = Ext.getStore('TargetSelectStore');
    // TargetSelectStore.getProxy().setUrl(rootUrl+'/wtm/slot!findSlotSelect.action');
    //
    // var ProductionLineJsonStore = Ext.getStore('ProductionLineJsonStore');
    // ProductionLineJsonStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    // ProductionLineJsonStore.setParams({
    //     tableName: 'sgai_md_common_type',
    //     displayField: 'type_name',
    //     valueField:'type_id',
    //     filterName : 'parent_sid',
    //     filterValue : '500',
    //     orderby:'sequence'
    // });
    //
    // var PlanNumberJsonStore = Ext.getStore('PlanNumberJsonStore');
    // PlanNumberJsonStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    //
    // var PlannedFeedingJsonStore = Ext.getStore('PlannedFeedingJsonStore');
    // PlannedFeedingJsonStore.getProxy().setUrl(rootUrl+'/wtm/feed!findByPage.action');
    //
    //
    // var unplannedFeedingJsonStore = Ext.getStore('unplannedFeedingJsonStore');
    // unplannedFeedingJsonStore.getProxy().setUrl(rootUrl+'/wtm/unplan-feed!findByPage.action');
    //
    // var unplannedWAREHOUSEJsonStore = Ext.getStore('unplannedWAREHOUSEJsonStore');
    // unplannedWAREHOUSEJsonStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    // unplannedWAREHOUSEJsonStore.setParams({
    //     tableName : 'v_wtm_warehouse_info',
    //     displayField : 'distinct warehouse_name',
    //     valueField : 'warehouse_name'
    // });
    //
    // var unplannedProductionLineJsonStore = Ext.getStore('unplannedProductionLineJsonStore');
    // unplannedProductionLineJsonStore.getProxy().setUrl(rootUrl+'/combo/combo/findComboBoxValue.action');
    // unplannedProductionLineJsonStore.setParams({
    //     tableName: 'sgai_md_common_type',
    //     displayField: 'type_name',
    //     valueField:'type_id',
    //     filterName : 'parent_sid',
    //     filterValue : '500',
    //     orderby:'sequence'
    // });
    //
    //
    // WAREHOUSEAjaxStore.load();
    // ProductionLineJsonStore.load();
    // unplannedWAREHOUSEJsonStore.load({
    //     callback: function(records, operation, success) {
    //         console.log('unplannedWAREHOUSEJsonStore = '+records.length);
    //     },
    //     scope: this
    // });
    // unplannedProductionLineJsonStore.load({
    //     callback: function(records, operation, success) {
    //         console.log('unplannedProductionLineJsonStore = '+records.length);
    //     },
    //     scope: this
    // });
    
}


function Trim(str)
{ 
    console.log('Trim');
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

function notice(message,callback,title,buttonName) {
    navigator.notification.alert(
        message,  // message
        callback,         // callback
        title,            // title
        buttonName                  // buttonName
    );
}


function InvalidFunc(){
    var root = Ext.getCmp('rootView');
    root.pop(Ext.getCmp('loginView'));
}