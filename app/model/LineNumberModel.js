Ext.define('SYSM.model.LineNumberModel', {
    extend : 'Ext.data.Model',
    requires: [
        'Ext.data.Field'
    ],
    config: {
        fields: [
            {name: 'equipmentId'},
            {name: 'equipmentDesc'},
            {name: 'SEQUENCEID'}
        ]
    }
});
