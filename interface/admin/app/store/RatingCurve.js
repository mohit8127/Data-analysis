/*
 * File: app/store/RatingCurve.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.RatingCurve', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ratingcurve',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: 'from',
                    type: 'date'
                },
                {
                    name: 'to',
                    type: 'date'
                },
                {
                    name: 'low_val',
                    type: 'float'
                },
                {
                    name: 'up_val',
                    type: 'float'
                },
                {
                    name: 'A',
                    type: 'float'
                },
                {
                    name: 'B',
                    type: 'float'
                },
                {
                    name: 'C',
                    type: 'float'
                },
                {
                    name: 'K',
                    type: 'float'
                }
            ]
        }, cfg)]);
    }
});