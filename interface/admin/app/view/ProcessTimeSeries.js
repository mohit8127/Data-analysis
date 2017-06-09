/*
 * File: app/view/ProcessTimeSeries.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('istsos.view.ProcessTimeSeries', {
    extend: 'istsos.view.ui.ProcessTimeSeries',
    alias: 'widget.viewerpanel1',

    requires: [
        'istsos.store.SamplingMethod'
    ],

    initComponent: function() {
        console.log('This is Time Series Page');
        var me = this;
        me.callParent(arguments);
        Ext.create('istsos.store.SamplingMethod');


        Ext.getCmp('pchoose').on("serviceSelected",function(service) {
            this.fit2service(service);
        },Ext.getCmp('proceduremap'));

        Ext.getCmp('pchoose').on("offeringSelected",function(offering) {
            this.fit2offering(offering);
        },Ext.getCmp('proceduremap'));

        Ext.getCmp('pchoose').on("procedureSelected",function(procedure) {
            this.fit2procedure(procedure);
        },Ext.getCmp('proceduremap'));

        Ext.getCmp('proceduremap').on("procedureSelected",function(service, offering, procedure) {
            this._addProcedure(service, offering, procedure);
        },Ext.getCmp('pchoose'));

        Ext.getCmp('pchoose').on("procedureAdded",function(procedure) {
            this['chart'].addProcedure(procedure);
            this['map'].add2highlight(procedure);
            this['map'].fit2offering();
        },{
          chart: Ext.getCmp('chartpanel'),
          map: Ext.getCmp('proceduremap')
        });

        Ext.getCmp('pchoose').on("procedureRemoved",function(procedure) {
        this['map'].removeHighlight(procedure);
        this['chart'].removeProcedure(procedure);
        this['grid'].removeProcedure(procedure);
        },{
          chart: Ext.getCmp('chartpanel'),
          map: Ext.getCmp('proceduremap'),
          grid: Ext.getCmp('gridpanel')
        });

        Ext.getCmp('chartpanel').on("queueLoaded",function(chartpanel) {
            this.initReadOnlyGrid(
                chartpanel.procedures,
                Ext.getCmp("oeCbObservedProperty").getValue());
        },Ext.getCmp("gridpanel"));

        Ext.getCmp('chartpanel').on("clickCallback",function(panel, e, x, pts) {
            this.updateGridSelection([x]);
            panel.highlightRegion(x);
        },Ext.getCmp('gridpanel'));

        /*Ext.getCmp('gridpanel').on("select",function(panel, grid, record, index, eOpts) {
            console.log("select:");
            console.dir(arguments);
        },Ext.getCmp('chartpanel'));*/

        Ext.getCmp('gridpanel').on("selectionchange",function(panel, grid, selected, eOpts) {

            if (selected.length==1) {
                //this.addAnnotation(selected[0].get('micro'));
                this.highlightRegion(selected[0].get('micro'));
            }else if (selected.length>1) {
                var rec, begin, end;
                rec = selected[0];
                begin = rec.get('micro');
                rec = selected[selected.length-1];
                end = rec.get('micro');
                this.highlightRegion(begin,end);
            }else if (selected.length==0) {
                this.highlightRegion();
                this.removeAnnotations();
            }
        },Ext.getCmp('chartpanel'));




        Ext.getCmp("methodsCombox").select(2);
        Ext.getCmp("methodsCombox").on("select",function(combo, records, eOpts){

            var value = combo.getValue();
            console.log(value);
            console.log('in the combox');

            var digital_filter = Ext.getCmp('digitalPanel');
            var exeedance = Ext.getCmp('exeedancePanel');
            var resample = Ext.getCmp('resamplePanel');
            var integrate = Ext.getCmp('integratePanel');

            switch (value) {
                case 0:
                    digital_filter.setVisible(true);
                    exeedance.setVisible(false);
                    resample.setVisible(false);
                    integrate.setVisible(false);
                  break;
                case 1:
                    digital_filter.setVisible(false);
                    exeedance.setVisible(true);
                    resample.setVisible(false);
                    integrate.setVisible(false);
                  break;
                case 2:
                    digital_filter.setVisible(false);
                    exeedance.setVisible(false);
                    resample.setVisible(true);
                    integrate.setVisible(false);
                  break;
                case 3:
                    digital_filter.setVisible(false);
                    exeedance.setVisible(false);
                    resample.setVisible(false);
                    integrate.setVisible(true);
                  break;
                case 4:
                    digital_filter.setVisible(true);
                    exeedance.setVisible(true);
                    resample.setVisible(true);
                    integrate.setVisible(true);
                  break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
                case 10:
                    break;
                case 11:
                    break;
            }
        });

        /*Ext.getCmp('chartpanel').on("underlayCallback",function(panel, e, x, pts) {
            console.log("underlayCallback:");
            console.dir(arguments);
        });*/
    }
});
