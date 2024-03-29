/*
 * File: app/view/EXWarehouseMaterial.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SYSM.view.EXWarehouseMaterial', {
    extend: 'Ext.Container',
    alias: 'widget.exWarehouseMaterial',

    requires: [
        'Ext.Container',
        'Ext.Spacer',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        id: 'exWarehouseMaterial',
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                height: 80,
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        cls: 'menu_view_bg',
                        height: 80,
                        itemId: 'titileLayout',
                        padding: '0 20',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: [
                                    'base_font_family',
                                    'title_font_size'
                                ],
                                html: '原料出库'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'buttonLayout',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'base_font_family',
                                height: '100%',
                                itemId: 'mycontainer61',
                                margin: '0 0 0 10',
                                minWidth: 70,
                                layout: {
                                    type: 'hbox',
                                    align: 'center',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        html: '<'
                                    },
                                    {
                                        xtype: 'container',
                                        html: '返回'
                                    }
                                ],
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.element.on('tap',function(){
                                                //     var root = component.up('#root');
                                                //     var menuView = root.down('#menuView');
                                                //     var slide = Ext.create("Ext.fx.layout.card.Slide",{direction:"right"});
                                                //     root.animateActiveItem(menuView,slide);
                                                var root = Ext.getCmp('rootView');
                                                root.pop();
                                            });

                                        },
                                        event: 'initialize'
                                    }
                                ]
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'container',
                                cls: 'base_font_family',
                                hidden: true,
                                html: '确认',
                                margin: '0 10 0 0'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                cls: 'white_bg',
                padding: '10% 2%',
                scrollable: 'vertical',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '钢卷号',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: [
                                    'light_blue_border',
                                    'margin_content'
                                ],
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'matId',
                                        inputCls: 'white_select_input'
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                cls: [
                                    'menu_view_bg',
                                    'base_font_family'
                                ],
                                hidden: true,
                                itemId: 'mybutton4',
                                text: '扫码'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: ' 钢种',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'steelGrade',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '规格',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'standard',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '重量',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'weight',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '垛位号',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'slotId',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '所在库',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'warehouseName',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: [
                                    'menu_view_bg',
                                    'base_font_family'
                                ],
                                hidden: false,
                                itemId: 'mybutton5',
                                text: '废品出库'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: [
                                    'menu_view_bg',
                                    'base_font_family'
                                ],
                                hidden: false,
                                itemId: 'mybutton6',
                                text: '原料外卖'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMytextfield1Blur',
                event: 'blur',
                delegate: '#matId'
            },
            {
                fn: 'onMatIdClearicontap',
                event: 'clearicontap',
                delegate: '#matId'
            },
            {
                fn: 'onMybutton4Tap',
                event: 'tap',
                delegate: '#mybutton4'
            },
            {
                fn: 'onMybutton4Tap1',
                event: 'tap',
                delegate: '#mybutton5'
            },
            {
                fn: 'onMybutton4Tap11',
                event: 'tap',
                delegate: '#mybutton6'
            }
        ]
    },

    onMytextfield1Blur: function(textfield, e, eOpts) {
        console.log('失去焦点');
        var currentView = textfield.up('#exWarehouseMaterial');
        var myMatId = textfield.getValue();
        console.log('失去焦点:',myMatId);//1540157931040
        if (myMatId!==''&&myMatId!==null&&myMatId!==undefined) {
            Ext.Ajax.request({
                //     url: 'system/login!login.action',
                //     url:'http://192.168.0.112/mes-wtm-app/system/login!login.action',
                url:rootUrl+'/wtm/inventory-mat!findByPage.action',
                method:'POST',
                params: {
                    //         username: userName,
                    //         password: passWord,
                    'qm.matId':textfield.getValue()
                },
                success: function(conn, response, options, eOpts) {
                    console.log('success');
                    var text = conn.responseText;
                    var obj = Ext.decode(text);
                    console.log('conn = ',conn.responseText);
                    console.log('obj = ',obj);
                    if (obj.results===1) {

                        currentView.setData({
                            a:text
                        });

                        currentView.down('#standard').setValue(obj.items[0].matWidth+
                                    'mm x'+obj.items[0].matThickness+'mm');
                        currentView.down('#slotId').setValue(obj.items[0].slotId);
                        currentView.down('#weight').setValue(obj.items[0].matWeight);
                        currentView.down('#warehouseName').setValue(obj.items[0].warehouseName);
                        currentView.down('#steelGrade').setValue(obj.items[0].steelGrade);
        //                 console.log('重量：'+obj.items[0].matWeight+'，规格：'+obj.items[0].matWidth+
        //                             'mm x'+obj.items[0].matThickness+'mm,钢种:'+obj.items[0].steelGrade);

                    } else {
                        if (Ext.os.is('Android')) {
                            window.plugins.toast.show('没有匹配的结果！', 'long', 'center',
                                                      function(a){console.log('toast success: ' + a);},
                                                      function(b){console.log('toast error: ' + b);});
                        } else {
                            Ext.Msg.alert('错误','没有匹配的结果！',Ext.emptyFn);
                        }
                    }

                },
                failure: function(conn, response, options, eOpts) {
                    if (Ext.os.is('Android')) {
                        window.plugins.toast.show('连接异常！', 'long', 'center',
                                                  function(a){console.log('toast success: ' + a);},
                                                  function(b){console.log('toast error: ' + b);});
                    } else {
                        Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
                    }
                }
            });
        } else {
            if (Ext.os.is('Android')) {
                window.plugins.toast.show('钢卷号不能为空！', 'long', 'center',
                                          function(a){console.log('toast success: ' + a);},
                                          function(b){console.log('toast error: ' + b);});
            } else {
                Ext.Msg.alert('错误','钢卷号不能为空！',Ext.emptyFn);
            }
        }


    },

    onMatIdClearicontap: function(textfield, e, eOpts) {
        var currentView = textfield.up('#exWarehouseMaterial');
        currentView.down('#standard').setValue('');
        currentView.down('#slotId').setValue('');
        currentView.down('#weight').setValue('');
        currentView.down('#warehouseName').setValue('');
        currentView.down('#steelGrade').setValue('');
    },

    onMybutton4Tap: function(button, e, eOpts) {
        var currentView = button.up('#exWarehouse');

        //扫描功能
        if (Ext.os.is.Android) {
            cordova.plugins.barcodeScanner.scan(
                //扫描成功回调
                function (result) {
                    //解析结果
                    var myMatId = result.text;
                    currentView.down('#matId').setValue(myMatId);
                    //服务器查询结果
                    //显示结果
                    if (myMatId!==''&&myMatId!==null&&myMatId!==undefined) {
                        Ext.Ajax.request({
                            //     url: 'system/login!login.action',
                            //     url:'http://192.168.0.112/mes-wtm-app/system/login!login.action',
                            url:rootUrl+'/wtm/inventory-mat!findByPage.action',
                            method:'POST',
                            params: {
                                //         username: userName,
                                //         password: passWord,
                                'qm.matId':myMatId
                            },
                            success: function(conn, response, options, eOpts) {
                                console.log('success');
                                var text = conn.responseText;
                                var obj = Ext.decode(text);
                                console.log('conn = ',conn.responseText);
                                console.log('obj = ',obj);
                                if (obj.results===1) {
                                    currentView.down('#standard').setValue(obj.items[0].matWidth+
                                                                          'mm x'+obj.items[0].matThickness+'mm');
                                    currentView.down('#slotId').setValue(obj.items[0].slotId);

                                } else {
                                    if (Ext.os.is('Android')) {
                                        window.plugins.toast.show('没有匹配的结果！', 'long', 'center',
                                                                  function(a){console.log('toast success: ' + a);},
                                                                  function(b){console.log('toast error: ' + b);});
                                    } else {
                                        Ext.Msg.alert('错误','没有匹配的结果！',Ext.emptyFn);
                                    }
                                }

                            },
                            failure: function(conn, response, options, eOpts) {
                                if (Ext.os.is('Android')) {
                                    window.plugins.toast.show('连接异常！', 'long', 'center',
                                                              function(a){console.log('toast success: ' + a);},
                                                              function(b){console.log('toast error: ' + b);});
                                } else {
                                    Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
                                }
                            }
                        });
                    } else {
                        if (Ext.os.is('Android')) {
                                    window.plugins.toast.show('钢卷号扫描失败！', 'long', 'center',
                                                              function(a){console.log('toast success: ' + a);},
                                                              function(b){console.log('toast error: ' + b);});
                                } else {
                                    Ext.Msg.alert('错误','钢卷号扫描失败！',Ext.emptyFn);
                                }
                    }
                    //服务器查询结果
                    //显示结果
                },
                //扫描失败回调
                function (error) {
        //             showContainer.setHtml("Scanning failed: " + error);
                    if (Ext.os.is('Android')) {
                        window.plugins.toast.show('条形码扫描失败！', 'long', 'center',
                                                  function(a){console.log('toast success: ' + a);},
                                                  function(b){console.log('toast error: ' + b);});
                    } else {
                        Ext.Msg.alert('错误','条形码扫描失败！',Ext.emptyFn);
                    }
                }
            );
        }
    },

    onMybutton4Tap1: function(button, e, eOpts) {
        var me = button;//1410358722010
        var view = me.up('#exWarehouseMaterial');
        var data = view.getData();
        var target = view.down('#target');//.getValue();


        if (data===null||data===undefined||
            data.a===null||data.a===undefined||data.a==='') {
            if (Ext.os.is('Android')) {
                window.plugins.toast.show('钢卷信息不能为空！', 'long', 'center',
                                          function(a){console.log('toast success: ' + a);},
                                          function(b){console.log('toast error: ' + b);});
            } else {
                Ext.Msg.alert('错误','钢卷信息不能为空！',Ext.emptyFn);
            }
        }
        // else if (target.valueField===null||target.valueField===undefined||target.valueField==='') {
        //     if (Ext.os.is('Android')) {
        //         window.plugins.toast.show('目标垛位不能为空！', 'long', 'center',
        //                                   function(a){console.log('toast success: ' + a);},
        //                                   function(b){console.log('toast error: ' + b);});
        //     } else {
        //         Ext.Msg.alert('错误','目标垛位不能为空！',Ext.emptyFn);
        //     }
        // }
            else {
            console.log(data.a);
            var coil = Ext.decode(data.a);
            //     console.log('coil = ' , coil);
            //     console.log('username = ' , sessionStorage.username);
            //     console.log('target = ' , view.down('#target').getValue());
            var obj = {};
            obj.matId= coil.items[0].matId;
            obj.slotId= coil.items[0].slotId;
            obj.layer= coil.items[0].layer;
            obj.soId= coil.items[0].soId;
            obj.soItem= coil.items[0].soItem;
            obj.steelGrade= coil.items[0].steelGrade;
            obj.matWidth= coil.items[0].matWidth;
            obj.matThickness= coil.items[0].matThickness;
            obj.matWeight= coil.items[0].matWeight;
            obj.warehouseName= coil.items[0].warehouseName;
                obj.sid= coil.items[0].sid;
                obj.version= coil.items[0].version;
        //     obj.sid= target.sid;
        //     obj.matType= target.matType;
        //     obj.targetSlotLayer= target.layer;

        //     "matId": "1530103222010",
        //      "slotId": "YL01-A-01-03",
        //      "layer": 1,
        //      "soId": "0000617706",
        //      "soItem": "000190",
        //      "steelGrade": "M3A30",
        //      "matWidth": 1571,
        //      "matThickness": 4.5,
        //      "matWeight": 25.64,
        //      "warehouseName": "\u539f\u6599\u5e93",
        //      "sid": 2537,
        //      "matType": ""


            var str = Ext.encode(obj);
            console.log(str);


            Ext.Ajax.request({
                //     url: 'system/login!login.action',
                //     url:'http://192.168.0.112/mes-wtm-app/wtm/inventory-check!saveRecords.action',
                url:rootUrl+'/wtm/wtm-waste!wasteOutMat.action',
                method:'POST',
                params: {
                    'matList':str
                },
                success: function(conn, response, options, eOpts) {
                    console.log('success');
                    var text = conn.responseText;
                    var obj = Ext.decode(text);
                    console.log('conn = ',conn.responseText);
                    console.log('obj = ',obj);
                    if (obj.success) {
                        if (Ext.os.is('Android')) {
                            window.plugins.toast.show(obj.message, 'long', 'center',
                                                      function(a){console.log('toast success: ' + a);},
                                                      function(b){console.log('toast error: ' + b);});
                        } else {
                            Ext.Msg.alert('结果',obj.message,Ext.emptyFn);
                        }

                    } else {
                        if (Ext.os.is('Android')) {
                            window.plugins.toast.show(obj.message, 'long', 'center',
                                                      function(a){console.log('toast success: ' + a);},
                                                      function(b){console.log('toast error: ' + b);});
                        } else {
                            Ext.Msg.alert('错误',obj.message,Ext.emptyFn);
                        }

                    }

                },
                failure: function(conn, response, options, eOpts) {
                    if (Ext.os.is('Android')) {
                        window.plugins.toast.show('连接异常！', 'long', 'center',
                                                  function(a){console.log('toast success: ' + a);},
                                                  function(b){console.log('toast error: ' + b);});
                    } else {
                        Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
                    }
                }
            });
        }

    },

    onMybutton4Tap11: function(button, e, eOpts) {
        var me = button;//1410358722010
        var view = me.up('#exWarehouseMaterial');
        var data = view.getData();
        var target = view.down('#target');//.getValue();


        if (data===null||data===undefined||
            data.a===null||data.a===undefined||data.a==='') {
            if (Ext.os.is('Android')) {
                window.plugins.toast.show('钢卷信息不能为空！', 'long', 'center',
                                          function(a){console.log('toast success: ' + a);},
                                          function(b){console.log('toast error: ' + b);});
            } else {
                Ext.Msg.alert('错误','钢卷信息不能为空！',Ext.emptyFn);
            }
        }
        // else if (target.valueField===null||target.valueField===undefined||target.valueField==='') {
        //     if (Ext.os.is('Android')) {
        //         window.plugins.toast.show('目标垛位不能为空！', 'long', 'center',
        //                                   function(a){console.log('toast success: ' + a);},
        //                                   function(b){console.log('toast error: ' + b);});
        //     } else {
        //         Ext.Msg.alert('错误','目标垛位不能为空！',Ext.emptyFn);
        //     }
        // }
            else {
            console.log(data.a);
            var coil = Ext.decode(data.a);
            //     console.log('coil = ' , coil);
            //     console.log('username = ' , sessionStorage.username);
            //     console.log('target = ' , view.down('#target').getValue());
            var obj = {};
            obj.matId= coil.items[0].matId;
            obj.slotId= coil.items[0].slotId;
            obj.layer= coil.items[0].layer;
            obj.soId= coil.items[0].soId;
            obj.soItem= coil.items[0].soItem;
            obj.steelGrade= coil.items[0].steelGrade;
            obj.matWidth= coil.items[0].matWidth;
            obj.matThickness= coil.items[0].matThickness;
            obj.matWeight= coil.items[0].matWeight;
            obj.warehouseName= coil.items[0].warehouseName;
                obj.sid= coil.items[0].sid;
                obj.version= coil.items[0].version;
        //     obj.sid= target.sid;
        //     obj.matType= target.matType;
        //     obj.targetSlotLayer= target.layer;

        // {
        //  "matId": "1530103222010",
        //  "slotId": "YL01-A-01-03",
        //  "layer": 1,
        //  "soId": "0000617706",
        //  "soItem": "000190",
        //  "steelGrade": "M3A30",
        //  "matWidth": 1571,
        //  "matThickness": 4.5,
        //  "matWeight": 25.64,
        //  "warehouseName": "\u539f\u6599\u5e93",
        //  "sid": 2537,
        //  "matType": ""
        // }

            var str = Ext.encode(obj);
            console.log(str);


            Ext.Ajax.request({
                //     url: 'system/login!login.action',
                //     url:'http://192.168.0.112/mes-wtm-app/wtm/inventory-check!saveRecords.action',
                url:rootUrl+'/wtm/wtm-waste!saleOutMat.action',
                method:'POST',
                params: {
                    'matList':str
                },
                success: function(conn, response, options, eOpts) {
                    console.log('success');
                    var text = conn.responseText;
                    var obj = Ext.decode(text);
                    console.log('conn = ',conn.responseText);
                    console.log('obj = ',obj);
                    if (obj.success) {
                        if (Ext.os.is('Android')) {
                            window.plugins.toast.show(obj.message, 'long', 'center',
                                                      function(a){console.log('toast success: ' + a);},
                                                      function(b){console.log('toast error: ' + b);});
                        } else {
                            Ext.Msg.alert('结果',obj.message,Ext.emptyFn);
                        }

                    } else {
                        if (Ext.os.is('Android')) {
                            window.plugins.toast.show(obj.message, 'long', 'center',
                                                      function(a){console.log('toast success: ' + a);},
                                                      function(b){console.log('toast error: ' + b);});
                        } else {
                            Ext.Msg.alert('错误',obj.message,Ext.emptyFn);
                        }

                    }

                },
                failure: function(conn, response, options, eOpts) {
                    if (Ext.os.is('Android')) {
                        window.plugins.toast.show('连接异常！', 'long', 'center',
                                                  function(a){console.log('toast success: ' + a);},
                                                  function(b){console.log('toast error: ' + b);});
                    } else {
                        Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
                    }
                }
            });
        }

    }

});