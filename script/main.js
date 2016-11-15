requirejs.config({
	paths: {
		'jquery': 'jquery.min',
		'tmpl': 'tmpl',
	},
	shim:{
		'jquery': {
			exports: 'jquery.min'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	[
	'jquery','tmpl','model','view','controller'
	],
function($, tmpl, Model, View, Controller){
	$(function (){
	var firstToDoList =['learn Java Script', 'learn HTML', 'learn CSS'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
	})	
});