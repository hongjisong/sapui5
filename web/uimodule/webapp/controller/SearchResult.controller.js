sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"

], function (Controller, JSONModel, MessageToast,Fragment) {
  "use strict";
  return Controller.extend("com.myorg.myUI5App.controller.detail", {

   // 검색 조건
      _oView: null,
   onInit: function(that, fragment){
     this._oView = that.getView();
   //화면에 fragment 붙이기
       this.onInitAdd(that, fragment);

       that.byId("mainTable").onRowsUpdated = ModifyFn;
     },
     onInitAdd: function(mainController, fragment){
      let oDetail = mainController.getView().byId("detail");
      let oFragment = fragment;
      oDetail.addContent(oFragment);
     },

  onPress: function(oEvent){
    let mainView = this._oView;
    let splitAppView = mainView.byId("SplitApp");
    // page 이동
    splitAppView.to(mainView.createId("detailDetail"));
    // 선택한 data를 다 array 보관하고 싶을때
    let arr = [] ;
    oEvent.getParameter("listItem").getCells().forEach(cell =>{
        let item = cell.getText();
        arr.push(item);
    });
    // 선택한 data의 index만 알고 싶을때
    let pushIndex;
    pushIndex = oEvent.getParameter("listItem").getBindingContextPath().split("/")[2];
  }

    })
});