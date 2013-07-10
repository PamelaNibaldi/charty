/**
Line chart drawers.
Takes N input data series

@class LineChart
@extends BaseChart
@constructor

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/

d3.chart('CompositeChart').extend('LineChart',{
	initialize : function(args){
		var options = {
			chartName : 'Line',
			instances : args.instances
		}

		var yxyaxis = this.mixin('YXYAxis', this.base.append('g')).showAsGrid();
		var lineChart = this.mixin('MultipleDataInput', this.base.append('g'), options);

		this.componentsMixins = [];
		this.componentsMixins.push(lineChart);
		this.componentsMixins.push(yxyaxis);
	}
});