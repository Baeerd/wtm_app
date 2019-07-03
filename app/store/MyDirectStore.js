/*
 * File: app/store/MyDirectStore.js
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

Ext.define('SYSM.store.MyDirectStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SYSM.model.InventoryCheckModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        model: 'SYSM.model.InventoryCheckModel',
        storeId: 'MyDirectStore',
        proxy: {
            type: 'ajax',
            api: {
                read: 'http://10.4.55.204:7001/mes-wtm-app/wtm/inventory-check!findByPage.action',
                create: 'http://10.4.55.204:7001/mes-wtm-app/wtm/inventory-check!add.action',
                update: 'http://10.4.55.204:7001/mes-wtm-app/wtm/inventory-check!update.action',
                destroy: 'http://10.4.55.204:7001/mes-wtm-app/wtm/inventory-check!destroy.action'
            },
            reader: {
                type: 'json'
            },
            writer: {
                type: 'json'
            }
        }
    }
});