app = angular.module "mainApp", [
        "bgoverlay",
        "mainnav"
]

app.config ($interpolateProvider) ->
  $interpolateProvider.startSymbol '{[{'
  $interpolateProvider.endSymbol '}]}'
