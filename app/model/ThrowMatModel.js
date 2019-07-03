Ext.define('SYSM.model.ThrowMatModel', {
    extend : 'Ext.data.Model',
    requires: [
        'Ext.data.Field'
    ],
    config: {
        fields: [
            {name: 'sid'},
            {name: 'createdBy'},
            {name: 'createdDt'},
            {name: 'version'},
            {name: 'updatedBy'},
            {name: 'updatedDt'},
            {name: 'matId'},
            {name: 'sequenceId'},
            {name: 'matSerial'},
            {name: 'matWidth'},
            {name: 'matThickness'},
            {name: 'steelgradeId'},
            {name: 'l4SteelgradeId'},
            {name: 'slotId'},
            {name: 'layer'},
            {name: 'stateOut'},
            {name: 'invlayer'},
            {name: 'eqptId'},
            {name: 'psSid'},
            {name: 'matSid'}
        ]
    }
});
