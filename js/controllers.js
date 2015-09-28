app.controller('HttpController', function($scope, $http, $firebaseArray){
  $('#test').click(function(id){
    console.log(id.target.id)
  })

  var termsRef = new Firebase('https://3xponentia.firebaseio.com/terms')
  $scope.terms = $firebaseArray(termsRef)
  $scope.addQuery = function(){
    $scope.url = "http://eutils.ncbi.nlm.nih.gov/entrez/eutils/espell.fcgi?db=pubmed&term=" + $scope.term
    $http.get($scope.url)
    .then(function(data){
      var x2js = new X2JS()
      var json = x2js.xml_str2json(data.data)
      $scope.search = json.eSpellResult.CorrectedQuery || $scope.term;
      $scope.terms.$add({text: $scope.search, weight: 13}).then(function(data){
        $scope.term = ""
      })
      if($scope.terms.length >= 70){
        for (var i = 0; i <$scope.terms.length; i++) {
          $scope.terms.$remove($scope.terms[i])
        }
      }
    })
  }
})
