$(document).ready(function(){

  //Sticky Menu
  $(".js_services_section").waypoint(function(direction){
    if(direction=="down"){
          $("nav").addClass("sticky");
    } else {
          $("nav").removeClass("sticky");
    }
  });
});
