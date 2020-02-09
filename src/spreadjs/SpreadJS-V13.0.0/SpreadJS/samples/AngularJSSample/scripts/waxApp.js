"use strict";

// define app (depends on "wijmo", and also on the modules that contain our directives)
// IMPORTANT: if you forget to include a directive, there will be no error message!!!
angular.module("waxApp", ["gcspreadsheets", "ngRoute"]).
  config(["$routeProvider", function ($routeProvider) {
      $routeProvider.

      // show wijmo directives
      when("/spreadjs/databinding", { templateUrl: "partials/spreadjs/databinding.html" }).
      when("/spreadjs/layout", { templateUrl: "partials/spreadjs/layout.html" }).
      when("/spreadjs/style", { templateUrl: "partials/spreadjs/style.html" }).
      when("/spreadjs/celltype", { templateUrl: "partials/spreadjs/celltype.html" }).
      when("/spreadjs/datavalidation", { templateUrl: "partials/spreadjs/datavalidation.html" }).

      // home
      when("/", { templateUrl: "partials/home.htm" }).
      otherwise({ redirectTo: "/" });
  } ]);

