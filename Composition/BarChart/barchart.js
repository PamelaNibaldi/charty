/**
Create a bar chart that will render
N data series

@class BarChart
@extends MultipleDataGroup
@constructor

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/

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
			instances : args.instances, 
		};

		var yxyaxis = this.mixin('YXYAxis', this.base.append('g')).showAsGrid();
		var barChart = this.mixin('MultipleInstancesMixin', this.base.append('g'),options);

		this.componentsMixins = [];
		this.componentsMixins.push(barChart);
		this.componentsMixins.push(yxyaxis);
	}
});