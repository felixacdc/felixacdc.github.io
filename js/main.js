$(document).on("ready",function(){function e(){var e=[],t=[],a=$(window).scrollTop(),n=200;$(".navbar-collapse").find(".scroll a").each(function(){e.push($($(this).attr("href")).offset().top),t.push($($(this).attr("href")).offset().top+$($(this).attr("href")).height())}),$.each(e,function(t){a>e[t]-n&&$(".navbar-collapse li.scroll").removeClass("active").eq(t).addClass("active")})}$(window).scroll(function(t){e()}),$(".navbar-collapse ul li a").on("click",function(){return $("html, body").animate({scrollTop:$(this.hash).offset().top-5},1e3),!1}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("a.page-scroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-40},900),!1}}),$("#element").introLoader({animation:{name:"simpleLoader",options:{exitFx:"slideRight",ease:"easeInOutCirc",style:"ocean",delayBefore:1e3,exitTime:500,onAfter:function(){$(".homeloader").css("display","block"),(new WOW).init()}}},spinJs:{lines:13,length:20,width:10,radius:30,corners:1,color:"#fff"}}),$("a.linkWeb").click(function(){return url=$(this).attr("href"),window.open(url,"_blank"),!1})});