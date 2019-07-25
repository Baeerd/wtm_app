//初始化方法
function mainInit(){
    console.log('mainInit');
    //设置store的通讯地址
    var wtmPankuStore = Ext.getStore('wtmPankuStore');
    wtmPankuStore.getProxy().setUrl(rootUrl+'/wtm/wtm-location/findVoByParams.action');

    var echoSlabCutStore = Ext.getStore('echoSlabCutStore');
    echoSlabCutStore.getProxy().setUrl(rootUrl+'/mat/mat-material/findMatByApp.action');

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