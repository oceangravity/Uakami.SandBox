define(function () {
   return "<div id=\"image_gallery\" style=\"position: relative; width: 100%; height: 100%;\"> <div class=\"arrow left icon-angle-left\"></div> <ul id=\"images-wrapper\" style=\"margin: 0; padding: 0; width: 90%;\">{{#thumbs}}<li style=\"background: url({{this}}); background-size: cover; background-repeat: no-repeat; background-position: center center;\" class=\"slide\"> </li>{{/thumbs}}</ul> <div class=\"arrow right icon-angle-right\"></div> </div>";
});
