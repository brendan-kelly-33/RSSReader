define([
	"dojo/_base/declare",
	"dojo/text!./templates/Header.html",
	"rss/widgets/util/GenericView"
], function(declare, template, GenericView){
	return declare("rss.widgets.components.global.Header", [GenericView], {
		templateString: template,
		
		constructor: function(){
			this.inherited(arguments);
		},
		
		postCreate: function(){
			
		}
	});
});
