/*
 * File: app/view/TestView.js
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

Ext.define('SYSM.view.TestView', {
    extend: 'Ext.Container',
    alias: 'widget.testView',

    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],

    config: {
        id: 'testView',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '123213213',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'mybutton16',
                        text: 'My'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'MyButton7'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'mybutton26',
                text: 'MyButton26'
            }
        ],
        listeners: [
            {
                fn: 'onMybutton16Tap',
                event: 'tap',
                delegate: '#mybutton16'
            },
            {
                fn: 'onMybutton26Tap',
                event: 'tap',
                delegate: '#mybutton26'
            }
        ]
    },

    onMybutton16Tap: function(button, e, eOpts) {
        var me = this;
        Ext.Ajax.request({
        //     url: 'system/login!login.action',
        //     url:'http://192.168.0.112/mes-wtm-app/system/login!login.action',
        //     url:'http://192.168.9.189:8080/pes-sl-coldrolling-app-v1.0/combo/combo/findComboBoxValue.action',
            method:'POST',
            params: {
        //         //库
        //         tableName: 'V_MD_WAREHOUSE',
        //         displayField: 'WAREHOUSE_NAME',
        //         valueField:'WAREHOUSE_ID',

                //跨
                tableName: 'V_MD_WAREHOUSE_HALL',
                displayField: 'HALL_NAME',
                valueField:'HALL_ID',

                nextField:me.nextField,
        //         filterName:me.filterName,
        //         nextField:'YL',
        //         filterName:'YL',
                filterName:'WAREHOUSE_ID',
                filterValue:'YL',
        //         filterValue:me.filterValue,
                filterValueLike:me.filterValueLike
                //pageCheckCode:pageCheckCode
            },
            success: function(conn, response, options, eOpts) {
                console.log('success');
                var text = conn.responseText;
                var obj = Ext.decode(text);
                console.log('conn = ',conn.responseText);
        //         if (obj.success) {
        //             var menuView = root.down('#menuView');
        //             var slide = Ext.create("Ext.fx.layout.card.Slide",{direction:"left"});
        //             root.animateActiveItem(menuView,slide);
        //             root.down('#menuView').down('#menuDataView').getStore().load();
        //         } else {
        //             Ext.Msg.alert('错误','用户名或密码错误！',Ext.emptyFn);
        //         }

            },
            failure: function(conn, response, options, eOpts) {
                console.log('failure');
                var text = conn.responseText;
                var obj = Ext.decode(text);
                console.log('conn = ',conn.responseText);
                Ext.Msg.alert('错误','连接异常！',Ext.emptyFn);
            }
        });
    },

    onMybutton26Tap: function(button, e, eOpts) {
        // var store = Ext.getStore('InventoryCheckStore');
        // var store = Ext.getStore('abcStore');
        var store = Ext.getStore('MyDirectStore');

        store.add({
            slotSid:1
        });
        store.add({
            slotSid:2
        });
        try
        {
        store.sync();
        }
        catch (e)
        {
         console.log(e);
        }

        console.log(store);
    }

});