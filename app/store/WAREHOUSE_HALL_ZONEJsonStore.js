/*
 * File: app/store/WAREHOUSE_HALL_ZONEJsonStore.js
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

Ext.define('SYSM.store.WAREHOUSE_HALL_ZONEJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SYSM.model.WAREHOUSEModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'SYSM.model.WAREHOUSEModel',
        storeId: 'WAREHOUSE_HALL_ZONEJsonStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        listeners: [
            {
                fn: 'onJsonstoreLoad',
                event: 'load'
            }
        ]
    },

    onJsonstoreLoad: function(store, records, successful, operation, eOpts) {

    }

});