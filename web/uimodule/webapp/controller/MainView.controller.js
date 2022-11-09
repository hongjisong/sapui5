sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("com.myorg.myUI5App.controller.MainView", {
            onInit: function () {
                // fragment 초기화
                this.userDetailInit();
                this.userSearchInit();
                this.userSearchResultInit();

                const oView = this.getView();
                // data service 받는 부분
                let oData = {
                    UserInfo: [{
                        "id": "e7829550-fae7-4738-b74f-8e41ee536feb",
                        "meta": {
                          "version": 0,
                          "created": "2019-12-11T13:37:44.199Z",
                          "lastModified": "2019-12-11T13:37:44.199Z"
                        },
                        "userName": "antonio.ferrari@example.com",
                        "name": {
                          "familyName": "unknown",
                          "givenName": "unknown"
                        },
                        "emails": [
                          {
                            "value": "antonio.ferrari@example.com",
                            "primary": false
                          }
                        ],
                        "groups": [
                          {
                            "value": "My New Role3",
                            "display": "My New Role3",
                            "type": "DIRECT"
                          }
                        ],
                        "approvals": [],
                        "active": true,
                        "verified": true,
                        "origin": "ldap",
                        "zoneId": "5cef7d08-471e-47c4-9695-ad5ef44b4355",
                        "passwordLastModified": "2019-12-11T13:37:44.000Z",
                        "schemas": [
                          "urn:scim:schemas:core:1.0"
                        ]
                      },
                      {
                        "id": "84088d72-c8dd-4c92-b997-64258b69a5d9",
                        "meta": {
                          "version": 0,
                          "created": "2019-12-11T13:37:58.236Z",
                          "lastModified": "2019-12-11T13:37:58.236Z"
                        },
                        "userName": "elena.petrova@example.com",
                        "name": {
                          "familyName": "unknown",
                          "givenName": "unknown"
                        },
                        "emails": [
                          {
                            "value": "elena.petrova@example.com",
                            "primary": false
                          }
                        ],
                        "groups": [
                          {
                            "value": "My New Role2",
                            "display": "My New Role2",
                            "type": "DIRECT"
                          },
                          {
                            "value": "My New Role3",
                            "display": "My New Role3",
                            "type": "DIRECT"
                          }
                        ],
                        "approvals": [],
                        "active": true,
                        "verified": true,
                        "origin": "ldap",
                        "zoneId": "5cef7d08-471e-47c4-9695-ad5ef44b4355",
                        "passwordLastModified": "2019-12-11T13:37:58.000Z",
                        "schemas": [
                          "urn:scim:schemas:core:1.0"
                        ]
                      }
                    ]
                }
                let UserInfo = new JSONModel(oData);
                oView.setModel(UserInfo, "ak");
            },
            userDetailInit: function(){
                let that = this;
                let oView = this.getView();
                sap.ui.require(["com/myorg/myUI5App/controller/ResultDetail.controller"],
                  function(Controller){
                      let ChangeController = new Controller();

                      Fragment.load({
                        name: "com.myorg.myUI5App.view.ResultDetail",
                        id: oView.getId(),
                        controller: ChangeController
                      }).then(function(oFragment){
                        that.byId("detail").addContent(oFragment);
                        ChangeController.onInit(that, oFragment);
                        // oView.addDependent(oFragment);
                      })
                    //   let Changefragment = this.byId("Fragment");
                    //   console.log(Changefragment);
                  });
            },
            userSearchInit: function(){
                let that = this;
                let oView = this.getView();
                sap.ui.require(["com/myorg/myUI5App/controller/Search.controller"],
                function(Controller){
                  let SearchController = new Controller();
                  Fragment.load({
                    name: "com.myorg.myUI5App.view.Search",
                    id: oView.getId(),
                    controller: SearchController
                  }).then(function(oFragment){
                    that.byId("master").addContent(oFragment);	
                    SearchController.onInit(that,oFragment);
                  });
                });
            },
            userSearchResultInit: function(){
              let that = this;
              let oView = this.getView();
              sap.ui.require(["com/myorg/myUI5App/controller/SearchResult.controller"],
              function(Controller){
                let SearchController = new Controller();
                Fragment.load({
                  name: "com.myorg.myUI5App.view.SearchResult",
                  id: oView.getId(),
                  controller: SearchController
                }).then(function(oFragment){
                  that.byId("master").addContent(oFragment);	
                  SearchController.onInit(that,oFragment);
                });
              });
            },
            onPressDetailBack: function () {
                this.getSplitAppObj().backMaster();
                this.getSplitAppObj().backDetail();
            },
            getSplitAppObj: function () {
                let result = this.byId("SplitAppDemo");
                if (!result) {
                    Log.info("SplitApp object can't be found");
                }
                return result;
            },
        });
    }
);
