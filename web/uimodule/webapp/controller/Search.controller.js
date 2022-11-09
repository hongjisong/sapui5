sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox"

], function (Controller, JSONModel, MessageToast, MessageBox) {
  "use strict";
  return Controller.extend("com.myorg.myUI5App.controller.Search",{
 // 검색 조건
    _oView: null,
    onInit: function(mainController, fragment){
      this._oView = mainController.getView();
      this.onInitDataGet(mainController, fragment);
    },
    onInitDataGet: function(mainController, fragment){
      let that = this;
      let oMaster = mainController.getView().byId("master");		 
      let oFragment = fragment;	 
      oMaster.addContent(oFragment);

       // 검색 필터 data
    }

    })
});