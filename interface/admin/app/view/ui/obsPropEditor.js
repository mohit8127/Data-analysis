/*
 * File: app/view/ui/obsPropEditor.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.obsPropEditor', {
    extend: 'Ext.panel.Panel',

    border: 0,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'gridop',
                    margin: 8,
                    maxHeight: 250,
                    title: '',
                    forceFit: true,
                    store: 'gridobservedproperties',
                    viewConfig: {

                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnNew',
                                    text: 'New'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'btnRemove',
                                    text: 'Remove selected'
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            flex: 1,
                            text: 'Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'definition',
                            flex: 1,
                            text: 'Definition'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'description',
                            flex: 1,
                            text: 'Description'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'procedures',
                            flex: 1,
                            text: 'Procedures'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'constraint2str',
                            flex: 1,
                            text: 'Constraint'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    border: 0,
                    hidden: true,
                    id: 'frmObservedProperties',
                    bodyPadding: 10,
                    title: '',
                    trackResetOnLoad: true,
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Observed property',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'opName',
                                    name: 'name',
                                    fieldLabel: 'Name',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'opDefinition',
                                    name: 'definition',
                                    fieldLabel: 'Definition URN',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'description',
                                    fieldLabel: 'Description',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    height: 28,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    fieldLabel: 'Correct Quality Index Constraints',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            id: 'sqiChoose',
                                            width: 110,
                                            name: 'ctype',
                                            fieldLabel: '',
                                            labelWidth: 50,
                                            emptyText: 'Choose...',
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'constraint',
                                            valueField: 'value'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            hidden: true,
                                            id: 'sqiFrom',
                                            name: 'from',
                                            fieldLabel: 'From',
                                            labelAlign: 'right',
                                            labelWidth: 50,
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numberfield',
                                            hidden: true,
                                            id: 'sqiTo',
                                            name: 'to',
                                            fieldLabel: 'To',
                                            labelAlign: 'right',
                                            labelWidth: 40,
                                            flex: 1
                                        },
                                        {
                                            xtype: 'textfield',
                                            hidden: true,
                                            id: 'sqiList',
                                            name: 'list',
                                            fieldLabel: 'List',
                                            labelAlign: 'right',
                                            labelWidth: 40,
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            ui: 'footer',
                            dock: 'bottom',
                            layout: {
                                pack: 'center',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnForm',
                                    text: 'Insert'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});