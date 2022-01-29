// blog_popup
var popup1_str = `<style>
/* blog_popup_boxA */
.blog_popup_boxA {
 position: fixed;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 opacity: 0;
 display: none;
 z-index: 999999;
 overflow: hidden;
}

.blog_popup_boxA.show {
 opacity: 1;
 display: flex;
flex-direction: column;
justify-content: center;
}

.blog_popup_boxA .tip_frame {
font-family: Poppins;
 width: 620px;
 height: 260px;
 border-radius: 16px;
 box-shadow: 0 8px 20px 0 rgba(63, 91, 123, 0.2);
 background-color: #ffffff;
 background-image: url(https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2021/04/tipbg2.png);
 background-size: auto 100%;
 background-repeat: no-repeat;
 background-position: right center;
 text-align: left;
 padding: 41px 25px 0;
 box-sizing: border-box;
 position: relative;
 margin: 0 auto;
}
.blog_popup_boxA .tip_close{
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 20px;
z-index: 9;
}
.blog_popup1{
  width: 1px;
  height: 1px;
  background-color: #000000;
  position: absolute;
  top: 22px;
  right: 22px;
  z-index: 10;
}
.blog_popup_boxA .tip_frame p{
margin: 0 !important;
padding: 0 !important;
max-width: 300px;
}
.blog_popup_boxA .tip_frame .p-1 {

background-image: linear-gradient(230deg, #2768b3, #3892e9, #54ccfc);
font-size: 28px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
}

.blog_popup_boxA .tip_frame .p-2 {
transform-origin: 0 0;
transform: scale(0.95);
font-size: 11.4px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.37;
letter-spacing: normal;
text-align: left;
color: #4f4f4f !important;
margin-top: 15px;
}
.blog_popup_boxA .tip_frame .p-2>span{
background-image: linear-gradient(to right, #2768b3, #3892e9, #54ccfc);
font-size: 12px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
}

.blog_popup_boxA .iframe_box{
width: 230px;
transform: scale(0.8);
transform-origin: 0 0;
margin-top: 28px;
}

</style>
<div class="blog_popup_boxA">
<div class="tip_frame">
 <img src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2021/03/close.png" alt="Close" class="tip_close">
 <p class="p-1">Like what you see?</p>
 <p class="p-2">Stay up-to-date on the latest recruitment tips, trends, and talks with <span> Hiretual Recruiter’s Recap.</span> </p>
 <div class="iframe_box" tabindex="0">
     <iframe class="_iframe" src="https://explore.hiretual.com/l/874171/2021-03-30/9bjqtb" width="100%" height="auto" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
 </div>
 </span> 
</div>
</div>`;

window.blog_popup = function () {
  var $ = jQuery;
  var append_str ;
  var boxname;

  if($('.tip_frame').length>0){
    return;
  };

var flag = 1;
var showele;

    window.onmessage = function(e){
    if(e.data&& e.data.message == 'blog_popup' && flag){
     showele = e.data.data;
      flag = 0;

  $('body').addClass(showele);

     $('.'+showele).click();
   console.log('click_')
     $('body').removeClass(showele)
    }
  }

  
  append_str = popup1_str;
  boxname = 'blog_popup_boxA';

$('body').append(append_str);
var close_tip = function(){
$('.'+boxname).removeClass('show');
window.onresize = null;
};

$('.'+boxname).on('click', close_tip);

$('.tip_close').on('click', close_tip);

$('.tip_frame').on('click',function(e){
if (e && e.stopPropagation) { 
　　      e.stopPropagation(); 
}else {
window.event.cancelBubble = true; 
} 
});

var set_postion = function () {
var wid = window.screen.width;

if (wid <= 980) {
   var tip_frame_s = (wid * 0.9) / 620;
   if(tip_frame_s>1)tip_frame_s=1;
   $('.tip_frame').css({ 'transform': 'scale(' + tip_frame_s + ')', 'margin-left': ((wid - 620) / 2) + 'px'})
} else {
   var left_part = $('#left-area') || $('body');
   var left_area_w = left_part.width();
   var d_left =  left_part.offset().left;
   var margin_left = d_left+(left_area_w-620)/2;
   $('.tip_frame').css({ 'transform': 'scale(1)', 'margin-left': margin_left+'px'});
}
};

set_postion();
window.onresize = set_postion;

setTimeout(function () {
$('.'+boxname).addClass('show');
},20000);
};

<script src="https://storage.pardot.com/874171/1605775081fJQEwFqt/jquery_3.5.1.min.js"></script>
{/* <script></script> */}
window.onload = function () {
  var popup1_str = `<style>
.blog_popup_boxA {
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
opacity: 0;
display: none;
z-index: 999999;
overflow: hidden;
}

.blog_popup_boxA.show {
opacity: 1;
display: flex;
flex-direction: column;
justify-content: center;
}

.blog_popup_boxA .tip_frame {
font-family: Poppins;
width: 620px;
height: 260px;
border-radius: 16px;
box-shadow: 0 8px 20px 0 rgba(63, 91, 123, 0.2);
background-color: #ffffff;
background-image: url(https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2021/04/tipbg2.png);
background-size: auto 101%;
background-repeat: no-repeat;
background-position: right center;
text-align: left;
padding: 41px 25px 0;
box-sizing: border-box;
position: relative;
margin: 0 auto;
}
.blog_popup_boxA .tip_close{
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 20px;
z-index: 9;
}
.blog_popup1{
width: 1px;
height: 1px;
background-color: #000000;
position: absolute;
top: 22px;
right: 22px;
z-index: 10;
}
.blog_popup_boxA .tip_frame p{
margin: 0 !important;
padding: 0 !important;
max-width: 300px;
}
.blog_popup_boxA .tip_frame .p-1 {

background-image: linear-gradient(230deg, #2768b3, #3892e9, #54ccfc);
font-size: 28px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
}

.blog_popup_boxA .tip_frame .p-2 {
transform-origin: 0 0;
transform: scale(0.95);
font-size: 11.4px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.37;
letter-spacing: normal;
text-align: left;
color: #4f4f4f !important;
margin-top: 15px;
}
.blog_popup_boxA .tip_frame .p-2>span{
background-image: linear-gradient(to right, #2768b3, #3892e9, #54ccfc);
font-size: 12px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
}

.blog_popup_boxA .iframe_box{
width: 230px;
transform: scale(0.8);
transform-origin: 0 0;
margin-top: 28px;
}

</style>
<div class="blog_popup_boxA">
<div class="tip_frame">
<img src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2021/03/close.png" alt="Close" class="tip_close">
<p class="p-1">Like what you see?</p>
<p class="p-2">Stay up-to-date on the latest recruitment tips, trends, and talks with <span> Hiretual Recruiter’s Recap.</span> </p>
<div class="iframe_box" tabindex="0">
   <iframe class="_iframe" src="https://explore.hiretual.com/l/874171/2021-03-30/9bjqtb" width="100%" height="auto" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
</div>
</span> 
</div>
</div>`;
  var $ = jQuery;
  var append_str = popup1_str;
  var boxname = 'blog_popup_boxA';
  var flag = 1;
  var showele;

  if ($('.tip_frame').length > 0) {
      return;
  };

  window.onmessage = function (e) {
      if (e.data && e.data.message == 'blog_popup' && flag) {
          showele = e.data.data;
          flag = 0;

          $('body').addClass(showele);

          $('.' + showele).click();
          console.log('click_')
          $('body').removeClass(showele)
      }
  };
  // append_str = popup1_str;
  // boxname = 'blog_popup_boxA';

  $('body').append(append_str);
  var close_tip = function () {
      $('.' + boxname).removeClass('show');
      window.onresize = null;
  };

  $('.' + boxname).on('click', close_tip);

  $('.tip_close').on('click', close_tip);

  $('.tip_frame').on('click', function (e) {
      if (e && e.stopPropagation) {
          e.stopPropagation();
      } else {
          window.event.cancelBubble = true;
      }
  });

  var set_postion = function () {
      var wid = document.body.offsetWidth || window.screen.width;
      var tip_frame_s = (wid * 0.9) / 620;
      if (tip_frame_s > 1) tip_frame_s = 1;
      $('.tip_frame').css({ 'transform': 'scale(' + tip_frame_s + ')', 'margin-left': ((wid - 620) / 2) + 'px' })
  };

  set_postion();
  window.onresize = set_postion;

  setTimeout(function () {
      $('.' + boxname).addClass('show');
  }, 20000);
};
