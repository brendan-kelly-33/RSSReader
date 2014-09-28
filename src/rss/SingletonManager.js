define([
	"dojo/_base/declare",
	"rss/singletons/PanelController"
], function(declare, PanelController){
	return declare("rss.singletonManager", null, {
		
		_panelController: null,
		
		constructor: function(){
			this.inherited(arguments);
		},
		
		init: function(){
			this._panelController = new PanelController();
			this._panelController.startup();
		}
	})();
});
