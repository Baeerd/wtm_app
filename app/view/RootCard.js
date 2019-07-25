/*
 * File: app/view/RootCard.js
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

Ext.define('SYSM.view.RootCard', {
    extend: 'Ext.Container',

    requires: [
        'SYSM.view.LoginView',
        'SYSM.view.MenuView',
        'SYSM.view.CutInboundView',
        'SYSM.view.WtmPankuView',
        'SYSM.view.EchoSlabCutView',
        'SYSM.view.TargetChangeingView',
        'SYSM.view.EXWarehouseMaterial',
        'SYSM.view.StoreCheck',
        'SYSM.view.RealRight',
        'SYSM.view.TagCheck',
        'SYSM.view.TestView',
        'Ext.Container'
    ],

    config: {
        id: 'rootCard',
        layout: 'card',
        items: [
            {
                xtype: 'loginview'
            },
            {
                xtype: 'menuview'
            },
            {
                xtype: 'putawayview'
            },
            {
                xtype: 'targetchangeingview'
            },
            {
                xtype: 'exWarehouseMaterial'
            },
            {
                xtype: 'storecheck'
            },
            {
                xtype: 'realright'
            },
            {
                xtype: 'tagcheck'
            },
            {
                xtype: 'testView'
            }
        ]
    }

});