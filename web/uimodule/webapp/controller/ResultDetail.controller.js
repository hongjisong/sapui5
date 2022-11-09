sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, MessageBox) {
  "use strict";
  return Controller.extend("com.myorg.myUI5App.controller.ResultDetail", {

  _oView: null,
  onInit: function(that, fragment){	   
 // 화면에 fragment 붙이기
  this._oView = that.getView();
  this.onInitAdd(that, fragment);
  },
  onInitAdd: function(mainController, fragment){
    let oDetail = mainController.getView().byId("detailDetail");
    let oFragment = fragment;
    oDetail.addContent(oFragment);
  }

  })
});