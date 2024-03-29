/*
 * File: app/view/TagCheck.js
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

Ext.define('SYSM.view.TagCheck', {
    extend: 'Ext.Container',
    alias: 'widget.tagcheck',

    requires: [
        'Ext.Container',
        'Ext.Spacer',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        id: 'tagCheck',
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
                                html: '标签核对'
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
                                width: 75,
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
                        html: '二级标签',
                        margin: '2 0'
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
                                html: '钢卷号'
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
                                        itemId: 'matIdSecond',
                                        inputCls: 'white_select_input'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        html: '三级标签',
                        margin: '2 0'
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
                                html: '钢卷号'
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
                                        itemId: 'matIdThree',
                                        inputCls: 'white_select_input'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        cls: [
                            'menu_view_bg',
                            'base_font_family'
                        ],
                        itemId: 'mybutton5',
                        margin: '10 ',
                        width: '100%',
                        text: '比较'
                    },
                    {
                        xtype: 'container',
                        cls: 'big_font',
                        itemId: 'result'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMatIdSecondFocus',
                event: 'focus',
                delegate: '#matIdSecond'
            },
            {
                fn: 'onMatIdThreeFocus',
                event: 'focus',
                delegate: '#matIdThree'
            },
            {
                fn: 'onMybutton4Tap1',
                event: 'tap',
                delegate: '#mybutton5'
            }
        ]
    },

    onMatIdSecondFocus: function(textfield, e, eOpts) {
        var currentView = textfield.up('#tagCheck');
        var resultView = currentView.down('#result');
        resultView.setHtml('');
    },

    onMatIdThreeFocus: function(textfield, e, eOpts) {
        var currentView = textfield.up('#tagCheck');
        var resultView = currentView.down('#result');
        resultView.setHtml('');
    },

    onMybutton4Tap1: function(button, e, eOpts) {
        var currentView = button.up('#tagCheck');
        var resultView = currentView.down('#result');
        var matIdSecond = currentView.down('#matIdSecond');
        var matIdSecondValue = matIdSecond.getValue();
        var matIdThree = currentView.down('#matIdThree');
        var matIdThreeValue = matIdThree.getValue();

        if (matIdSecondValue!=='' && matIdThreeValue!=='' && matIdSecondValue === matIdThreeValue) {
            resultView.setHtml('匹配成功');
        } else {
            resultView.setHtml('匹配失败');
        }



    }

});