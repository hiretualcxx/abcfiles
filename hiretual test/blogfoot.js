var parent = document.getElementById("page-container");
var ele1 = document.getElementById("et-main-area").nextSibling;
var pele = document.createElement('div');

 pele.innerHTML =` <style>
 .white-foot-bar {
   width: 100%;
   display: -webkit-flex;
   display: flex;
   justify-content: space-around;
 }
 .white-foot-bar .footer-p {
   padding: 0;
   text-align: center;
   display: -webkit-flex;
   display: flex;
   justify-content: center;
   font-size: 16px !important;
   line-height: 1.5;
   font-weight: 400 !important;
   color: #212529 !important;
 }
 .white-foot-bar .footer-p a {
   font-size: 16px !important;
 }
 .white-foot-bar .foot-left {
   white-space: nowrap;
   flex-wrap: nowrap;
   margin-right: 2%;
 }
 .white-foot-bar .foot-right {
   color: #2768B3 !important;
   flex-wrap: wrap;
 }
 @media screen and (max-width: 1160px) {
   .white-foot-bar .foot-left {
     margin-left: 2%;
   }
 }
 #footer-nav {
   //margin-top: 48px;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: space-between;
   align-items: flex-start;
   width: 100%;
 }
 #myCopyright .et_pb_row {
   width: 100% !important;
 }
 .footer-nav-logo {
   -webkit-filter: brightness(0%) invert(100%);
   -moz-filter: brightness(0%) invert(100%);
   -ms-filter: brightness(0%) invert(100%);
   filter: brightness(0%) invert(100%);
   margin-right: 10px;
   vertical-align: middle;
   margin-bottom: 5px;
   height: 24px;
   width: 24px;
 }
 .over-logo {
   width: 24px;
 }
 .footer-nav-link {
   margin-bottom: 10px;
 }
 .footer-nav-link a {
   font-style: normal !important;
   font-weight: normal !important;
   font-size: 14px !important;
   line-height: 21px !important;
   color: #FFFFFF !important;
   text-decoration: none;
 }
 #company-col {
   margin-left: 5%;
 }
 .footer-nav-col {
   max-width: 257px;
 }
 .company-col-item {
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   align-items: flex-start;
   justify-content: flex-start;
   width: 100%;
 }
 .footer-nav-logo-container {
   flex: 0 10%;
   min-width: 40px;
 }
 .inputemail iframe {
   width: 100%;
   margin-top: 25px;
 }
 #footer-d {
   margin-top: 100px;
   border-top: 2px solid #545659;
   padding-top: 33px;
   display: flex;
   justify-content: space-around;
 }
 .foot-foot {
   color: white !important;
   font-size: 16px !important;
   font-weight: 400 !important;
 }
 #footer-sales {
   margin-top: 47px;
   margin-bottom: 16px;
 }
 .foot-nav-img {
   max-width: 80px !important;
   width: 80px !important;
   height: 80px !important;
 }
 #footer-nav .watchdemo {
   color: #f15b0c !important;
   text-decoration: underline;
   font-weight: 600 !important;
 }
 #footer-nav .watchdemo:hover {
   color: #fff !important;
 }
 #footer-bg {
   padding: 80px 7.63% 80px 3%;
 }
 #footer-bg * {
   text-align: left;
 }
 @media (max-width: 980px) {
   #footer-bg {
     padding: 80px 13%;
   }
 }
 #footer-bg .footer-nav-col-title {
   font-style: normal !important;
   font-weight: bold !important;
   font-size: 16px !important;
   line-height: 24px !important;
   color: #FFFFFF !important;
   margin: 20px 0 15px 0;
 }
 @media (max-width: 980px) {
   #footer-bg #footer-nav {
     flex-wrap: wrap;
   }
   #footer-bg .foot-logo {
     width: 100%;
   }
   #footer-bg .footer-nav-col {
     width: 50%;
     max-width: 100%;
   }
   #footer-bg .footer-nav-col-title {
     margin-top: 67px;
     color: #fff !important;
   }
 }
 @media (max-width: 750px) {
   #footer-bg .foot-nav-img {
     width: 73.6px !important;
     height: 72px !important;
   }
   #footer-bg .footer-nav-col {
     width: 100%;
   }
   #footer-bg .footer-nav-col-title {
     margin: 67px 0 36px;
     font-style: normal !important;
     font-weight: 800 !important;
     font-size: 36px !important;
     line-height: 49px !important;
     text-transform: uppercase !important;
     color: rgba(255, 255, 255, 0.5) !important;
   }
   #footer-bg .footer-nav-link a {
     font-style: normal !important;
     font-weight: normal !important;
     font-size: 30px !important;
     line-height: 41px !important;
     color: #FFFFFF !important;
   }
   #footer-bg .footer-nav-col:nth-child(5) {
     display: none;
   }
   #footer-bg #footer-d {
     display: none;
   }
 }
 #footer-bg #footer-icon-box .icon-title {
   font-weight: 800;
   margin-top: 100px;
   font-size: 36px;
   line-height: 49px;
   text-align: center;
   text-transform: uppercase;
   color: #FFFFFF;
   border-top: 1px solid rgba(255, 255, 255, 0.3);
   padding-top: 67px;
 }
 #footer-bg #footer-icon-box .icon-box {
   margin-top: 36px;
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 #footer-bg #footer-icon-box .icon-box a img {
   width: 40px;
   height: 40px;
 }
 #footer-bg #footer-icon-box .icon-box a:nth-child(1) img {
   height: auto;
   width: 40px;
 }
 @media (min-width: 751px) {
   #footer-bg #footer-icon-box {
     display: none;
   }
 }
 #footer-bg .footer-nav-link.new-fn {
   position: relative;
 }
 #footer-bg .footer-nav-link.new-fn ::after {
   position: absolute;
   content: '';
   background-image: url(https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2021/06/new.png);
   background-size: 100% 100%;
   width: 35px;
   height: 17px;
   right: -9px;
   top: 9px;
 }
 @media (max-width: 980px) {
   #footer-bg .footer-nav-link.new-fn {
     display: inline-block;
   }
   #footer-bg .footer-nav-link.new-fn ::after {
     right: -40px;
     background-image: url(https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2021/06/new-new-logo-2.png);
   }
 }
 @media (max-width: 750px) {
   #footer-bg .footer-nav-link.new-fn ::after {
     top: 10px;
     right: -65px;
     width: 57px;
     height: 25px;
   }
 }
 .et_pb_row_1.et_pb_row {
   padding: 0 !important;
 }
   #footer-bg .foot-foot {
     display: flex;
     align-items: center;
   }
 .inputemail p.inputlable{
             background: url(https://explore.hiretual.com/star) no-repeat center left !important;
     padding-left: 15px !important;
     color: #dcdcdc !important;
     font-size: 13px !important;
     padding: 3px 13px 5px 0;
     width: 200px;
     text-align: left !important;
         }
         .inputemail #emailip{
             border-radius: 5px !important;
     padding: 10px 15px 10px !important;
     border: none;
     outline: none;
     background-color: #fff !important;
     font-size: 16px !important;
     margin-bottom: 0 !important;
     width: 100% !important;
     color: black !important;
     box-sizing: border-box;
     font-weight: 400;
     line-height: 18px;
         }
         .inputemail div #partfromsub{
             background-color: #2F2F30;
     border-radius: 30px !important;
     padding: 10px 20px !important;
     border: 1px solid #FFFFFF;
     box-sizing: border-box;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 21px;
     cursor: pointer;
     color: #FFFFFF;
     margin-top: 20px;
         }
         .inputemail .error{
                 color: #E85741 !important;
     font-size: 14px !important;
             display: none;
         }
   .truep{
             clear: left !important;
     line-height: 1.4em !important;
     margin: 3px 0px !important;
     padding: 3px 0px !important;
     color: #666 !important;
     font-size: 13px !important;
         }
 </style>
 <div style="background-color: #2F2F30;" id="footer-bg">
         <div id="footer-nav">
             <div class="foot-logo">
                 <div>
                     <img class="foot-nav-img" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/09/Hiretual-Horizontal-Logo-Official.svg" alt="Hiretual Logo">
                 </div>
 
             </div>
             <div class="footer-nav-col">
                 <div>
                     <p class="footer-nav-col-title">Company</p>
                 </div>
 
                 <div class="footer-nav-link">
                     <a data-vars-ga-action="click_company about us" href="https://staging-hiretualcom.kinsta.cloud/about-us/" rel="noopener noreferrer">About Us</a>
                 </div>
 
                 <div class="footer-nav-link">
                     <a data-vars-ga-action="click_company careers" href="https://staging-hiretualcom.kinsta.cloud/careers/" rel="noopener noreferrer">Careers</a>
                 </div>
 
 
                 <div class="footer-nav-link">
                     <a data-vars-ga-action="click_company partners" href="https://staging-hiretualcom.kinsta.cloud/partners/" rel="noopener noreferrer">Partners</a>
                 </div>
 
                 <div class="footer-nav-link">
                     <a data-vars-ga-action="click_company api" href="https://staging-hiretualcom.kinsta.cloud/api/" rel="noopener noreferrer">API</a>
                 </div>
             
             <div>
                 <p class="footer-nav-col-title">Product Features</p>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_product sourcing" href="https://staging-hiretualcom.kinsta.cloud/features/sourcing/" rel="noopener noreferrer">Sourcing</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_product engagement" href="https://staging-hiretualcom.kinsta.cloud/features/engagement/" rel="noopener noreferrer">Engagement</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_product diversity & inclusion" href="https://staging-hiretualcom.kinsta.cloud/features/diversity-inclusion/" rel="noopener noreferrer">Diversity & Inclusion</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_product talent fusion" href="https://staging-hiretualcom.kinsta.cloud/features/talent-data-cloud/" rel="noopener noreferrer">Talent Data Cloud</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_product chrome extension" href="https://staging-hiretualcom.kinsta.cloud/features/chrome-extension/" rel="noopener noreferrer">Chrome Extension</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_product market insights" href="https://staging-hiretualcom.kinsta.cloud/features/insights/" rel="noopener noreferrer">Market Insights</a>
             </div>
         </div>
 
         <div class="footer-nav-col">
             <div>
                 <p class="footer-nav-col-title">Resources</p>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_resources e-books" href="https://staging-hiretualcom.kinsta.cloud/resources/content-library/?enterpage=e-books" rel="noopener noreferrer">E-Books</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_resources blogs" href="https://staging-hiretualcom.kinsta.cloud/resources/content-library/?enterpage=blog" rel="noopener noreferrer">Blog</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_resources case studies" href="https://staging-hiretualcom.kinsta.cloud/resources/content-library/?enterpage=case-study" rel="noopener noreferrer">Case Studies</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_resources webinars" href="https://staging-hiretualcom.kinsta.cloud/resources/content-library/?enterpage=webinar" rel="noopener noreferrer">Webinars</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_resources coffee with hiretual" href="https://staging-hiretualcom.kinsta.cloud/resources/coffee-with-hiretual/" rel="noopener noreferrer">Coffee With Hiretual</a>
             </div>
 
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_resources feature release" href="https://staging-hiretualcom.kinsta.cloud/resources/feature-releases/" rel="noopener noreferrer">Feature Releases</a>
             </div>
             <div>
                 <p class="footer-nav-col-title">Solutions</p>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_customer enterprise companies" href="https://staging-hiretualcom.kinsta.cloud/solutions/enterprise/" rel="noopener noreferrer">Enterprise Companies</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_customer small & medium business" href="https://staging-hiretualcom.kinsta.cloud/solutions/small-medium/" rel="noopener noreferrer">Small & Medium Businesses</a>
             </div>
 
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_customer healthcare/non profit" href="https://hiretual.com/solutions/by-type/nonprofits/" rel="noopener noreferrer">Healthcare/Non Profit</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_customer staffing" href="https://hiretual.com/solutions/by-type/search-staffing-agencies/" rel="noopener noreferrer">Staffing</a>
             </div>
         </div>
 
         <div class="footer-nav-col">
             <div>
                 <p class="footer-nav-col-title">Pricing</p>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_pricing pricing" href="https://staging-hiretualcom.kinsta.cloud/new-pricing/" rel="noopener noreferrer">Pricing</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_pricing contact sales" href="https://explore.hiretual.com/contact-sales" rel="noopener noreferrer">Contact Sales</a>
             </div>
             <div>
                 <p class="footer-nav-col-title">Support</p>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_support contact supports" href="mailto:support@hiretual.com" rel="noopener noreferrer">Contact Support</a>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="click_support help center" href="https://help.staging-hiretualcom.kinsta.cloud/en/" rel="noopener noreferrer">Help Center</a>
             </div>
           <div class="footer-nav-link">
                 <a data-vars-ga-action="click_support Accessibility" href="https://staging-hiretualcom.kinsta.cloud/accessibility-statement/" rel="noopener noreferrer">Accessibility</a>
             </div>
             <div>
                 <p class="footer-nav-col-title">Marketplace</p>
             </div>
             <div class="footer-nav-link new-fn">
                 <a data-vars-ga-action="click_marketplace hiretual app" href="https://staging-hiretualcom.kinsta.cloud/apps/" rel="noopener noreferrer">Hiretual App</a>
             </div>
         </div>
         <div class="footer-nav-col">
             <div>
                 <p class="footer-nav-col-title">Subscribe To Our Newsletter</p>
             </div>
             <div class="footer-nav-link">
                 <a data-vars-ga-action="" href="javascript:void(0)" rel="noopener noreferrer">Recruitment strategy tips, guides, videos, and live Q&As delivered right to your inbox. </a>
             </div>
             <div class="inputemail">
               <p class="inputlable">
        Business Email Address
     </p>
     <p class="error">
         Please use a valid work email.
     </p>
     <div>
         <input id="emailip" type="text">
     </div>
     <div>
         <button id="partfromsub">
             SUBSCRIBE
         </button>
     </div>
                 
             </div>
           <iframe style="display:none;" id="fromiframe" src=" " frameborder="0"></iframe>
         </div>
             
         </div>
         <div id="footer-d">
             <div id="foot-foot" class="footer-nav-link foot-foot">
                 <span>Find us on:</span>
             </div>
             <div class="footer-nav-link foot-foot">
                 <img class="footer-nav-logo " src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/fb-icon.svg" alt="Facebook icon" />
                 <a data-vars-ga-action="click_find us on facebook" href="https://www.facebook.com/hiretual/" target="_blank" rel="noopener noreferrer">Facebook</a>
             </div>
             <div class="footer-nav-link foot-foot">
                 <img class="footer-nav-logo" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/g2-icon.svg" alt="G2 Crowd Icon" />
                 <a data-vars-ga-action="click_find us on g2 crowd" href="https://www.g2.com/products/hiretual-hiretual/reviews" target="_blank" rel="noopener noreferrer">G2 Crowd</a>
             </div>
             <div class="footer-nav-link foot-foot">
                 <img class="footer-nav-logo" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/linkedin-icon.svg" alt="Linkedin Icon" />
                 <a data-vars-ga-action="click_find us on linkedin" href="https://www.linkedin.com/company/hiretual" target="_blank" rel="noopener noreferrer">Linkedln</a>
             </div>
             <div class="footer-nav-link foot-foot">
                 <img class="footer-nav-logo " src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/twitter-icon.svg" alt="Twitter icon" />
                 <a data-vars-ga-action="click_find us on twitter" href="https://twitter.com/hiretual" target="_blank" rel="noopener noreferrer">Twitter</a>
             </div>
             <div class="footer-nav-link foot-foot">
                 <img alt="Youtube logo in Black and White" class="footer-nav-logo over-logo" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/09/youtube-brands.svg" />
                 <a data-vars-ga-action="click_find us on youtube" href="https://www.youtube.com/channel/UCuY6mPSYOmHzr3X9oxP9RdQ" target="_blank" rel="noopener noreferrer">Youtube</a>
             </div>
         </div>
 
         <div id="footer-icon-box">
             <div class="icon-title">
                 FIND US AT
             </div>
             <div class="icon-box">
                 <a data-vars-ga-action="click_find us on twitter" href="https://twitter.com/hiretual" alt="Twitter Icon" target="_blank" rel="noopener">
                     <img class="footer-nav-logo " src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/twitter-icon.svg" alt="Twitter icon" />
                 </a>
                 <a data-vars-ga-action="click_find us on facebook " href="https://www.facebook.com/hiretual/" target="_blank" rel="noopener noreferrer">
                     <img class="footer-nav-logo " src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/fb-icon.svg" alt="Facebook icon" />
                 </a>
                 <a data-vars-ga-action="click_find us on youtube" href="https://www.youtube.com/channel/UCuY6mPSYOmHzr3X9oxP9RdQ" target="_blank" rel="noopener noreferrer">
                     <img alt="Youtube logo in Black and White" class="footer-nav-logo over-logo" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/09/youtube-brands.svg" />
                 </a>
                 
                 <a data-vars-ga-action="click_find us on linkedin" href="https://www.linkedin.com/company/hiretual" target="_blank" rel="noopener noreferrer">
                     <img class="footer-nav-logo" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/linkedin-icon.svg" alt="Linkedin Icon" />
                 </a>
                 <a data-vars-ga-action="click_find us on g2 crowd" href="https://www.g2.com/products/hiretual-hiretual/reviews" target="_blank" el="noopener noreferrer" rel="noopener">
                     <img class="footer-nav-logo" src="https://staging-hiretualcom.kinsta.cloud/wp-content/uploads/2020/06/g2-icon.svg" alt="G2 Crowd Icon" />
                 </a>
             </div>
         </div>
     </div>`;
parent.insertBefore(pele,ele1);
var pageHref;
function googleApi() {
  $('#footer-bg #footer-nav .footer-nav-link a').attr('data-vars-ga-label',pageHref);
  $('#footer-bg #footer-nav .footer-nav-link a').attr('data-vars-ga-category','footer');
}
window.addEventListener('load',function(){
  if(window.screen.width <= 750) {
      $('#footer-bg .footer-nav-link').css('margin-top','30px');
  };
  
  pageHref= window.location.href;
  googleApi();
});

$("#partfromsub").click(function(){
      var email=$("#emailip").val()
      if(chkEmail(email)){
        console.log(email)
          document.getElementById("fromiframe").src="https://explore.hiretual.com/l/874171/2021-06-04/9lz2hq/?"+email;
         document.getElementsByClassName("inputemail")[0].innerHTML=`<p class="truep">Keep an eye out on your inbox for fun new content! </p>`
      }else{
          $(".error").css("display","block")
      }
  })
  function chkEmail(strEmail) {
  if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.([com]{2,3})$/.test(strEmail)) {
  return false;
  }
  else {
      if(/^\w[-\w.+]*@(qq|163)\.+com*$/.test(strEmail)){
          return false
      }else{
          return true;
      }
  }
  }

// _________________________________________________________________________________________________________________

