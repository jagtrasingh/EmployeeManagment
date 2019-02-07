sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("shiv.controller.View2", {
		onGoBack: function() {
			this.getOwnerComponent().getRouter().navTo("firstview");
		}
	
	});
});