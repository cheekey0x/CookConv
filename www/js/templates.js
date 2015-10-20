angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("parameters-lang.html","<ion-view view-title=\"{{ \'VIEW_LANGUAGES\' | translate }}\" hide-tabs=\"true\">\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-radio ng-model=\"current.lang\" ng-repeat=\"language in languages track by language.code\" ng-value=\"language.code\" name=\"{{language.code}}\"> {{language.label}} </ion-radio>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("tab-calculator.html","<ion-view view-title=\"{{ \'VIEW_CALCULATOR\' | translate }}\" hide-tabs=\"false\">\n  <ion-content class=\"padding\">\n\n    <div id=\"from-to\" class=\"list\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\">{{ \'FROM\' | translate }}</span>\n        <input type=\"text\" class=\"right\" ng-model=\"current.from\" name=\"from\" disabled>\n        <span class=\"input-label center\" ng-bind=\"current.getTypeFrom()\"></span>\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\">{{ \'TO\' | translate }}</span>\n        <input type=\"text\" class=\"right\" ng-model=\"current.to\" name=\"to\" disabled>\n        <span class=\"input-label center\" ng-bind=\"current.getTypeTo()\"></span>\n      </label>\n    </div>\n\n\n    <div id=\"criteria-list\">\n      <label class=\"item item-input item-select\">\n        <div class=\"input-label\">\n          {{ \'INGREDIENT_SELECTED\' | translate }}\n        </div>\n        <select ng-model=\"current.ingredient\" ng-options=\"ingredient.name for ingredient in ingredients track by ingredient.id\"></select>\n      </label>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <button class=\"button button-block button-dark\" ng-click=\"showFromType()\">\n            {{ \'FROM\' | translate }} {{current.from_type.name}}\n          </button>\n        </div>\n        <div class=\"col\">\n          <button class=\"button button-block button-dark\" ng-click=\"showToType()\">\n            {{ \'TO\' | translate }} {{current.to_type.name}}\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"calculator-key\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'1\')\">1</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'2\')\">2</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'3\')\">3</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-assertive ion-ios-arrow-thin-left\" ng-click=\"removeValCalc(0)\"></a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'4\')\">4</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'5\')\">5</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'6\')\">6</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-assertive\" ng-click=\"removeValCalc(1)\">AC</a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'7\')\">7</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'8\')\">8</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'9\')\">9</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-assertive\" ng-click=\"inverseVal()\">{{ \'INV\' | translate }}</a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'.\')\">.</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-outline button-dark\" ng-click=\"addValCalc(\'0\')\">0</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block \" disabled>&nbsp;</a>\n        </div>\n        <div class=\"col\">\n          <a class=\"button button-block button-balanced\" ng-click=\"saveConverter()\">{{ \'SAVE\' | translate }}</a>\n        </div>\n      </div>\n\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-parameters.html","<ion-view view-title=\"{{ \'VIEW_SETTINGS\' | translate }}\" hide-tabs=\"false\">\n  <ion-content>\n    <ion-list>\n\n      <a class=\"item item-icon-left item-icon-right\" href=\"#/tab/parameter/lang\">\n        <i class=\"icon ion-chatbox-working\"></i>\n        <h2>{{ \'SELECT_LANGUAGE\' | translate }}</h2>\n        <p>{{ \'SELECT_LANGUAGE_LABEL\' | translate }} {{settings.lang}}</p>\n        <i class=\"icon ion-ios-arrow-forward\"></i>\n      </a>\n\n      <div class=\"item item-icon-left\">\n        <i class=\"icon\"></i>\n        <h2>{{ \'VERSION_APP\' | translate }}</h2>\n        <p><span app-version></span></p>\n      </div>\n\n      <div class=\"item item-divider\">\n        {{ \'MANAGE_PART\' | translate }}\n      </div>\n\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\">\n        <i class=\"icon ion-clipboard\"></i>\n        <h2>{{ \'MANAGE_INGREDIENTS\' | translate }}</h2>\n        <p>{{ \'MANAGE_INGREDIENTS_LABEL\' | translate }}</p>\n        <i class=\"icon ion-ios-arrow-forward\"></i>\n      </a>\n\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\">\n        <i class=\"icon ion-arrow-return-left\"></i>\n        <h2>{{ \'REINIT_APP\' | translate }}</h2>\n        <p>{{ \'REINIT_APP_LABEL\' | translate }}</p>\n        <i class=\"icon ion-ios-arrow-forward\"></i>\n      </a>\n\n    </ion-list>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-save.html","<ion-view view-title=\"{{ \'VIEW_SAVINGS\' | translate }}\" hide-tabs=\"false\">\n  <ion-content>\n    <ion-list id=\"list-savings\">\n      <ion-item class=\"item-remove-animate item-icon-right\" ng-repeat=\"saving in savings track by saving.id\" type=\"item-text-wrap\">\n\n        <strong><div id=\"ingredient\">{{saving.ingredient}}</div></strong>\n        <span>{{saving.fromVal}}</span> <span>{{saving.fromType}}</span> <i class=\"ion-arrow-right-c\"></i>\n        <span>{{saving.toVal}}</span> <span>{{saving.toType}}</span>\n        <i class=\"icon ion-trash-a assertive\" ng-click=\"removeSaving(saving)\"></i>\n\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tabs.html","<ion-tabs ng-class=\"{\'tabs-item-hide\': $root.hideTabs}\" class=\"tabs-icon-top tabs-color-active-positive\">\n\n  <ion-tab title=\"{{ \'TAB_TITLE_CALCULATOR\' | translate }}\" icon-off=\"ion-ios-pulse\" icon-on=\"ion-ios-pulse-strong\" href=\"#/tab/calculator\">\n    <ion-nav-view name=\"tab-calculator\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"{{ \'TAB_TITLE_SAVINGS\' | translate }}\" icon-off=\"ion-ios-compose-outline\" icon-on=\"ion-ios-compose\" href=\"#/tab/save\">\n    <ion-nav-view name=\"tab-save\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"{{ \'TAB_TITLE_PARAMETERS\' | translate }}\" icon-off=\"ion-ios-gear-outline\" icon-on=\"ion-ios-gear\" href=\"#/tab/parameters\">\n    <ion-nav-view name=\"tab-parameters\"></ion-nav-view>\n  </ion-tab>\n\n</ion-tabs>\n");}]);