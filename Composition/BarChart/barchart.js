/**
Create a bar chart that will render
N data series

@class BarChart
@extends MultipleDataGroup
@constructor
@requires d3.chart,
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
    define([
      'd3.chart',
      'bar',
      'multipledatagroup',
      'yxyaxis',
      'multipleinstancesmixin',
      ],
      function(d3) {
        /** Export global even in AMD case in case this script
        is loaded with others */
        return factory(d3);
    });
  }
  else {
    /** Browser globals */
    return factory(d3);
  }
}(this, function(d3) {

	d3.chart('MultipleDataGroup').extend('BarChart',{
		/**
		BarChart initialization.

		@method
		@param {Object} args example = {
                          instances : 2,
                        }
		*/
		initialize : function(args){

			var options = {
				chartName : 'Bar',
				instances : (args.instances || 1)
			};

			var yxyaxis = this.mixin('YXYAxis', this.base.append('g')).showAsGrid(),
					barChart = this.mixin('MultipleInstancesMixin', this.base.append('g'),options);

			this.componentsMixins = [];
			this.componentsMixins.push(barChart);
			this.componentsMixins.push(yxyaxis);
		}
	});
}));