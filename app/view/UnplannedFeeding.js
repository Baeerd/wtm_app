/*
 * File: app/view/UnplannedFeeding.js
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

Ext.define('SYSM.view.UnplannedFeeding', {
    extend: 'Ext.Container',
    alias: 'widget.unplannedFeeding',

    requires: [
        'Ext.Spacer',
        'Ext.field.Select',
        'Ext.Button',
        'Ext.dataview.DataView'
    ],

    config: {
        id: 'unplannedFeeding',
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
                                html: '无计划投料'
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
                                    align: 'center',
                                    pack: 'center'
                                },
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
                                ],
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                html: '<'
                                            },
                                            {
                                                xtype: 'container',
                                                html: '返回'
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
                                    align: 'center',
                                    pack: 'center'
                                },
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            // var me = component;//3991206913302
                                            // component.element.on('tap',function() {
                                            //     var view = me.up('#putawayView');
                                            //     var data = view.getData();
                                            //     var target = view.down('#target');//.getValue();


                                            //     if (data===null||data===undefined||
                                            //         data.a===null||data.a===undefined||data.a==='') {
                                            //         if (Ext.os.is('Android')) {
                                            //             window.plugins.toast.show('钢卷信息不能为空！', 'long', 'center',
                                            //                                       function(a){console.log('toast success: ' + a);},
                                            //                                       function(b){console.log('toast error: ' + b);});
                                            //         } else {
                                            //             Ext.Msg.alert('错误','钢卷信息不能为空！',Ext.emptyFn);
                                            //         }

                                            //     } else if (target.valueField===null||target.valueField===undefined||target.valueField==='') {
                                            //         if (Ext.os.is('Android')) {
                                            //             window.plugins.toast.show('目标垛位不能为空！', 'long', 'center',
                                            //                                       function(a){console.log('toast success: ' + a);},
                                            //                                       function(b){console.log('toast error: ' + b);});
                                            //         } else {
                                            //             Ext.Msg.alert('错误','目标垛位不能为空！',Ext.emptyFn);
                                            //         }

                                            //     } else {
                                            //         console.log(data.a);
                                            //         var coil = Ext.decode(data.a);
                                            //         //     console.log('coil = ' , coil);
                                            //         //     console.log('username = ' , sessionStorage.username);
                                            //         //     console.log('target = ' , view.down('#target').getValue());
                                            //         var obj = {};
                                            //         obj.matId= coil.items[0].matId;
                                            //         obj.steelGrade= coil.items[0].steelGrade;
                                            //         obj.matThickness= coil.items[0].matThickness;
                                            //         obj.matWidth= coil.items[0].matWidth;
                                            //         //obj.l4BatchId= coil.items[0].l4BatchNo;
                                            //         //obj.l4MatId= coil.items[0].l4MatNo;
                                            //         //obj.soId= coil.items[0].soId;
                                            //         //obj.soItem= coil.items[0].soItem;
                                            //         obj.slotId= target.valueField;//自己写
                                            //         obj.layer= target.layer;
                                            //         //obj.slotId= view.down('#target').getValue();
                                            //         obj.matWeight = coil.items[0].matWeight;
                                            //         obj.produceLine = coil.items[0].produceLine;
                                            //         obj.produceDate = coil.items[0].produceDate;
                                            //         obj.hotRollingWidth = coil.items[0].hotRollingWidth;
                                            //         obj.hotRollingThickness = coil.items[0].hotRollingThickness;
                                            //         obj.isClosed = coil.items[0].isClosed;
                                            //         obj.closedReason = coil.items[0].closedReason;
                                            //         obj.meId = coil.items[0].meId;



                                            //         var str = Ext.encode(obj);
                                            //             console.log(str);


                                            //         Ext.Ajax.request({
                                            //             //     url: 'system/login!login.action',
                                            //             //     url:'http://192.168.0.112/mes-wtm-app/wtm/inventory-check!saveRecords.action',
                                            //             url:rootUrl+'/wtm/downline!saveStorage.action',
                                            //             method:'POST',
                                            //             params: {
                                            //                 'detaillist':str
                                            //             },
                                            //             success: function(conn, response, options, eOpts) {
                                            //                 console.log('success');
                                            //                 var text = conn.responseText;
                                            //                 var obj = Ext.decode(text);
                                            //                 console.log('conn = ',conn.responseText);
                                            //                 console.log('obj = ',obj);
                                            //                 if (obj.success) {
                                            //                     if (Ext.os.is('Android')) {
                                            //                         window.plugins.toast.show(obj.message, 'long', 'center',
                                            //                                                   function(a){console.log('toast success: ' + a);},
                                            //                                                   function(b){console.log('toast error: ' + b);});
                                            //                     } else {
                                            //                         Ext.Msg.alert('结果',obj.message,Ext.emptyFn);
                                            //                     }

                                            //                 } else {
                                            //                     if (Ext.os.is('Android')) {
                                            //                         window.plugins.toast.show('提交失败！', 'long', 'center',
                                            //                                                   function(a){console.log('toast success: ' + a);},
                                            //                                                   function(b){console.log('toast error: ' + b);});
                                            //                     } else {
                                            //                        Ext.Msg.alert('错误','提交失败！',Ext.emptyFn);
                                            //                     }

                                            //                 }

                                            //             },
                                            //             failure: function(conn, response, options, eOpts) {
                                            //                 if (Ext.os.is('Android')) {
                                            //                     window.plugins.toast.show('连接异常！', 'long', 'center',
                                            //                                               function(a){console.log('toast success: ' + a);},
                                            //                                               function(b){console.log('toast error: ' + b);});
                                            //                 } else {
                                            //                     Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
                                            //                 }

                                            //             }
                                            //         });
                                            //     }

                                            // });
                                        },
                                        event: 'initialize'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'container',
                                        html: '投料'
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
                        width: '100%',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: 36,
                                        margin: '0 1',
                                        width: '100%',
                                        layout: {
                                            type: 'hbox',
                                            align: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'blue_font',
                                                html: '库',
                                                width: 50
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: [
                                                    'light_blue_border',
                                                    'margin_content'
                                                ],
                                                width: '30%',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'selectfield',
                                                        flex: 1,
                                                        cls: 'small_textfield_cls',
                                                        itemId: 'WAREHOUSESelectField',
                                                        inputCls: 'white_select_input',
                                                        autoSelect: false,
                                                        displayField: 'key',
                                                        store: 'unplannedWAREHOUSEJsonStore',
                                                        valueField: 'nextField'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        height: 36,
                                        margin: '0 1',
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
                                                width: 50
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: [
                                                    'light_blue_border',
                                                    'margin_content'
                                                ],
                                                width: '30%',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        flex: 1,
                                                        cls: 'small_textfield_cls',
                                                        itemId: 'matId',
                                                        inputCls: 'white_select_input'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                cls: [
                                    'base_font_family',
                                    'menu_item_bg'
                                ],
                                itemId: 'search',
                                style: 'font-size:12px;',
                                width: 45,
                                text: '查询'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '0 1',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '产线',
                                width: 50
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: [
                                    'light_blue_border',
                                    'margin_content'
                                ],
                                width: '30%',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        flex: 1,
                                        cls: 'small_textfield_cls',
                                        itemId: 'productionLineSelectField',
                                        inputCls: 'white_select_input',
                                        displayField: 'key',
                                        store: 'unplannedProductionLineJsonStore',
                                        valueField: 'nextField'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'dataview',
                        flex: 1,
                        itemId: 'feedingDataView',
                        margin: '5 0',
                        width: '100%',
                        defaultType: 'unplanFeedingItem',
                        store: 'unplannedFeedingJsonStore',
                        useComponents: true
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onProductionLineSelectFieldChange',
                event: 'change',
                delegate: '#WAREHOUSESelectField'
            },
            {
                fn: 'onWAREHOUSESelectFieldFocus',
                event: 'focus',
                delegate: '#WAREHOUSESelectField'
            },
            {
                fn: 'onProductionLineSelectFieldChange1',
                event: 'change',
                delegate: '#matId'
            },
            {
                fn: 'onSearchTap',
                event: 'tap',
                delegate: '#search'
            },
            {
                fn: 'onPlanNumberSelectFieldChange',
                event: 'change',
                delegate: '#productionLineSelectField'
            },
            {
                fn: 'onPutawayViewHide',
                event: 'hide'
            }
        ]
    },

    onProductionLineSelectFieldChange: function(selectfield, newValue, oldValue, eOpts) {
        // var UnplannedFeedingJsonStore = Ext.getStore('UnplannedFeedingJsonStore');
        // UnplannedFeedingJsonStore.setParams({
        //     tableName : 'sgai_md_common_type',
        //     displayName : 'type_name',
        //     valueName : 'type_id',
        //     filterName : 'parent_sid',
        //     filterValue : '500',
        //     orderby:'sequence'
        // });
        // UnplannedFeedingJsonStore.load();
    },

    onWAREHOUSESelectFieldFocus: function(selectfield, e, eOpts) {
        console.log('123');
        var num = selectfield.getStore().getCount();
        console.log(num);
    },

    onProductionLineSelectFieldChange1: function(textfield, newValue, oldValue, eOpts) {
        // var UnplannedFeedingJsonStore = Ext.getStore('UnplannedFeedingJsonStore');
        // UnplannedFeedingJsonStore.setParams({
        //     tableName : 'sgai_md_common_type',
        //     displayName : 'type_name',
        //     valueName : 'type_id',
        //     filterName : 'parent_sid',
        //     filterValue : '500',
        //     orderby:'sequence'
        // });
        // UnplannedFeedingJsonStore.load();
    },

    onSearchTap: function(button, e, eOpts) {
        var unplannedFeeding = button.up('#unplannedFeeding');
        var WAREHOUSESelectField = unplannedFeeding.down('#WAREHOUSESelectField');
        var matId = unplannedFeeding.down('#matId');
        var feedingDataView = unplannedFeeding.down('#feedingDataView');
        var feedingDataViewStore = feedingDataView.getStore();
        // if (0<feedingDataViewStore.getCount()) {
        //     feedingDataViewStore.removeAll();
        // }
        console.log(WAREHOUSESelectField.getValue());
        console.log(matId.getValue());
        feedingDataViewStore.setParams({
            'qm.warehouseName': WAREHOUSESelectField.getValue(),
            'qm.matId': matId.getValue()
        });
        feedingDataViewStore.load();


    },

    onPlanNumberSelectFieldChange: function(selectfield, newValue, oldValue, eOpts) {
        var produceLine = selectfield.up('#plannedFeeding').down('#productionLineSelectField').getValue();
        if (produceLine === '') {
            produceLine=null;
        }

        var PlannedFeedingJsonStore = Ext.getStore('PlannedFeedingJsonStore');
        PlannedFeedingJsonStore.setParams({
            'qm.produceLine':produceLine,
            'qm.rsId':newValue
        });
        PlannedFeedingJsonStore.load();
    },

    onPutawayViewHide: function(component, eOpts) {
        // component.destory();
    }

});