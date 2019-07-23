/*
 * File: app/view/wtmDaoduoView.js
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

Ext.define('SYSM.view.WtmDaoduoView', {
    extend: 'Ext.Container',
    alias: 'widget.wtmDaoduoView',

    requires: [
        'Ext.Container',
        'Ext.Spacer',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.field.Toggle'
    ],

    config: {
        id: 'wtmDaoduoView',
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
                        itemId: 'titleLayout',
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
                                    'title_font_size',
                                    'title_cls'
                                ],
                                html: '倒剁'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 80,
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
                                itemId: 'mycontainer1',
                                margin: '0 0 0 10',
                                minWidth: 70,
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.element.on('tap',function(){

                                                var currentView = component.up('#wtmDaoduoView');
                                                currentView.down('#matId').setValue('');
                                                currentView.down('#scanPile').setValue('');
                                                currentView.down('#locationId').setValue('');
                                                setTimeout(function() {
                                                    currentView.down('#matId').focus( );
                                                },1000);
                                            });

                                        },
                                        event: 'initialize'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: 'hbox'
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        cls: 'button_normal',
                                        itemId: 'mycontainer110',
                                        margin: '10 0',
                                        layout: {
                                            type: 'hbox',
                                            align: 'center',
                                            pack: 'center'
                                        },
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    component.element.on('touchstart',function() {
                                                        component.setCls('button_press');
                                                    });
                                                    component.element.on('touchend',function() {
                                                        component.setCls('button_normal');
                                                    });
                                                },
                                                event: 'initialize'
                                            }
                                        ],
                                        items: [
                                            {
                                                xtype: 'container'
                                            },
                                            {
                                                xtype: 'container',
                                                html: '清空'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'container',
                                cls: 'base_font_family',
                                height: '100%',
                                itemId: 'mycontainer67',
                                margin: '0 10 0 0',
                                minWidth: 70,
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            var me = component;//3991206913302
                                            component.element.on('tap',function() {

                                                Ext.Viewport.setMasked({
                                                    xtype: 'loadmask',
                                                    fullscreen:true,
                                                    message: '请稍候......'
                                                });

                                                var view = component.up('#wtmDaoduoView');
                                                var data = view.getData();
                                                var zoneId = view.down('#scanPile');//.getValue();


                                                if (data===null||data===undefined||
                                                data.a===null||data.a===undefined||data.a==='') {
                                                    if (Ext.os.is('Android')) {
                                                        //             window.plugins.toast.show('钢卷信息不能为空！', 'long', 'center',
                                                        //                                       function(a){console.log('toast success: ' + a);},
                                                        //                                       function(b){console.log('toast error: ' + b);});
                                                        notice('钢卷信息不能为空！',null,'错误','确定');
                                                    } else {
                                                        Ext.Msg.alert('错误','钢卷信息不能为空！',Ext.emptyFn);
                                                    }

                                                    Ext.Viewport.setMasked(false);

                                                } else if (zoneId.getValue()===null||zoneId.getValue()===undefined||zoneId.getValue()==='') {
                                                    if (Ext.os.is('Android')) {
                                                        //             window.plugins.toast.show('目标垛位不能为空！', 'long', 'center',
                                                        //                                       function(a){console.log('toast success: ' + a);},
                                                        //                                       function(b){console.log('toast error: ' + b);});
                                                        notice('目标垛位不能为空！',null,'错误','确定');
                                                    } else {
                                                        Ext.Msg.alert('错误','目标垛位不能为空！',Ext.emptyFn);
                                                    }

                                                    Ext.Viewport.setMasked(false);
                                                } else {
                                                    // 入库按钮
                                                    var me = this;
                                                    var coil = Ext.decode(data.a);

                                                    var matId = coil.data[0].matId; // 钢卷号
                                                    var locationId = view.down('#locationId').getValue(); // 垛位号
                                                    var zoneId = view.down('#scanPile').getValue(); // 垛位号
                                                    Ext.Ajax.request({
                                                        //     url: 'system/login!login.action',
                                                        //     url:'http://192.168.0.112/mes-wtm-app/wtm/inventory-check!saveRecords.action',
                                                        url:rootUrl+'/wtm/wtm-location/matMove.action',
                                                        method:'POST',
                                                        timeout : 8000,
                                                        params: {
                                                            'matNo' : matId,
                                                            'fromSlotId' : locationId,
                                                            'toSlotId' : zoneId,
                                                            'operationType' : '4'
                                                        },
                                                        success: function(conn, response, options, eOpts) {
                                                            console.log('success');
                                                            var text = conn.responseText;
                                                            var obj = Ext.decode(text);
                                                            console.log('conn = '+conn.responseText);
                                                            console.log('obj = '+obj.success);
                                                            if (obj.success) {
                                                                if (Ext.os.is('Android')) {
                                                                    notice(obj.meta.message,null,'结果','确定');
                                                                } else {
                                                                    Ext.Msg.alert('结果',obj.meta.message,Ext.emptyFn);
                                                                }
                                                                var currentView = component.up('#wtmDaoduoView');
                                                                currentView.down('#matId').setValue('');
                                                                currentView.down('#scanPile').setValue('');
                                                                currentView.down('#locationId').setValue('');
                                                            } else {

                                                                if (Ext.os.is('Android')) {
                                                                    //                         window.plugins.toast.show(obj.message, 'long', 'center',
                                                                    //                                                   function(a){console.log('toast success: ' + a);},
                                                                    //                                                   function(b){console.log('toast error: ' + b);});
                                                                    notice(obj.meta.message,null,'错误','确定');
                                                                } else {
                                                                    Ext.Msg.alert('错误',obj.meta.message,Ext.emptyFn);
                                                                }

                                                            }
                                                            Ext.Viewport.setMasked(false);

                                                        },
                                                        failure: function(conn, response, options, eOpts) {
                                                            var text = conn.responseText;
                                                            var obj = Ext.decode(text);
                                                            if (Ext.os.is('Android')) {
                                                                notice(obj.meta.message,null,'错误','确定');
                                                            } else {
                                                                Ext.Msg.alert('错误',obj.meta.message,Ext.emptyFn);
                                                            }

                                                            Ext.Viewport.setMasked(false);
                                                        }
                                                    });
                                                }

                                            });
                                        },
                                        event: 'initialize'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        cls: 'button_normal',
                                        itemId: 'mycontainer109',
                                        margin: '10 0',
                                        layout: {
                                            type: 'hbox',
                                            align: 'center',
                                            pack: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                html: '倒剁'
                                            }
                                        ],
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    component.element.on('touchstart',function() {
                                                        component.setCls('button_press');
                                                    });
                                                    component.element.on('touchend',function() {
                                                        component.setCls('button_normal');
                                                    });
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    }
                                ]
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
                                html: '物料号',
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
                                text: '清空'
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
                                html: '源垛位号',
                                width: 65
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: [
                                    'margin_content',
                                    'without_light_blue_border'
                                ],
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'locationId',
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
                                html: '扫描垛位',
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
                                        itemId: 'scanPile',
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
                fn: 'onMatIdClearicontap1',
                event: 'clearicontap',
                delegate: '#scanPile'
            },
            {
                fn: 'onMybutton4Tap1',
                event: 'tap',
                delegate: '#mybutton4'
            },
            {
                fn: 'onMybutton8Tap11',
                event: 'tap',
                delegate: '#mybutton10'
            },
            {
                fn: 'onMybutton11Tap',
                event: 'tap',
                delegate: '#mybutton11'
            },
            {
                fn: 'onwtmDaoduoViewHide',
                event: 'hide'
            }
        ]
    },

    onMytextfield1Blur: function(textfield, e, eOpts) {
        var currentView = textfield.up('#wtmDaoduoView');
        var myMatId = textfield.getValue();
        var myMatId = Trim(myMatId);
        console.log('失去焦点:',myMatId);//5191400884600//3991006289100
        if (myMatId!==''&&myMatId!==null&&myMatId!==undefined) {
            Ext.Ajax.request({
                url:rootUrl+'/wtm/wtm-location/findVoByParams.action',
                method:'POST',
                timeout : 8000,
                params: {
                    'qm.matId':textfield.getValue()
                },
                success: function(conn, response, options, eOpts) {
                    console.log('success');
                    var text = conn.responseText;
                    var obj = Ext.decode(text);
                    console.log('conn = ',conn.responseText);
                    console.log('obj = ',obj);
                    if (obj.data.length===1) {

                        currentView.setData({
                            a:text
                        });
                        var matTheoryWt = Number(obj.data[0].matTheoryWt);
                        var locationId = obj.data[0].locationId;
                        currentView.down('#locationId').setValue(locationId);
                        currentView.down('#scanPile').focus( );
                    } else {
                        if (Ext.os.is('Android')) {
                            notice('没有匹配的钢卷！',null,'错误','确定');
                        } else {
                            Ext.Msg.alert('错误','没有匹配的结果！',Ext.emptyFn);
                        }

                    }

                },
                failure: function(conn, response, options, eOpts) {
                    if (Ext.os.is('Android')) {
                        notice('连接异常！',null,'错误','确定');
                    } else {
                        Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
                    }

                }
            });
        } else if (myMatId!==''&&myMatId!==null&&myMatId!==undefined){
            if (Ext.os.is('Android')) {
                notice('不是有效的钢卷号！',null,'错误','确定');
            } else {
                Ext.Msg.alert('错误','不是有效的钢卷号！',Ext.emptyFn);
            }
        } else {
            var currentView = textfield.up('#wtmDaoduoView');
        }

    },

    onMatIdClearicontap: function(textfield, e, eOpts) {
        var currentView = textfield.up('#wtmDaoduoView');
        currentView.down('#locationId').setValue('');
    },

    onMybutton4Tap: function(button, e, eOpts) {
        var currentView = button.up('#wtmDaoduoView');
        currentView.down('#matId').setValue('');
        currentView.down('#scanPile').setValue('');
        currentView.down('#locationId').setValue('');

    },

    onMatIdClearicontap1: function(textfield, e, eOpts) {
        var currentView = textfield.up('#wtmDaoduoView');
        currentView.down('#scanPile').setValue('');
    },

    onwtmDaoduoViewHide: function(component, eOpts) {
        // component.destory();
    }

});