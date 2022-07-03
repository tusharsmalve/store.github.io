$(document).ready(function () {
  var noOfProduct = $("#product_container ul li").length;
  var totalProductWidth = 0;
  for (var i = 0; i < noOfProduct; i++) {
        var productWidth = $("#product_container ul li").eq(i).outerWidth(true);
        totalProductWidth = totalProductWidth + productWidth;
  }

  $("#slider").css("width", totalProductWidth + "px");

  var speed = 1;
  animateProducts();

  function animateProducts() {
        $("#slider li")
              .eq(0)
              .animate(
                    {
                          marginLeft: "-=" + speed + "px"
                    },
                    1,
                    function () {
                          var animProductWidth = $(this).outerWidth(true);

                          if (speed >= animProductWidth) {
                                $(this).parent().append($(this));
                                $(this).removeAttr("style");
                          }

                          aninInterval = setTimeout(function () {
                                animateProducts();
                          });
                    }
              );
  }

//   $("#slider").hover(
//         function () {
//               clearTimeout(aninInterval);
//               $("#slider li").eq(0).stop();
//         },
//         function () {
//               animateProducts();
//         }
//   );


});
