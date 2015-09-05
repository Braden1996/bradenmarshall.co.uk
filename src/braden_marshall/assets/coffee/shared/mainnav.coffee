angular.module "mainnav", []

  .controller "MainnavController", ["$scope", ($scope) ->
    $scope.isActive = false
    $scope.isFixed = false
  ]

  .directive "scrollPast", ($window) ->
    link: (scope, element, attrs) ->
      windowElement = angular.element $window
      handler = ->
        reqOffset = element.prop("offsetTop") + element.prop("offsetHeight")
        scope.isFixed = this.pageYOffset > reqOffset
      windowElement.on "scroll", scope.$apply.bind(scope, handler)
      handler()