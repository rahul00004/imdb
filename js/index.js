jQuery(function(){
         jQuery('#showall').click(function(){
               jQuery('.targetDiv').show();
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });




});

$(document).on("click", ".map-point-sm", function () {
  var show = $(this).data("show");
  $(show).removeClass("hide").siblings().addClass("hide");
});
