/**
Grouped bar chart.
Unlike regular bar char, grouped needs to define
two scales for x axis : one for the axis itself, and
another one for the data mapping.

@class GroupedBarChart
@extends MultipleDataGroup
@requires d3,
          scalesfactory,
          charty,
          d3.chart,
          bar,
          xyaxis,
          multipledatagroup,
          multipleinstancesmixin
*/

(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define('GroupedBarChart', [
            'd3.chart',
            'charty/chartynames',
            'charty/scalesfactory',
            'charty/bar',
            'charty/xyaxis',
            'charty/multipledatagroup',
            'charty/multipleinstancesmixin',
           ],
           function(d3, ScaleFactory, charty) {
      /** Export global even in AMD case in case this script
      is loaded with others */
      return factory(d3, ScaleFactory, charty);
    });
  }
  else {
    /** Browser globals */
    return factory(d3, ScaleFactory, charty);
  }
}(this, function(d3, ScaleFactory, charty) {
  d3.chart(charty.CHART_NAMES.MULTIPLE_DATA_GROUP)
    .extend(charty.CHART_NAMES.GROUPED_BAR_CHART, {
    /**
    Grouper Bar Chart initializer.

    @method
    */
    initialize : function(args){

      var options = {
        chartName : charty.CHART_NAMES.BAR,
        instances : (args.instances || 1)
      };

      var barChart = this.mixin(charty.CHART_NAMES.MULTIPLE_INSTANCES_MIXIN, this.base.append('g'), options);
      var xyaxis = this.mixin(charty.CHART_NAMES.XY_AXIS, this.base.append('g')).showAsGrid();

      this.componentsMixin = [];
      this.componentsMixin.push(barChart);
      this.componentsMixin.push(xyaxis);
    },
    /**
    It is necessary to rewrite transform data, in order to
    generate a new scale.

    Two scales are needed : one for the axis, and another
    one for bar drawing.

    @method
    @param {Object} data Data Accessor
    */
    transform : function(data){

      var d = data.getData();

      /**
      Scale for axis drawing

      @property
      @type {Object} LinearScale / OrdinalScale
      */
      this.xscale.calculateDomain(data, function(d){return d.x;}).setRange(this.w);

      /**
      Since it is a regular bar chart, an ordinal scale
      will be used for bar drawing.
      */
      var scales = new ScaleFactory();

      var barScale = scales.scale('ordinal','x');

      var barDomain = d.map(function(element){
        console.log(element);
      });

      this.yscale.calculateDomain(data, function(d){return d.y;}).setRange(this.h);

    }
  });
}));