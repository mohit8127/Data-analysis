/*
 * File: app/view/ui/ViewerPanel.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
Ext.define('istsos.view.ui.ProcessTimeSeries',
{
    extend: 'Ext.panel.Panel',
    requires: [
        'istsos.view.ProcedureChart',
        'istsos.view.ProcedureGrid',
        'istsos.view.ProcedureMap',
        'istsos.view.ProcedureChooser'
    ],
    border: 0,
    layout:
    {
        type: 'border'
    },
    initComponent: function()
    {
        var me = this;
        Ext.applyIf(me,
        {
            items: [
            {
                xtype: 'panel',
                border: 0,
                layout:
                {
                    type: 'border'
                },
                title: '',
                region: 'center',
                items: [
                {
                    xtype: 'panel',
                    height: 300,
                    layout:
                    {
                        type: 'border'
                    },
                    collapsible: true,
                    hideCollapseTool: true,
                    title: '',
                    region: 'north',
                    split: true,
                    items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        region: 'center',
                        id: 'gridpanel',
                        items: [
                        {
                            border: true,
                            height: 50,
                            maxHeight: 100,
                            maxWidth: 2000,
                            minWidth: 0,
                            bodyBorder: true,
                            bodyPadding: 10,
                            layout:
                            {
                                type: 'hbox'
                            },
                            labelWidth: 35,
                            anchor: '100%',
                            items: [
                            {
                                xtype: 'combobox',
                                id: 'oeCbObservedProperty',
                                name: 'observedproperty',
                                fieldLabel: 'Property',
                                labelWidth: 70,
                                allowBlank: false,
                                displayField: 'name',
                                forceSelection: true,
                                queryMode: 'local',
                                valueField: 'definition',
                                flex: 0.6,
                                margin: '5 5 5 5'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                id: 'btnPlot',
                                text: 'Preview',
                                flex: 0.4,
                                margin: '5 5 5 5'
                            }]
                        },
                        {
                            "xtype": "panel",
                            "border": true,
                            "id":"methodsPanel",
                            "height": 50,
                            "maxHeight": 100,
                            "maxWidth": 2000,
                            "minWidth": 0,
                            "layout": "hbox",
                            "bodyBorder": true,
                            "bodyPadding": 10,
                            "items": [
                            {
                                "xtype": "combobox",
                                "id":"methodsCombox",
                                "flex": 1,
                                "labelWidth": 50,
                                "fieldLabel": "Methods",
                                "valueField": "abbr",
                                "name": "ctype",
                                "displayField": "name",
                                "queryMode": "local",
                                "value": "digital filter",
                                store: Ext.create('Ext.data.Store',
                                {
                                    fields: ['abbr', 'name'],
                                    data: [
                                    {
                                        'abbr': 0,
                                        'name': 'digital filter'
                                    },
                                    {
                                        'abbr': 1,
                                        'name': 'exeedance'
                                    },
                                    {
                                        'abbr': 2,
                                        'name': 'resample'
                                    },
                                    {
                                        'abbr': 3,
                                        'name': 'integrate'
                                    },
                                    {
                                        'abbr': 4,
                                        'name': 'compare'
                                    },
                                    {
                                        'abbr': 5,
                                        'name': 'subract'
                                    },
                                    {
                                        'abbr': 6,
                                        'name': 'integrate'
                                    },
                                    {
                                        'abbr': 7,
                                        'name': 'data values'
                                    },
                                    {
                                        'abbr': 8,
                                        'name': 'hydro events'
                                    },
                                    {
                                        'abbr': 9,
                                        'name': 'hydro indicies'
                                    },
                                    {
                                        'abbr': 10,
                                        'name': 'statistics'
                                    }]
                                })
                            },
                            {
                                "xtype": "button",
                                "flex": 1,
                                "flex": 2,
                                "height": 30,
                                "margin": "0 5 0 5",
                                "maxHeight": 40,
                                "maxWidth": 150,
                                "width": 100,
                                "text": "Execute "
                            },
                            {
                                "xtype": "button",
                                "flex": 1,
                                "margins": "",
                                "height": 30,
                                "margin": "0 10 10 0",
                                "maxHeight": 40,
                                "maxWidth": 150,
                                "padding": "none",
                                "width": 100,
                                "text": "Save"
                            },
                            {
                                "xtype": "checkboxfield",
                                "flex": 1,
                                "fieldLabel": "",
                                "boxLabel": "over write"
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout:
                            {
                                type: 'fit'
                            },
                            flex: 1,
                            width: 700,
                            maxWidth: 1000,
                            minWidth: 400,
                            items: [
                            {
                                xtype: 'panel',
                                id:'digitalPanel',
                                type: 'vbox',
                                height: 160,
                                width: 700,
                                items: [
                                {
                                    xtype: 'panel',
                                    margin: 5,
                                    flex: 1,
                                    height: 50,
                                    layout:
                                    {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                    {
                                        xtype: 'spinnerfield',
                                        fieldLabel: 'low cutoff freq.',
                                        margin: '5 0 0 5'
                                    },
                                    {
                                        xtype: 'spinnerfield',
                                        margin: '5 0 0 5',
                                        fieldLabel: 'high cutoff freq.'
                                    }]
                                },
                                {
                                    xtype: 'panel',
                                    margin: 5,
                                    flex: 1,
                                    height: 50,
                                    layout:
                                    {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                    {
                                        xtype: 'spinnerfield',
                                        flex: 1,
                                        padding: '5 0 0 5',
                                        fieldLabel: 'Order'
                                    },
                                    {
                                        xtype: 'combobox',
                                        flex: 1,
                                        padding: '5 0 0 5',
                                        fieldLabel: 'filter type'
                                    }]
                                }]
                            },
                            {
                                xtype: 'panel',
                                id:'exeedancePanel',
                                height: 100,
                                border: true,
                                hidden: true,
                                width: 696,
                                layout:
                                {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                items: [
                                {
                                    xtype: 'panel',
                                    height: 40,
                                    margin: '5 0 0 5',
                                    layout:
                                    {
                                        type: 'hbox',
                                    },
                                    border: false,
                                    items: [
                                    {
                                        xtype: 'textfield',
                                        margin: '0 10 0 0',
                                        width: '',
                                        height: 30,
                                        fieldLabel: 'exceedance values',
                                        labelWidth: 120
                                    },
                                    {
                                        xtype: 'textfield',
                                        height: 30,
                                        fieldLabel: 'exceedance probability',
                                        labelWidth: 140
                                    }]
                                },
                                {
                                    xtype: 'panel',
                                    margin: 5,
                                    height: 50,
                                    layout:
                                    {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    border: false,
                                    items: [
                                    {
                                        xtype: 'combobox',
                                        margin: '0 15 0 0',
                                        height: 50,
                                        fieldLabel: 'exceedance time unit',
                                        labelWidth: 130
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        flex: 1,
                                        height: 50,
                                        fieldLabel: '',
                                        boxLabel: 'Under'
                                    }]
                                }]
                            },
                            {
                                "xtype": "panel",
                                "id":"resamplePanel",
                                "height": 109,
                                "width": "none",
                                "bodyBorder": true,
                                "hidden":true,
                                "items": [
                                {
                                    "xtype": "panel",
                                    "border": false,
                                    "padding": 5,
                                    "layout":
                                    {
                                        "type": "hbox",
                                        "align": "middle"
                                    },
                                    "items": [
                                    {
                                        "xtype": "textfield",
                                        "id": "edittextFrequency",
                                        "margin": "0 0 10 10",
                                        "width": "",
                                        "fieldLabel": "Frequency",
                                        "labelWidth": 70
                                    },
                                    {
                                        "xtype": "combobox",
                                        "margins": "",
                                        "id": "comboxSmapling",
                                        "margin": "0 0 10 10",
                                        "fieldLabel": "Sampling Method",
                                        "labelWidth": 120,
                                        "value": "mean",
                                        store: Ext.create('Ext.data.Store',
                                        {
                                            fields: ['abbr', 'name'],
                                            data: [
                                            {
                                                'abbr': 'mean',
                                                'name': 'mean'
                                            },
                                            {
                                                'abbr': 'max',
                                                'name': 'max'
                                            },
                                            {
                                                'abbr': 'min',
                                                'name': 'min'
                                            },
                                            {
                                                'abbr': 'first',
                                                'name': 'first'
                                            },
                                            {
                                                'abbr': 'last',
                                                'name': 'last'
                                            },
                                            {
                                                'abbr': 'median',
                                                'name': 'median'
                                            },
                                            {
                                                'abbr': 'sum',
                                                'name': 'sum'
                                            }]
                                        }),
                                        "matchFieldWidth": false,
                                        "valueField": "abbr",
                                        "displayField": "name",
                                        queryMode: 'local',
                                        forceSelection: true,
                                        listeners:
                                        {
                                            // render: 'onComboboxRender'
                                            change: function(field, newValue, oldValue)
                                            {
                                                console.log(newValue);
                                            },
                                            scope: this
                                        }
                                    }]
                                },
                                {
                                    "xtype": "panel",
                                    "border": false,
                                    "margin": 10,
                                    "layout":
                                    {
                                        "type": "hbox",
                                        "align": "middle"
                                    },
                                    "items": [
                                    {
                                        "xtype": "combobox",
                                        "id": "comboxFill",
                                        "margin": "0 5 5 0",
                                        "fieldLabel": "Fill",
                                        "labelWidth": 30,
                                        "value": "bfill",
                                        store: Ext.create('Ext.data.Store',
                                        {
                                            fields: ['abbr', 'name'],
                                            data: [
                                            {
                                                'abbr': 'bfill',
                                                'name': 'bfill'
                                            },
                                            {
                                                'abbr': 'ffill',
                                                'name': 'ffill'
                                            }]
                                        }),
                                        "matchFieldWidth": false,
                                        "valueField": "abbr",
                                        "displayField": "name",
                                        queryMode: 'local',
                                        forceSelection: true,
                                        listeners:
                                        {
                                            // render: 'onComboboxRender'
                                            change: function(field, newValue, oldValue)
                                            {
                                                console.log(newValue);
                                            },
                                            scope: this
                                        }
                                    },
                                    {
                                        xtype: 'spinnerfield',
                                        margin: '0 5 5 0',
                                        fieldLabel: 'Limit',
                                        labelWidth: 50,
                                        "id": "comboxLimit",
                                        "value": -1,
                                        step: -1,
                                        // override onSpinUp (using step isn't neccessary)
                                        onSpinUp: function()
                                        {
                                            var me = this;
                                            if (!me.readOnly)
                                            {
                                                var val = parseInt(me.getValue().split(' '), 10) || 0;
                                                me.setValue((val - me.step) + ' ');
                                            }
                                        },
                                        // override onSpinDown
                                        onSpinDown: function()
                                        {
                                            var me = this;
                                            if (!me.readOnly)
                                            {
                                                var val = parseInt(me.getValue().split(' '), 10) || 0;
                                                me.setValue((val + me.step) + ' ');
                                            }
                                        }
                                    },
                                    {
                                        "xtype": "combobox",
                                        "id": "comboxHowquality",
                                        "margin": "0 5 5 0",
                                        "fieldLabel": "How Quality",
                                        "labelWidth": 80,
                                        "value": "mean",
                                        store: Ext.create('Ext.data.Store',
                                        {
                                            fields: ['abbr', 'name'],
                                            data: [
                                            {
                                                'abbr': 'mean',
                                                'name': 'mean'
                                            },
                                            {
                                                'abbr': 'max',
                                                'name': 'max'
                                            },
                                            {
                                                'abbr': 'min',
                                                'name': 'min'
                                            },
                                            {
                                                'abbr': 'first',
                                                'name': 'first'
                                            },
                                            {
                                                'abbr': 'last',
                                                'name': 'last'
                                            },
                                            {
                                                'abbr': 'median',
                                                'name': 'median'
                                            },
                                            {
                                                'abbr': 'sum',
                                                'name': 'sum'
                                            }]
                                        }),
                                        "matchFieldWidth": false,
                                        "valueField": "abbr",
                                        "displayField": "name",
                                        queryMode: 'local',
                                        forceSelection: true,
                                        listeners:
                                        {
                                            // render: 'onComboboxRender'
                                            change: function(field, newValue, oldValue)
                                            {
                                                console.log(newValue);
                                            },
                                            scope: this
                                        }
                                    }]
                                }]
                            },
                            {
                                xtype: 'panel',
                                id:'integratePanel',
                                height: 206,
                                padding: 10,
                                margin: 10,
                                width: 668,
                                border:false,
                                hidden:true,
                                layout:
                                {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                items: [
                                {
                                    xtype: 'panel',
                                    padding: 2,
                                    height: 40,
                                    layout:
                                    {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    border: false,
                                    items: [
                                    {
                                        xtype: 'combobox',
                                        id:'timeUnitsCombox',
                                        flex: 1,
                                        fieldLabel: 'time units'
                                    }]
                                },
                                {
                                    xtype: 'panel',
                                    width: 150,
                                    height: 80,
                                    margin: '5 0 0 0',
                                    border: false,
                                    layout:
                                    {
                                        type: 'hbox',
                                        align: 'middle'
                                    },
                                    items: [
                                    {
                                        xtype: 'checkboxfield',
                                        id:'checkUsetime',
                                        flex: 0.2,
                                        fieldLabel: '',
                                        height: 40,
                                        boxLabel: 'Use time'
                                    },
                                    {
                                        xtype: 'panel',
                                        height: 80,
                                        flex: 1,
                                        layout:
                                        {
                                            type: 'hbox',
                                            align: 'stretch'
                                        },
                                        border: false,
                                        items: [
                                        {
                                            xtype: 'panel',
                                            flex: 2,
                                            height: 80,
                                            layout:
                                            {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            border: false,
                                            items: [
                                            {
                                                xtype: 'spinnerfield',
                                                flex: 1,
                                                margin: '0 10 0 0',
                                                height: 40,
                                                fieldLabel: 'Begin',
                                                labelWidth: 50
                                            },
                                            {
                                                xtype: 'spinnerfield',
                                                flex: 1,
                                                height: 40,
                                                margin: '5 10 0 0',
                                                fieldLabel: 'End',
                                                labelWidth: 50
                                            }]
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            height: 40,
                                            layout:
                                            {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            border: false,
                                            items: [
                                            {
                                                xtype: 'spinnerfield',
                                                flex: 0,
                                                height: 40,
                                                fieldLabel: 'Timezone',
                                                labelWidth: 70
                                            }]
                                        }]
                                    }]
                                },
                                {
                                    xtype: 'panel',
                                    height: 40,
                                    width: 150,
                                    layout:
                                    {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    border: false,
                                    items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        height: 40,
                                        border: false,
                                        layout:
                                        {
                                            type: 'hbox',
                                            align: 'stretch'
                                        },
                                        items: [
                                        {
                                            xtype: 'spinnerfield',
                                            margins: '',
                                            flex: 0.7,
                                            height: 40,
                                            margin: '0 10 0 0',
                                            fieldLabel: 'factor',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'combobox',
                                            flex: 0.7,
                                            height: 40,
                                            margin: '0 10 0 0',
                                            fieldLabel: 'flow'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            flex: 1,
                                            height: 40,
                                            fieldLabel: '',
                                            boxLabel: 'dates as text'
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        region: 'east',
                        split: true,
                        id: 'chartpanel1',
                        bodyCls: 'viewerChart',
                        width: 150,
                        collapsible: true,
                        hideCollapseTool: true
                    }]
                },
                {
                    xtype: 'panel',
                    border: 0,
                    id: 'chartpanel',
                    layout:
                    {
                        type: 'fit'
                    },
                    bodyCls: 'viewerChart',
                    region: 'center'
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'History',
                    region: 'south'
                },
                {
                    // xtype: 'textarea',
                    // fieldLabel: 'History',
                    // region: 'center'
                }]
            },
            {
                xtype: 'panel',
                width: 300,
                layout:
                {
                    type: 'fit'
                },
                title: '',
                region: 'west',
                items: [
                {
                    xtype: 'procedurechooser',
                    border: 0,
                    id: 'pchoose'
                }]
            }]
        });
        me.callParent(arguments);
    }
});