var data_service_app = angular.module('data_service_app',[]);

data_service_app.service('dataService', function($http) {
  //delete $http.defaults.headers.common['X-Requested-With'];
  this.getData = function(request_url) {
    // $http() returns a $promise that we can add handlers with .then()
    // Careful with the Allow-Control-Allow-Origin bug (works on Chrome thx to the "Allow-Control-Allow-Origin:*" extension
    return $http({
      method: 'GET',
      url: request_url,
      headers: {
        'Authorization': 'apikey token=541749f2-9060-425c-8083-a6b55d0d9fa6'
      }
     });
   }
});

// Function that takes build the URL to get the annotations according to the paramaters (score, whole word only)
function build_annotation_url(textToAnnotate, checkScore, wholeWord) {
  //var request_url = "http://services.stageportal.lirmm.fr/annotator/?longest_only=false&exclude_numbers=false&exclude_synonyms=false&apikey=541749f2-9060-425c-8083-a6b55d0d9fa6&text=" + textToAnnotate;
  
  var request_url = "http://data.stageportal.lirmm.fr/annotator/?longest_only=false&exclude_numbers=false&exclude_synonyms=false&text=" + textToAnnotate;
  // Attention, ne marche pas avec services.stageportal car il ne récupère pas les headers
  
  // Ask for score if score checkbox on true
  if (checkScore) {
    request_url = request_url + "&score=cvalue"
  }
  // Check if asking to annotate on whole word only
  if (wholeWord) {
    request_url = request_url + "&whole_word_only=true"
  } else {
    request_url = request_url + "&whole_word_only=false"
  }
  return request_url;
}

// the controller called in the html by the form 
data_service_app.controller('serviceController', function($scope, dataService) {    
  // function that calls the dataservice to get the annotations
  $scope.getAnnotation = function() {
    $scope.request_url = build_annotation_url($scope.textToAnnotate, $scope.checkScore, $scope.wholeWord);
    //console.log($scope.request_url);
    dataService.getData($scope.request_url).then(function(dataResponse) {
      $scope.data = dataResponse.data;
    });
  };
});