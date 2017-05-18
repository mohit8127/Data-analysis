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

Ext.define('istsos.view.ui.ProcessTimeSeries', {
    extend: 'Ext.panel.Panel',
    requires: [
        'istsos.view.ProcedureChart',
        'istsos.view.ProcedureGrid',
        'istsos.view.ProcedureMap',
        'istsos.view.ProcedureChooser'
    ],

    border: 0,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: 0,
                    layout: {
                        type: 'border'
                    },
                    title: '',
                    region: 'center',
                    items: [
                        {
                            xtype: 'procedurechart',
                            region: 'center',
                            id: 'chartpanel'
                        },
                        {
                            xtype: 'panel',
                            height: 300,
                            layout: {
                                type: 'border'
                            },
                            collapsible: true,
                            hideCollapseTool: true,
                            title: '',
                            region: 'south',
                            split: true,
                            items: [
                                {
                                    xtype: 'proceduregrid',
                                    flex: 1,
                                    region: 'center',
                                    id: 'gridpanel'
                                },
                                {
                                    xtype: 'proceduremap',
                                    flex: 1,
                                    region: 'east',
                                    split: true,
                                    id: 'proceduremap',
                                    width: 150,
                                    collapsible: true,
                                    hideCollapseTool: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    width: 300,
                    layout: {
                        type: 'fit'
                    },
                    title: '',
                    region: 'west',
                    items: [
                        {
                            xtype: 'procedurechooser',
                            border: 0,
                            id: 'pchoose'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});