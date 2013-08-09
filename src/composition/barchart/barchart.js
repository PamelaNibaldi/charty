/**
Create a bar chart that will render
N data series

@class BarChart
@extends MultipleDataGroup
@constructor
@requires d3.chart,
          charty,
          bar,
          multipledatagroup,
          yxyaxis,
          multipleinstancesmixin

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/

(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define('barchart',[
      'd3.chart',
      'charty',
      'bar',
      'multipledatagroup',
      'yxyaxis',
      'multipleinstancesmixin',
      ],
      function(d3, charty) {
        /** Export global even in AMD case in case this script
        is loaded with others */
        return factory(d3, charty);
    });
  }
  else {
    /** Browser globals */
    return factory(d3, charty);
  }
}(this, function(d3, charty) {

	d3.chart(charty.CHART_NAMES.MULTIPLE_DATA_GROUP)
    .extend(charty.CHART_NAMES.BAR_CHART,{
		/**
		BarChart initialization.

		@method
		@param {Object} args example = {
                          instances : 2,
                        }
		*/
		initialize : function(args){

			var options = {
				chartName : charty.CHART_NAMES.BAR,
        dataValidator : args.dataValidator,
				instances : (args.instances || 1)
			};

			var yxyaxis = this.mixin(charty.CHART_NAMES.YXY_AXIS, 
                               this.base.append('g'),
                               { dataValidator : args.dataValidator }).showAsGrid(),

					barChart = this.mixin(charty.CHART_NAMES.MULTIPLE_INSTANCES_MIXIN, 
                                this.base.append('g'),
                                options);

			this.componentsMixins = [];
			this.componentsMixins.push(barChart);
			this.componentsMixins.push(yxyaxis);
		}
	});
}));