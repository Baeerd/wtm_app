
document.addEventListener("deviceready", onDeviceReady, false);  
function onDeviceReady() { 
//     console.log('addListener');
    document.addEventListener("backbutton", onBackKeyDown, false);
}
  
function onBackKeyDown() {     
//     console.log('back');
//     var tag = sessionStorage.tag;
//     if (tag!==''&&tag!==null&&tag!==undefined){
//         console.log(tag);
//         var tagButton = Ext.getCmp(tag).down('#back');
//         tagButton.fireEvent('tap',tagButton);
//     }
    var root = Ext.getCmp('rootView');
    root.pop();
}  