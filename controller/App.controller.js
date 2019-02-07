sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("shiv.controller.App", {
		onInit:function()
		{
		  this.getView().addStyleClass("sapUiSizeCompact");	
		}
           
	});
});