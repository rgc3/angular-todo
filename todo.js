var todoAppDependencies = ["ngTouch"];

angular
// module function takes two arguments
// the first is the name of your application
// the second is the list of dependencies
  .module('ToDo', todoAppDependencies)

  // Angular is MV*, but we're going to use it as MVC,
  // which is a software architecture
  // the 'C' in our setup is the controller,
  // so we'll define it now.
  .controller("MainController", MainController);

  // M - Model (where you store data)
  // V - View (what you see, markup/HTML)
  // C - Controller (link model <-> controller)

  // things in Angular use $ to denote built-in features
function MainController($scope) {
  $scope.tasks = [
    {
      title: "Eat Chipotle with Jackie",
      completed: true
    },
    {
      title: "Walk the dog",
      completed: false
    },
    {
      title: "Create a JavaScript app",
      completed: false
    }
  ];
  $scope.creator = "Robert";
  $scope.addTask = function(newTask) {
    $scope.tasks.push({
      title: newTask,
      completed: false
    });
    $scope.newTask = "";
  };
}
