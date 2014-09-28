define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin"
], function(declare, WidgetBase, TemplatedMixin, WidgetsInTemplatedMixin){
	return declare("rss.widgets.util.GenericView", [WidgetBase, TemplatedMixin, WidgetsInTemplatedMixin], {
		constructor: function(args){
			
		},
		
		postCreate: function(){
			this.inherited(args);
		}
		
		
	});
});
