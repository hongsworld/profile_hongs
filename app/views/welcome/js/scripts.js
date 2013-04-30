include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/uScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/forms.js");
include("js/MathUtils.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = true, content;

function addAllListeners() {
    $('.soc_icons>li>a').hover(
        function(){
        	$('img',this).stop().animate({'marginTop':'-8px'},400,'easeOutExpo');  
        },
        function(){
            $('img',this).stop().animate({'marginTop':'0px'},600,'easeOutCubic');  
        }
    );  
    var val2 = parseInt($('.list2>li').css('paddingLeft'));
    $('.list2>li>a').hover(
        function(){
        	$(this).parent().stop().animate({'paddingLeft':val2+15},400,'easeOutExpo');  
        },
        function(){
            $(this).parent().stop().animate({'paddingLeft':val2},600,'easeOutCubic');  
        }
    );  
    $('.closeBtn').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'center bottom'},400,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'center top'},600,'easeOutExpo');  
        }
    );   
    var val1 = $('.readMore').css('color');
    $('.readMore').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'center bottom','color':'#ff5400'},400,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'center top','color':val1},600,'easeOutExpo');  
        }
    ); 
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    $('.scroll')
	.uScroll({			
		mousewheel:true,
        lay:'outside'
	})
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'display':'none'});	
        },
        actFu:function(_){      
            if(_.curr){                
                _.curr
                    .css({'left':'-2000px','display':'block'}).stop(true).show().animate({'left':'0px'},{duration:1200,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'2000px'},{duration:500,easing:'easeInOutCubic',complete:function(){
                            if (_.prev){
                                _.prev.css({'display':'none'});
                            }
                        }
		              });
            }            
  		}
    });
    var defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_home',
        hoverIn:function(li){
            $('>a>span', li).eq(0).stop().animate({'marginTop': '-132px'},400,'easeOutExpo');
            $(li).stop().animate({'height':'142px','marginBottom':'-12px'},400,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a>span', li).eq(0).stop().animate({'marginTop': '0'},600,'easeOutExpo');
                $(li).stop().animate({'height':'92px','marginBottom':'8px'},600,'easeOutExpo');
            }
        }
    })
    .navs(function(n,_){
   	    $('#content').tabs(n);
        if (_.prevHash == '#!/page_mail') { 
            $('#form1 a').each(function (ind, el){
                if ($(this).attr('data-type') == 'reset') { $(this).trigger('click') }   
            })
        }
   	});
    
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftTop',
           autoplay: false
        })
    },0);
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
}

$(window).resize(function (){
    if (content) content.stop().animate({'top':(windowH()-content.height())*.5},500,'easeOutCubic')
});