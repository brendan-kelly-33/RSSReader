define([
	"dojo/sniff",
	"rss/SingletonManager"
], function(has, SingletonManager){
	return {
		load: function(){
			console.log("loaded");
			
			SingletonManager.init();
		}
	};
});
