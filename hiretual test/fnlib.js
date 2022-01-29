var $ = jQuery;
// set skip nav
var skip_nav = function () {
    var skip_str = '<p class="skip_nav hid" ><a tabindex="1" href="#main-content">skip to main content</a></p>';
    $('body').prepend(skip_str);

    $('.skip_nav a').focus(function () {
        $('.skip_nav').removeClass('hid');
    });

    $('.skip_nav a').blur(function () {
        $('.skip_nav').addClass('hid');
    });

}

// 	 nav set Keyboard operation

var set_nav_enter = function () {
    $('#top-menu-nav .nav>li>a').not('#menu-item-16035>a').attr({ Role: "button", state: "aria-expanded", expanded: "false" });
    var nav_mart;
    $('#top-menu-nav .nav>li>a').on('focus', function () {
        nav_mart = 1;
        if (nav_mart) {
            $('#top-menu-nav .nav>li>a').removeClass('show-ul').attr({ expanded: "false" });
            $(this).addClass('show-ul')
            $(this).attr({ expanded: "true" });
        }
    })
    $('#top-menu-nav .nav>li').on('mouseenter', function () {
        $(this).children('a').attr({ expanded: "true" });

    })
    $('#top-menu-nav .nav>li').on('mouseleave', function () {

        if (nav_mart) $('#top-menu-nav .nav>li>a').removeClass('show-ul');
        $(this).children('a').attr({ expanded: "false" });
        nav_mart = 0;
    })
}


// setnav_pull
window.setnav_pull = function(){
    var str=$("#menu-item-3050>a").css("pointer-events","none")
   var str=$("#menu-item-11959>a").css("pointer-events","none")
   var str=$("#menu-item-11949>a").css("pointer-events","none")
	   $("#mobile_menu>li").click(function(){
       
       if(this.getElementsByTagName("ul")[0].className=="sub-menu"){
        this.getElementsByTagName("ul")[0].className="sub-menu showul"
       }else{
        this.getElementsByTagName("ul")[0].className="sub-menu"
       }
   })
  }

var add = 0;
window.onload = function () {
    add++;
    if (add > 1) { return };

    $ = jQuery;
    set_nav_enter();
    skip_nav();
    //Homepage_Appsinit_init_fn
    window.Homepage_Appsinit && window.Homepage_Appsinit.init_fn();
    // case_study_init
    window.case_study_init && window.case_study_init();
    // blog_template_init
    window.blog_template_init && window.blog_template_init();
// setnav_pull
window.setnav_pull&&window.setnav_pull();

}