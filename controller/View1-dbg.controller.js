sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("shiv.controller.View1", {

		onInit: function () {

		},
		onExit: function () {

		},
		
		onSubmit:function(){
			
		},
		
		onCreate: function(){
				if (!this._createDialog) {
				this._createDialog = sap.ui.xmlfragment("createDialog",
					"shiv.fragment.Create",
					this
				);
				this.getView().addDependent(this._createDialog);
			}

			this._createDialog.open();
		},
		
		onCancel:function(){
			this._createDialog.close();
		}

	});
});