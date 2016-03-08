# Service Request App

A simple app to request REST API web services using Bootstrap 3.3.6 and AngularJS 1.5.0

## Using Sass to precompile the CSS

Use `css/themes.scss` then compile it to `css/themes.css` to change the CSS
It will resolve all variable used in the SCSS. You can also directly change the themes.css, but it will be override if themes.scss is compiled into themes.css


* Install Sass
```
gem install sass
```

* Convert scss to css (basically juste changing variables)

```
sass scss/theme.scss css/theme.css
```

* Tell Sass to watch the file and **update the CSS every time the Sass file changes**

```
sass --watch scss/theme.scss:css/theme.css

# Watch whole directory
sass --watch scss:css
```

* How to use variable

```css
$nav-color-light: #0080FF;

.navbar-inverse {
  border-color: $nav-color-light;
}
```


## Using AngularJS

* To call the getAnnotation() method from the serviceController (in js/data_service.js)

```html
<div ng-controller="serviceController">
  <form ng-submit="getAnnotation()">
    <input type="text" ng-model="textToAnnotate" size="30" placeholder="Text to annotate">
  </form>
</div>
```

* Creating the controller and method in the JavaScript (see js/data_service.js for more details)

```javascript
data_service_webapp.controller('serviceController', function($scope, dataService) {    
  // function that build the url and calls the dataservice to get the annotations
  $scope.getAnnotation = function() {
    $scope.request_url = build_annotation_url($scope.textToAnnotate);
    // calls the dataservice to get the annotations
    dataService.getData($scope.request_url).then(function(dataResponse) {
      $scope.data = dataResponse.data;
    });
  };
});
```


## Couleur du logo du LIRMM

* Bleu
1273B7
* Orange
EC940C
* Rouge
E3182C