/**
Labeled triangle chart drawer.

@class LabeledTriangleChart
@extends MultipleDataGroup
@constructor

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/
d3.chart('MultipleDataGroup').extend('LabeledTriangleChart', {
  /**
  Labeled triangle constructor.
  Will contain only one instance of each component chart.
  @method
  */
  initialize: function() {

    var yxyaxis = this.mixin('YXYAxis', this.base.append('g')).showAsGrid();

    var options1 = {
      instances : 1,
      chartName : 'Triangle'
    };
    var triangles = this.mixin('MultipleInstancesMixin', this.base.append('g'), options1);

    var options2 = {
      instances : 1,
      chartName : 'RoundedRectangle'
    };
    var recs = this.mixin('MultipleInstancesMixin', this.base.append('g'), options2);

    var options3 = {
      instances : 1,
      chartName : 'TextLabel'
    };
    var texts = this.mixin('MultipleInstancesMixin', this.base.append('g'), options3);

    this.componentsMixins = [];
    this.componentsMixins.push(triangles);
    this.componentsMixins.push(recs);
    this.componentsMixins.push(texts);
    this.componentsMixins.push(yxyaxis);

  }
});