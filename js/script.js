(function () {
	var fotoArr = document.querySelectorAll(".foto-list-item");
	var prev = document.querySelector(".prev");
	var next = document.querySelector(".next");
	var i = 0;
	next.addEventListener("click", function(){
		fotoArr[i].classList.remove("show");
	 	i++;
	 	if(i >= fotoArr.length){
	 		i = 0;
	 	}
	 	console.log(i)
	 	fotoArr[i].classList.add("show");
	 });
	prev.addEventListener("click", function(){
		console.log(i)
		fotoArr[i].classList.remove("show");
	 	i--;
	 	if(i < 0){
	 		i = fotoArr.length-1;
	 	}
	 	console.log(i)
	 	fotoArr[i].classList.add("show");
	 });
})();

(function () {

    var mobyMenuOnOffFnc =  function(){
    $(".navigation__list").toggleClass("dn");
  
    if(mobyBtn.hasClass("x")){
      mobyBtn.removeClass("x");
      $(".decor").css("display","block");
    }else{
      mobyBtn.addClass("x");
      $(".decor").fadeOut(0);
    }
  };

  var header =  $(".header");
  $(window).on("scroll", function(){
    var headHeight = header.height();
  	var scroll =  $(window).scrollTop();
       if(scroll > headHeight){
          header.addClass("fix");
          $("body").css("paddingTop", headHeight + 10);
          $(".up").fadeIn(200);
        }else if(scroll < 1){
          header.removeClass("fix");
          $("body").css("paddingTop", 0);
          $(".up").fadeOut(0);
        }
  });
  $("#time").on("click",function(e){
  	e.preventDefault();
    mobyMenuOnOffFnc();
    $(".navigation__list").addClass("dn");
  	var plansOffset = $(".main__before-after").offset().top;
  	$("html, body").animate({scrollTop:plansOffset},300);
  });
  $("#about").on("click",function(e){
  	e.preventDefault();
    mobyMenuOnOffFnc();
    $(".navigation__list").addClass("dn");
  	var plansOffset = $(".about-us").offset().top;
  	$("html, body").animate({scrollTop:plansOffset},300);
  });
  $("#map").on("click",function(e){
  	e.preventDefault();
    mobyMenuOnOffFnc();
  	var plansOffset = $(".map").offset().top;
  	$("html, body").animate({scrollTop:plansOffset},300);
  });

  /*=== открытие мобильного меню ===*/
  $(".navigation__list").addClass("dn");

  var mobyBtn = $(".moby-btn");
  mobyBtn.on("click",function(e){
    e.preventDefault();
    mobyMenuOnOffFnc();
  });

  if(mobyBtn.hasClass("x")){
    $(".navigation__list").addClass("dn");
  }

  $(".up").on("click",function(e){
    mobyMenuOnOffFnc();
    e.preventDefault();
    $("html, body").animate({scrollTop:0},300);
  })

})();