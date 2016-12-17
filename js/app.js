// functions for localstorage
function add_task(task){
	//console.log(task);
	if(!localStorage.tasks){
		var newall = [];
		localStorage.tasks = JSON.stringify(newall);
	}
	var all = JSON.parse(localStorage.tasks);
	all.push(task);
	localStorage.tasks = JSON.stringify(all);

}

function get_all(){
	if(!localStorage.tasks){
		var newall = [];
		localStorage.tasks = JSON.stringify(newall);
	}
	return JSON.parse(localStorage.tasks);
}

function delete_task(index){
	if(!localStorage.tasks)
		return;
	var all = JSON.parse(localStorage.tasks);
	if(all.length>index){
		all.splice(index, 1);
		localStorage.tasks = JSON.stringify(all);
	}
	return
}
//functions for local storage end
var app = angular.module("todo", []);

app.controller("todoController", function($scope){
	$scope.title = "TODO LIST";
	$scope.note = "Click on a task to delete it."
	$scope.data = {};
	$scope.data.add = "";
	$scope.data.tasks = get_all();

	$scope.data.keydown = function(event){
		if(event.keyCode == 13){
			//console.log($scope.data.add);
			var newtask = {};
			newtask.description = $scope.data.add;
			add_task(newtask);
			$scope.data.add = "";
			$scope.data.tasks = get_all();
		}
	}

	$scope.data.delete = function(index){
		//console.log("hello");
		delete_task(index);
		$scope.data.tasks = get_all();
	}
});