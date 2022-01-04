var element = document.getElementById("id01");element.innerHTML = "COVID-19 CG (BETA)									";					
																
																
																
																
																
var myApp = angular.module('myApp', ['ngRoute'])																
																
//ng-route config																
.config(function ($routeProvider, $locationProvider){																
  $routeProvider																
    .when('/home', {																
      templateUrl: 'default.html',																
    })																
    .when('/contact-info/:contact_index', {																
      templateUrl: 'contact_info.html',																
      controller: 'contactInfoCtrl'																
    })																
    																
    .otherwise({redirectTo: '/home'});																
})																
																
// controllers																
.controller('navCtrl', function ($scope) {																
  $scope.nav = {																
    navItems: ['home', 'add'],																
    selectedIndex: 0,																
    navClick: function ($index) {																
      $scope.nav.selectedIndex = $index;																
    }																
  };																
})																
																
.controller('homeCtrl', function ($scope, ContactService){																
  $scope.contacts = ContactService.getContacts();																
})																
																
.controller('contactInfoCtrl', function ($scope, $routeParams){																
  var index = $routeParams.contact_index;																
  $scope.currentContact = $scope.contacts[index];																
})																
																
																
																
// directives																
.directive('contact', function () {																
  return {																
    restrict: 'E',																
    replace: true,																
    templateUrl: 'contact.html'																
  }																
})																
																
// services																
.factory('ContactService', [function () {																
  var factory = {};																
																
  factory.getContacts = function () {																
    return contactList;																
  }																
																
  // contact list, usually would be a separate database																
  var contactList = [



{id: 1, name: '	03-01-22', total: '  	1942	',positive:' 	698	',recoverd:' 	29	',death:' 	0	',active:' 	1942		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		43	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	152	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		18	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE- 32		', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		3	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	8	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		4	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	5	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		9	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	16	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		222	', amount6: 'RECOVERED-	8	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	515	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		5	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	13	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		5	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	11	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	8	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		2	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	5	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		133	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	364	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		103	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	357	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		39	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	134	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		26	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	95	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		13	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	14	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		4	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	16	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		12	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	17	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		9	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	15	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-	22	', amount19: 'RECOVERED-	3	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	53	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		2	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	6	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		13	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	50	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	7	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	1	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	7	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		5	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	9	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		5	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	6	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	25	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
								},


{id: 1, name: '	02-01-22', total: '  	1273	',positive:' 	290	',recoverd:' 	34	',death:' 	0	',active:' 	1273		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		33	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	112	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE- 15		', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		2	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	6	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		1	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	1	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	1	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	7	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		90	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	301	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	9	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	6	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	4	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	8	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		2	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		52	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	235	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		37	', amount12: 'RECOVERED-	10	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	257	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		40	', amount13: 'RECOVERED-	2	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	97	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		11	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	69	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	1	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	1	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	12	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	5	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		3	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	6	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	34	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		1	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	4	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		9	', amount21: 'RECOVERED-	4	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	37	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	7	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		2	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	7	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	4	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	1	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		3	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	25	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
								},

{id: 1, name: '	01-01-22', total: '  	1017	',positive:' 	279	',recoverd:' 	30	',death:' 	1	',active:' 	1017		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		24	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	82	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		4	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE- 15		', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		2	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	4	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	7	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		73	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	1	', amountg6: 'ACTIVE-	216	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	7	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		2	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	6	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	2	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		58	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	187	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		50	', amount12: 'RECOVERED-	6	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	230	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		16	', amount13: 'RECOVERED-	6	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	59	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		11	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	58	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	2	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	1	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		7	', amount16: 'RECOVERED-	1	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	13	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		1	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	5	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		1	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	3	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		5	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	34	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		1	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	3	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		12	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	32	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	6	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	5	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		2	', amount25: 'RECOVERED-	1	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	4	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	1	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		6	', amount29: 'RECOVERED-	2	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	22	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
								},


{id: 1, name: '	31-12-21', total: '  	769	',positive:' 	190	',recoverd:' 	18	',death:' 	0	',active:' 	769		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		11	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	61	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		4	', amount2: 'RECOVERED-	2	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE- 11		', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	7	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		51	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	149	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	5	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	1	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		1	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	2	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		43	', amount11: 'RECOVERED-	2	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	132	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		32	', amount12: 'RECOVERED-	5	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	186	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		14	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	49	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		5	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	48	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	7	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		2	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	4	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		1	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		9	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	29	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	2	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		2	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	20	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	5	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	5	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		2	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	3	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	1	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		7	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	18	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
								},



{id: 1, name: '	30-12-21', total: '  	593	',positive:' 	150	',recoverd:' 	16	',death:' 	0	',active:' 	593		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		11	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	53	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	9	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	6	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		28	', amount6: 'RECOVERED-	9	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	101	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	4	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		31	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	91	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		32	', amount12: 'RECOVERED-	0	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	159	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		21	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	35	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		4	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	43	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		4	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	6	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		2	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		1	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		1	', amount19: 'RECOVERED-	2	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	20	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		2	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	2	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		6	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	18	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	4	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		2	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	5	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	1	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		2	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	11	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
								},


  
  {id: 1, name: '	29-12-21', total: '  	463	',positive:' 	106	',recoverd:' 	36	',death:' 	0	',active:' 	463		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	1	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	45	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		5	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	8	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		2	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	6	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		12	', amount6: 'RECOVERED-	4	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	82	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	3	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	3	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		17	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	61	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		40	', amount12: 'RECOVERED-	21	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	127	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		3	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	14	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		13	', amount14: 'RECOVERED-	2	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	39	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		4	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	21	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		1	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	12	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	4	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	3	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	9	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},


{id: 1, name: '	28-12-21', total: '  	393	',positive:' 	69	',recoverd:' 	19	',death:' 	2	',active:' 	393		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		7	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	1	', amountg1: 'ACTIVE-	43	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	4	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	1	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		13	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	74	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	2	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	2	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	3	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		9	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	48	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		14	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	108	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	1	', amountg13: 'ACTIVE-	11	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		14	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	28	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		4	', amount19: 'RECOVERED-	4	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	17	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		5	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	11	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	3	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	3	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	8	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
  
  
  
  {id: 1, name: '	27-12-21', total: '  	345	',positive:' 	49	',recoverd:' 	33	',death:' 	1	',active:' 	345		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		4	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	40	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	4	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	1	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		3	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		5	', amount6: 'RECOVERED-	7	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	64	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	3	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	1	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		8	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	1	', amountg11: 'ACTIVE-	42	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		15	', amount12: 'RECOVERED-	6	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	96	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	2	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	12	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		5	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	14	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	1	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	2	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		4	', amount19: 'RECOVERED-	7	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	17	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		2	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	6	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	2	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	3	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		2	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	7	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},

  
  
  {id: 1, name: '	26-12-21', total: '  	330	',positive:' 	46	',recoverd:' 	29	',death:' 	0	',active:' 	330		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		7	', amount1: 'RECOVERED-	6	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	39	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	5	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		7	', amount6: 'RECOVERED-	1	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	66	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	3	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	1	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	5	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	35	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		14	', amount12: 'RECOVERED-	10	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	87	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	14	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		6	', amount14: 'RECOVERED-	4	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	10	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	3	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		4	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	20	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	4	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	1	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	3	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	3	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
{id: 1, name: '	25-12-21', total: '  	313	',positive:' 	37	',recoverd:' 	20	',death:' 	0	',active:' 	313		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		5	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	38	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	3	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	5	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		5	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	60	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	3	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	5	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		2	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	12	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	2	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	2	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		6	', amount11: 'RECOVERED-	2	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	35	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		16	', amount12: 'RECOVERED-	0	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	83	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	13	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	8	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	1	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	3	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	16	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	4	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	1	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	2	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	4	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		2	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},

  

{id: 1, name: '	24-12-21', total: '  	296	',positive:' 	23	',recoverd:' 	28	',death:' 	1	',active:' 	296		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		4	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	1	', amountg1: 'ACTIVE-	38	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	8	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		9	', amount6: 'RECOVERED-	1	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	58	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	4	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	5	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	10	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	31	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		4	', amount12: 'RECOVERED-	8	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	67	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	13	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	3	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	9	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	4	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	16	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	1	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	4	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	1	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	2	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	3	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	4	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	4	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},


{id: 1, name: '	23-12-21', total: '  	302	',positive:' 	38	',recoverd:' 	28	',death:' 	1	',active:' 	302		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	1	', amountg1: 'ACTIVE-	38	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	8	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	1	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		10	', amount6: 'RECOVERED-	0	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	50	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	5	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	3	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	5	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		5	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	9	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		1	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	30	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		5	', amount12: 'RECOVERED-	3	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	71	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		2	', amount13: 'RECOVERED-	2	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	14	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	12	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	4	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		3	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	16	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	3	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	1	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	4	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	3	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		1	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	2	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	2	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	4	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	2	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	5	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
  
																
{id: 1, name: '	22-12-21', total: '  	293	',positive:' 	33	',recoverd:' 	44	',death:' 	0	',active:' 	293		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	39	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	7	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	2	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	2	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		3	', amount6: 'RECOVERED-	0	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	40	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	6	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	2	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	8	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		4	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	4	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	3	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	30	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		11	', amount12: 'RECOVERED-	19	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	69	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		2	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	14	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	13	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	4	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	13	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	5	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	4	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		4	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	4	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	3	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	3	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	2	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	6	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	6	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																

{id: 1, name: '	21-12-21', total: '  	304	',positive:' 	34	',recoverd:' 	34	',death:' 	0	',active:' 	304		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	41	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	8	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	3	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	5	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		6	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	37	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	6	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	10	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	0	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	3	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	30	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		9	', amount12: 'RECOVERED-	6	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	77	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		6	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	12	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	14	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		2	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	3	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	1	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	13	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	9	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	0	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	6	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	2	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		1	', amount25: 'RECOVERED-	1	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	2	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	7	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	2	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	6	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		2	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	20-12-21', total: '  	304	',positive:' 	13	',recoverd:' 	41	',death:' 	0	',active:' 	304		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	43	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		2	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	8	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	8	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		3	', amount6: 'RECOVERED-	6	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	36	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	3	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	6	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	10	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	0	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	31	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		0	', amount12: 'RECOVERED-	9	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	74	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	9	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	7	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	14	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	2	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	14	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	1	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	9	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	0	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	6	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	4	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	9	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	8	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	2	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},

																
{id: 1, name: '	19-12-21', total: '  	332	',positive:' 	21	',recoverd:' 	31	',death:' 	0	',active:' 	332		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	8	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	43	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	7	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	8	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		9	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	39	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	9	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	9	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	0	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		1	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	32	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		5	', amount12: 'RECOVERED-	7	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	83	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	16	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	15	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	2	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		2	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	14	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	2	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	0	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	8	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	4	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	2	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	9	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	2	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	7	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	18-12-21', total: '  	342	',positive:' 	31	',recoverd:' 	28	',death:' 	0	',active:' 	342		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		1	', amount1: 'RECOVERED-	2	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	48	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	7	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		4	', amount6: 'RECOVERED-	4	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	33	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	9	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	3	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	9	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	1	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	2	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	31	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		15	', amount12: 'RECOVERED-	3	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	85	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	5	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	16	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		2	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	16	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	2	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	2	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	2	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		1	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	12	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	3	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	10	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	5	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	10	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	2	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	9	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	17-12-21', total: '  	339	',positive:' 	20	',recoverd:' 	40	',death:' 	0	',active:' 	339		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		4	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	49	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	6	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		3	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	33	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	8	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		2	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	12	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	1	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	4	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	29	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		2	', amount12: 'RECOVERED-	1	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	73	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	8	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	2	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	14	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	2	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	4	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		3	', amount19: 'RECOVERED-	2	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	12	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	5	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	3	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	5	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	9	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	3	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	11	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	6	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	16-12-21', total: '  	359	',positive:' 	32	',recoverd:' 	26	',death:' 	0	',active:' 	359		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	2	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	50	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	6	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		7	', amount6: 'RECOVERED-	4	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	35	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	8	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	10	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	1	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		0	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	29	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		4	', amount12: 'RECOVERED-	4	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	72	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		2	', amount13: 'RECOVERED-	6	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	28	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	5	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	16	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	5	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	4	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		2	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	2	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		8	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	11	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	8	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	7	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	9	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	14	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	6	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	15-12-21', total: '  	353	',positive:' 	31	',recoverd:' 	40	',death:' 	1	',active:' 	353		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		6	', amount1: 'RECOVERED-	4	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	49	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	3	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	6	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	4	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	0	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	2	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		1	', amount6: 'RECOVERED-	8	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	32	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	8	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	4	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	9	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	2	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		3	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	4	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	30	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		10	', amount12: 'RECOVERED-	1	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	72	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	3	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	32	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		4	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	20	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	5	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	4	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	3	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	3	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	8	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	13	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	1	', amountg24: 'ACTIVE-	7	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	9	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	13	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	6	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	14-12-21', total: '  	363	',positive:' 	20	',recoverd:' 	34	',death:' 	0	',active:' 	363		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		6	', amount1: 'RECOVERED-	9	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	47	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		3	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	9	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	3	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	4	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	3	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		3	', amount6: 'RECOVERED-	2	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	39	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	5	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	9	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	2	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	12	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	3	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	30	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		1	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	63	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	2	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	35	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	16	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	6	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	1	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	7	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	3	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	1	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	8	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	8	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	2	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	10	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	12	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
{id: 1, name: '	13-12-21', total: '  	377	',positive:' 	32	',recoverd:' 	34	',death:' 	0	',active:' 	377		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	6	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	50	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	5	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	7	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		4	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	12	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	4	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	1	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	3	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		1	', amount6: 'RECOVERED-	4	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	38	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	13	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	14	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	3	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	29	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		9	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	64	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	37	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		3	', amount14: 'RECOVERED-	3	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	16	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	6	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	1	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	7	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	3	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		1	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	11	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	8	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	4	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	2	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	0	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	10	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	3	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	11	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	12	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	4	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
{id: 1, name: '	12-12-21', total: '  	379	',positive:' 	25	',recoverd:' 	20	',death:' 	0	',active:' 	379		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		4	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	53	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	2	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	2	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	4	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		0	', amount6: 'RECOVERED-	2	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	41	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	12	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		3	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	14	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	3	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	26	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		3	', amount12: 'RECOVERED-	0	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	57	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		2	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	37	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	16	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	6	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	8	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	3	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	2	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	10	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	8	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	14	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	9	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		2	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	13	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		2	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	12	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
															
																
																
{id: 1, name: '	11-12-21', total: '  	374	',positive:' 	40	',recoverd:' 	34	',death:' 	0	',active:' 	374		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		5	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	52	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	14	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		3	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	9	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	6	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	3	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		0	', amount6: 'RECOVERED-	14	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	43	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	12	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		2	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	11	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	4	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	2	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	25	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		19	', amount12: 'RECOVERED-	7	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	54	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	35	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	15	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	6	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	8	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		1	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	3	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	12	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	9	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		3	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	15	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	9	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	11	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	10	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
{id: 1, name: '	10-12-21', total: '  	368	',positive:' 	32	',recoverd:' 	16	',death:' 	0	',active:' 	368		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		5	', amount1: 'RECOVERED-	1	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	50	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	13	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	6	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	6	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	3	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		5	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	57	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	14	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	9	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	5	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		1	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	1	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		4	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	23	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		6	', amount12: 'RECOVERED-	5	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	42	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	36	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	14	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	6	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	8	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		2	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	3	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	12	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	10	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	13	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		2	', amount24: 'RECOVERED-	0	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	10	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		1	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	1	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		2	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	11	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		2	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	10	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
{id: 1, name: '	09-12-21', total: '  	352	',positive:' 	40	',recoverd:' 	29	',death:' 	0	',active:' 	352		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		2	', amount1: 'RECOVERED-	7	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	46	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	13	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	6	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	6	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	3	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		6	', amount6: 'RECOVERED-	7	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	57	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		3	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	14	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	1	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	9	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	5	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	0	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	2	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	20	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		9	', amount12: 'RECOVERED-	3	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	41	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		9	', amount13: 'RECOVERED-	3	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	36	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	13	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	7	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	8	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		1	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	12	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	10	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	15	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	8	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	9	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	8	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		2	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
																
{id: 1, name: '	08-12-21', total: '  	341	',positive:' 	37	',recoverd:' 	27	',death:' 	1	',active:' 	341		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		9	', amount1: 'RECOVERED-	2	', GIFTS1: 'DEATH:-	1	', amountg1: 'ACTIVE-	51	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	6	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	1	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	6	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	1	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	3	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		3	', amount6: 'RECOVERED-	1	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	58	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	13	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	10	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	0	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	19	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		7	', amount12: 'RECOVERED-	12	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	35	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	30	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	13	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	7	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	8	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	0	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		3	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	12	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		3	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	10	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	13	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	8	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		2	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	10	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		2	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	8	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	1	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
																
{id: 1, name: '	07-12-21', total: '  	332	',positive:' 	27	',recoverd:' 	32	',death:' 	0	',active:' 	332		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		2	', amount1: 'RECOVERED-	2	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	45	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	6	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	7	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		5	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	56	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	14	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		3	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	10	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	5	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	0	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		1	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	20	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		3	', amount12: 'RECOVERED-	10	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	40	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		3	', amount13: 'RECOVERED-	4	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	30	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	13	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		3	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	8	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	8	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	0	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	9	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	6	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	7	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	13	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		2	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	8	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	8	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		2	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	6	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		1	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	1	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
{id: 1, name: '	06-12-21', total: '  	337	',positive:' 	44	',recoverd:' 	37	',death:' 	0	',active:' 	337		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		5	', amount1: 'RECOVERED-	3	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	45	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	5	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	7	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		4	', amount6: 'RECOVERED-	6	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	56	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	4	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	16	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	7	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	4	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	5	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	3	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	0	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	19	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		1	', amount12: 'RECOVERED-	10	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	47	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		10	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	31	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		2	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	14	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	5	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	7	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	1	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	0	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	0	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		6	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	9	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		5	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	13	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	13	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	1	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	2	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	7	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	8	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		3	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	4	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	1	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																

{id: 1, name: '	05-12-21', total: '  	330	',positive:' 	25	',recoverd:' 	21	',death:' 	0	',active:' 	330		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		2	', amount1: 'RECOVERED-	7	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	43	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	2	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	5	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	7	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		2	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	58	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	19	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	7	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	9	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	3	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		1	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	16	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		4	', amount12: 'RECOVERED-	1	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	56	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		6	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	21	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		5	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	12	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	5	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	6	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	1	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	0	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	3	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	3	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	8	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	3	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	9	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	8	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	2	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},

																
																
																
{id: 1, name: '	04-12-21', total: '  	326	',positive:' 	44	',recoverd:' 	39	',death:' 	0	',active:' 	326		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		4	', amount1: 'RECOVERED-	6	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	48	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		3	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	13	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		2	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	4	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		4	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	7	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		7	', amount6: 'RECOVERED-	4	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	61	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		6	', amount7: 'RECOVERED-	3	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	19	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		4	', amount8: 'RECOVERED-	1	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	7	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	8	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	3	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	15	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		1	', amount12: 'RECOVERED-	7	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	53	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		3	', amount13: 'RECOVERED-	4	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	16	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	8	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	5	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		4	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	6	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	4	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	1	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	0	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	1	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	0	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	3	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	11	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	3	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	11	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	3	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	9	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	1	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	8	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	1	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	2	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
																
{id: 1, name: '	03-12-21', total: '  	321	',positive:' 	28	',recoverd:' 	35	',death:' 	0	',active:' 	321		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		7	', amount1: 'RECOVERED-	6	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	50	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		1	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	10	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	2	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		2	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	4	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		3	', amount6: 'RECOVERED-	2	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	58	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	4	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	16	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		2	', amount8: 'RECOVERED-	2	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	7	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	2	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	3	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		1	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	13	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		2	', amount12: 'RECOVERED-	3	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	59	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		2	', amount13: 'RECOVERED-	3	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	17	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	8	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	2	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	3	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	5	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		1	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	3	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	3	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	11	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	14	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	3	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		2	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	10	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		2	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	8	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
{id: 1, name: '	02-12-21', total: '  	327	',positive:' 	37	',recoverd:' 	25	',death:' 	0	',active:' 	327		',	
customer1: '	DURG	', toys1: 'POSITIVE:-		8	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	49	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		5	', amount2: 'RECOVERED-	5	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	10	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	2	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	1	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	2	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		6	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	57	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	20	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	7	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	5	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		0	', amount11: 'RECOVERED-	2	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	12	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		2	', amount12: 'RECOVERED-	1	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	60	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	18	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		3	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	8	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		1	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	1	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	2	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	4	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	14	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		4	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	16	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		2	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	3	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	10	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		3	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	6	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		1	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	2	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	1	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	3	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
{id: 1, name: '	01-12-21', total: '  	316	',positive:' 	20	',recoverd:' 	23	',death:' 	0	',active:' 	316		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	46	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		2	', amount2: 'RECOVERED-	4	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	10	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		2	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		2	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	54	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	20	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	7	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	5	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	15	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		0	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	59	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	3	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	18	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	5	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		2	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	2	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		1	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	18	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	11	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	3	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	4	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
																
{id: 1, name: '	30-11-21', total: '  	318	',positive:' 	34	',recoverd:' 	31	',death:' 	0	',active:' 	318		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	48	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	11	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	1	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	1	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		14	', amount6: 'RECOVERED-	12	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	55	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	18	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	6	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	13	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		7	', amount12: 'RECOVERED-	1	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	61	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	21	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	6	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		1	', amount21: 'RECOVERED-	7	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	18	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	3	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	12	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	3	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	4	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
{id: 1, name: '	29-11-21', total: '  	318	',positive:' 	16	',recoverd:' 	28	',death:' 	0	',active:' 	318		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		1	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	50	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	11	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	1	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	2	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		5	', amount6: 'RECOVERED-	6	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	53	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	17	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	6	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		1	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	11	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		5	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	55	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	3	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	6	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	24	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	11	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	16	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
{id: 1, name: '	28-11-21', total: '  	325	',positive:' 	30	',recoverd:' 	22	',death:' 	0	',active:' 	325		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		7	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	54	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	4	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		7	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	54	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	18	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	7	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	11	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		3	', amount12: 'RECOVERED-	0	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	52	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		3	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	9	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	1	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	1	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	25	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	9	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	18	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
																},
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
{id: 1, name: '	27-11-21', total: '  	323	',positive:' 	27	',recoverd:' 	18	',death:' 	0	',active:' 	323		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	2	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	52	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		2	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	4	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		1	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		1	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	54	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	18	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	2	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	7	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	11	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		10	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	52	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	9	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	25	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amountg22: 'ACTIVE-	9	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	18	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
																},
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
  ];																
  																
  return factory;																
}]);																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																