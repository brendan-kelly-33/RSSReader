define([
	"dojo/_base/declare",
	"dojo/_base/window",
	"dojo/dom-construct",
	"dijit/_WidgetBase",
	"dijit/_Container",
	"rss/widgets/components/global/Header"
], function(declare, win, domConstruct, WidgetBase, Container, Header){
	return declare("rss.singletons.PanelController", [WidgetBase, Container], {
		
		_header: null,
		_footer: null,
		
		// panel for all elements
		_mainPanel: null,
		
		constructor: function(){
			this.inherited(arguments);
		},
		
		postCreate: function(){
			this._header = new Header();
			
			this.addChild(this._header);
			
			this._mainPanel = this.domNode;
			domConstruct.place(this._mainPanel, win.body(), "first");
		}
	});
});
