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



## Changing CSS

Use css/themes.css to change the CSS

* Changer la couleur du gradient de la navbar
Dans bootstrap-theme.css	

```css
.navbar-inverse {
  background-image: -webkit-linear-gradient(top, #3c3c3c 0%, #222 100%);
  background-image:      -o-linear-gradient(top, #3c3c3c 0%, #222 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#3c3c3c), to(#222));
  background-image:         linear-gradient(to bottom, #E3182C 0%, #EC940C 100%);  /* Gradient entre ces 2 couleurs */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c3c3c', endColorstr='#ff222222', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-radius: 4px;
}
```

* Changer la couleur de l'onglet sélectionné
Dans bootstrap-theme.css

```css
.navbar-inverse .navbar-nav > .active > a {
  background-image: -webkit-linear-gradient(top, #080808 0%, #0f0f0f 100%);
  background-image:      -o-linear-gradient(top, #080808 0%, #0f0f0f 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#080808), to(#0f0f0f));
  background-image:         linear-gradient(to bottom, #E3182C 0%, #EC940C 100%);   /* Ici */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff080808', endColorstr='#ff0f0f0f', GradientType=0);
  background-repeat: repeat-x;
  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, .25);
          box-shadow: inset 0 3px 9px rgba(0, 0, 0, .25);
}
```

* Changer la couleur de la bordure sous la navbar
Dans bootstrap.css

```css
.navbar-inverse {
  background-color: #0080FF;
  border-color: #080808;  /* Modifie la couleur de la bordure sous la navbar */
}
```

* Changer la couleur du texte "Data Services"
Dans bootstrap.css

```css
.navbar-inverse .navbar-brand {
  color: #9d9d9d;
}
```

* Changer la couleur du texte de la liste dans la navbar
Dans bootstrap.css

```css
.navbar-inverse .navbar-nav > li > a {
  color: #FFFFFF;
}
```

* Changer la couleur des textes de la navbar quand on passe dessus
Dans bootstrap.css

```css
/* Pour la liste */
.navbar-inverse .navbar-nav > li > a:focus {
  color: #9d9d9d;
  background-color: transparent;
}

/* Pour "Data Services" */
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #9d9d9d;
  background-color: transparent;
}
```

## Change Jumbotron style
In bootstrap.css

```css
.jumbotron p, .jumbotron li {  /* Just add ", .jumbotron li" here */
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 200;
}
```


## Couleur du logo du LIRMM

* Bleu
1273B7
* Orange
EC940C
* Rouge
E3182C