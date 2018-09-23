$(document).ready(function() {
	$(".content>div>div>div:nth-of-type(2)>div>button:nth-of-type(2)").click(function() {
		window.location.href = "http://clouddeer-expo.com/CloudDeer/clouddeer/component/contactUs/contactUs.html"
	}), $(".content .loading").css("display", "none");
	var e = 0;
	$(".more_a").click(function() {
		1 == ++e ? ($(".fenlei").css("height", "200px"), $(".fenlei>div").eq(3).css("height", "80px"), $(".fenlei>div:nth-last-of-type(1)>div:nth-of-type(1)").css({
			height: "80px",
			"line-height": "80px"
		}), $(".fenlei>div:nth-last-of-type(1)>div:nth-of-type(2)").css("height", "80px"), $(".more_a").html("收起"), $(".last_a").css("display", "block"), e = -1) : ($(".fenlei").css("height", "160px"), $(".fenlei>div").eq(3).css("height", "40px"), $(".fenlei>div:nth-last-of-type(1)>div:nth-of-type(1)").css({
			height: "40px",
			"line-height": "40px"
		}), $(".fenlei>div:nth-last-of-type(1)>div:nth-of-type(2)").css("height", "40px"), $(".more_a").html("更多"), $(".last_a").css("display", "none"))
	});
	var n = 1;

	function o() {
		for(var e = 1; e < 6; e++) $(".fenye>ul>li").eq(e).removeClass("active").addClass("normal");
		if(n > 0 && n < 6){
			$(".fenye>ul>li").eq(n).removeClass("normal").addClass("active"), $(".fenye>ul>li").eq(n).siblings().addClass("normal"), $(".fenye>ul>li").eq(0).removeClass("normal"), $(".fenye>ul>li").eq(6).removeClass("normal");
		}
		for(var o = 0; o < 5; o++) $(".content").eq(o).css("display", "none");
		var t = n - 1;
		$(".content").eq(t).css("display", "block")
	}

//	$(".content").eq(0).css("display", "block"), $(".fenye>ul>li:not(.no)").click(function() {
//		n = $(this).index(), console.log(n), o()
//	}), $(".no:nth-of-type(2)").click(function() {
//		1 == --n && (n = 8), console.log(n), o()
//	}), $(".no:nth-last-of-type(1)").click(function() {
//		9 == ++n && (n = 2), console.log(n), o()
//	}), $(".sideBar>li:last-child").click(function() {
//		window.location.href = "http://clouddeer-expo.com/CloudDeer/clouddeer/component/homePage/homePage.html"
//	})
	$(".content").eq(0).css("display", "block"), $(".fenye>ul>li:not(.no)").click(function() {
		n = $(this).index(), console.log(n), o()
	}), $(".no:nth-of-type(1)").click(function() {
		0 == --n && (n = 5), console.log(n), o()
	}), $(".no:nth-last-of-type(1)").click(function() {
		6 == ++n && (n = 1), console.log(n), o()
	}), $(".sideBar>li:last-child").click(function() {
		window.location.href = "http://clouddeer-expo.com/CloudDeer/clouddeer/component/homePage/homePage.html"
	})
});