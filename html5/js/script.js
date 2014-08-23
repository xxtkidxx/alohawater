function start(){ 
	
	$('.slogan').css({marginLeft:-1000}).stop().delay(100).animate({marginLeft:0},1800,'easeOutExpo');

};

function showSplash(){
	setTimeout(function () {
		$('.main3').stop().animate({marginBottom:0},800,'easeOutExpo');
	  	$('.menu').stop().animate({marginBottom:0},800,'easeOutExpo');
		$('header').stop().animate({marginTop:0},800,'easeOutExpo');
		
		$('#menu_splash li.nav4').css({visibility:'visible'}).stop().delay(0).animate({marginLeft:0},800,'easeOutExpo');
		$('#menu_splash li.nav3').css({visibility:'visible'}).stop().delay(100).animate({marginLeft:0},800,'easeOutExpo');
		$('#menu_splash li.nav5').css({visibility:'visible'}).stop().delay(200).animate({marginLeft:0},800,'easeOutExpo');
		$('#menu_splash li.nav2').css({visibility:'visible'}).stop().delay(300).animate({marginLeft:0},800,'easeOutExpo');
		$('#menu_splash li.nav6').css({visibility:'visible'}).stop().delay(400).animate({marginLeft:0},800,'easeOutExpo');
		$('#menu_splash li.nav1').css({visibility:'visible'}).stop().delay(500).animate({marginLeft:0},800,'easeOutExpo');


	}, 500);
	
};
function hideSplash(){ 
	
	$('.main3').stop().animate({marginBottom:32},800,'easeOutExpo');
	$('.menu').stop().animate({marginBottom:42},800,'easeOutExpo');
	$('header').stop().animate({marginTop:-100},800,'easeOutExpo');
	
   $('#menu_splash li.nav1').stop().delay(0).animate({marginLeft:-2000},400,'easeInExpo', function(){$(this).css({visibility:'hidden'}); });
   $('#menu_splash li.nav6').stop().delay(100).animate({marginLeft:2000},400,'easeInExpo', function(){$(this).css({visibility:'hidden'}); });
   $('#menu_splash li.nav2').stop().delay(200).animate({marginLeft:-2000},400,'easeInExpo', function(){$(this).css({visibility:'hidden'}); });
   $('#menu_splash li.nav5').stop().delay(300).animate({marginLeft:2000},400,'easeInExpo', function(){$(this).css({visibility:'hidden'}); });
   $('#menu_splash li.nav3').stop().delay(400).animate({marginLeft:-2000},400,'easeInExpo', function(){$(this).css({visibility:'hidden'}); });
   $('#menu_splash li.nav4').stop().delay(500).animate({marginLeft:2000},400,'easeInExpo', function(){$(this).css({visibility:'hidden'}); });


   
};
function hideSplashQ(){	
	
	$('.main3').css({marginBottom:32});
	$('.menu').css({marginBottom:42});
	$('header').css({marginTop:-100});
	
	$("#menu_splash li.nav1").css({marginLeft:-2000, visibility:'hidden'});
	$("#menu_splash li.nav2").css({marginLeft:-2000, visibility:'hidden'});
	$("#menu_splash li.nav3").css({marginLeft:-2000, visibility:'hidden'});
	$("#menu_splash li.nav4").css({marginLeft:-2000, visibility:'hidden'});
	$("#menu_splash li.nav5").css({marginLeft:2000, visibility:'hidden'});
	$("#menu_splash li.nav6").css({marginLeft:2000, visibility:'hidden'});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});
	
	/////// icons
	$(".icons li").find("a").css({opacity:0.6});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.6 }, 400, 'easeOutExpo' );		   
	});
	
	/////// menu_splash
	$("#menu_splash a").find(".over1").css({opacity:0});
	$("#menu_splash a").hover(function() {
		$(this).find(".over1").stop().animate({opacity:1 }, 800, 'easeOutExpo');
		$(this).find(".over2").stop().animate({opacity:0 }, 800, 'easeOutExpo');
		$(this).find(".txt1").stop().animate({color:"#ffffff" }, 800, 'easeOutExpo');
		$(this).find(".txt2").stop().animate({color:"#ffffff" }, 800, 'easeOutExpo');
		
	},function(){
	    $(this).find(".over1").stop().animate({opacity:0 }, 800, 'easeOutExpo');
		$(this).find(".over2").stop().animate({opacity:1 }, 800, 'easeOutExpo');
		$(this).find(".txt1").stop().animate({color:"#0075df" }, 800, 'easeOutExpo');
		$(this).find(".txt2").stop().animate({color:"#0099ff" }, 800, 'easeOutExpo');
		
	});
	
	/////// close
	$(".close span").css({opacity:0.5});
	$(".close").hover(function() {
		$(this).find("span").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find("span").stop().animate({opacity:0.5 }, 400, 'easeOutExpo' );		   
	});
	
	///////// video1
	$('.video1').hover(function(){
		$(this).find("img").stop().animate({backgroundColor:"#000000"},400);
	}, function(){
		$(this).find("img").stop().animate({backgroundColor:"#ffffff"},400);
	});
	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 12,
		verticalDragMinHeight: 100,
		verticalDragMaxHeight: 100
	});	
	
	/////bgStretch
	$('#bgStretch').bgStretch({
			align:'leftTop'
	});
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');
	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',left:-2000});
		   //$('.main3').css({display:'none',opacity:0});
		   //$('.close').css({display:'none',opacity:0});
        },
        actFu:function(_){
			var Delay=0;
			if(_.pren == 0){Delay=500;};
			
			if(_.curr){
				_.curr.css({display:'block', left:-2000}).stop().delay(Delay).animate({left:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({left:2000},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			//$('> a .over',li).stop(true).animate({top:0},400, 'easeOutExpo');
			$('> a .over',li).stop().animate({top:0, opacity:0.8},400, 'easeOutCubic');
			$('.txt1',li).stop().animate({top:42},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:0},400, 'easeOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({top:0},400, 'easeOutExpo');
     			$('.txt2',li).stop().animate({top:42},400, 'easeOutExpo'); 
				$('> a .over',li).stop().animate({top:42, opacity:0},400, 'easeOutCubic');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 100);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});