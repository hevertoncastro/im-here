angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('HistoryCtrl', function($scope, Lessons) {
  $scope.lessons = Lessons.all();
  $scope.remove = function(lesson) {
    Lessons.remove(lesson);
  }
})

.controller('LessonDetailCtrl', function($scope, $stateParams, Lessons) {
  $scope.lesson = Lessons.get($stateParams.lessonId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
