// drop down nav
var banner = document.getElementById("hiretual-banner");
if (banner) {
    var img = new Image();
    img.src = 'https://hiretual.com/wp-content/uploads/2020/12/all-bg.png';
    img.onload = function () { }
    banner.innerHTML = `<div class="blue-header">
    <a target="_blank" href="https://hireez.com/blog/hiretual-announces-rebrand-to-hireez/" class="navbar left-part" rel="noopener">Hiretual, Now hireEZ, Announces $26 Million in Funding to Make Outbound Recruiting Easy.>>Read More
    </a>
    <div class="right-part">
        <!-- <a href="https://hireez.com/new-pricing/" class="text SignUp">Sign Up</a> -->
        <a class="navbar" href="https://app.hiretual.com/login" class="text LogIn">Log In</a>
    </div>
</div>`

    var nav = document.getElementById("hiretual-nav");

    if (nav) {
        nav.innerHTML = `<div class="key-header-index">
        <header id="main-header" class="com-header-wrapper">
        <div class="menu-container ">
            <div class="logo-container">
                <a class="navbar" href="https://hireez.com/">
                    <img width="90" height="24" src="https://hireez.com/wp-content/uploads/2022/01/hireEZ-white-yellow-logo.png" alt="AI Sourcing Tools (Source 10X Faster) | hireEZ"
                        id="logo">
                </a>
            </div>
            <div class="menu-all">
                <nav id="top-menu-nav" class="nav-container">
                    <!-- pc -->
                    <ul id="top-menu" class="nav pc-nav">
    
                        <li id="" class="menu-item  menu-item-has-children">
                            <a class="navbar" href="#" style="pointer-events: none;">Solution
                                <span>
                                    <img src="https://hireez.com/wp-content/uploads/2022/01/Arrow-white.png" alt="Arrow pointing down">
                                </span>
                            </a>
                            <ul class="sub-menu first-sub-menu">
                                <ul class="left-part">
                                    <li class="left-item on">
                                        <a href="https://hireez.com/ez-sourcing/"  title="" class="navbar sub-title-wrap">
                                            <div class="sub-title">
                                                <img src="https://hireez.com/wp-content/uploads/header/ez-logo.png" alt="" class="ez-logo">
                                                <div class="text">Sourcing</div>
                                            </div>
                                            <div class="sub-intro">Unleash Access to Untapped Talent Pools</div>
                                        </a>
                                    </li>
                                    <li class="left-item">
                                        <a href="https://hireez.com/ez-engagement/"  title="" class="navbar sub-title-wrap">
                                            <div class="sub-title">
                                                <img src="https://hireez.com/wp-content/uploads/header/ez-logo.png" alt="" class="ez-logo">
                                                <div class="text">Engagement</div>
                                            </div>
                                            <div class="sub-intro">Direct and Scalable Candidate Engagement & Interview Scheduling</div>
                                        </a>
                                    </li>
                                    <li class="left-item">
                                        <a href="https://hireez.com/ez-integration/"  title="" class="navbar sub-title-wrap">
                                            <div class="sub-title">
                                                <img src="https://hireez.com/wp-content/uploads/header/ez-logo.png" alt="" class="ez-logo">
                                                <div class="text">Integration</div>
                                            </div>
                                            <div class="sub-intro">Seamlessly Integrated With Your Tech Stack</div>
                                        </a>
                                    </li>
                                    <li class="left-item">
                                        <a href="https://hireez.com/ez-security-compliance/" title="" class="navbar sub-title-wrap">
                                            <div class="sub-title">
                                                <img src="https://hireez.com/wp-content/uploads/header/ez-logo.png" alt="" class="ez-logo">
                                                <div class="text">Security & Compliance</div>
                                            </div>
                                            <div class="sub-intro">Comprehensive Data Protection for Your Critical Information</div>
                                        </a>
                                    </li>
                                    <li class="left-item">
                                        <a href="https://hireez.com/ez-collaboration/"  title="" class="navbar sub-title-wrap">
                                            <div class="sub-title">
                                                <img src="https://hireez.com/wp-content/uploads/header/ez-logo.png" alt="" class="ez-logo">
                                                <div class="text">Collaboration</div>
                                            </div>
                                            <div class="sub-intro">Access a Centralized Workspace to Collaborate With and Manage Your Recruiting Teams</div>
                                        </a>
                                    </li>
    
                                </ul>
                                <div class="right-part">
                                    <!-- EZ Sourcing -->
                                    <div class="sub-menu-cont show">
                                        <a href="https://hireez.com/ez-sourcing/" class="navbar group-link">
                                            <span class="group-txt">EZ Sourcing</span>
                                            <span class="group-arrow"></span>
                                        </a>
                                        <div class="sub-link-wrap">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/ai-sourcing/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/sourcing-icon.png??" alt="Sourcing icon">
                                                </div>
                                                <div class="txt">AI Sourcing</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/diversity-inclusion/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/diversity-icon.png??" alt="Diversity icon">
                                                </div>
                                                <div class="txt">Diversity, Equity & Inclusion</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/talent-maps/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/maps-icon.png??" alt="Talent Maps icon">
                                                </div>
                                                <div class="txt">Talent Maps</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/talent-data-cloud/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/ats-icon.png??" alt="ATS Rediscovery icon">
                                                </div>
                                                <div class="txt">ATS Rediscovery</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/chrome-extension/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/chrome-icon.png??" alt="Chrome icon">
                                                </div>
                                                <div class="txt">Chrome Extension</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/boolean-builder/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/boolean-icon.png??" alt="Boolean icon">
                                                </div>
                                                <div class="txt">Boolean Builder</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- EZ Engagement -->
                                    <div class="sub-menu-cont">
                                        <a href="https://hireez.com/ez-engagement/" class="navbar group-link">
                                            <span class="group-txt">EZ Engagement</span>
                                            <span class="group-arrow"></span>
                                        </a>
                                        <div class="sub-link-wrap">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/engagement/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/engagement-icon.png??" alt="Engagement icon">
                                                </div>
                                                <div class="txt">Engagement</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/scheduling/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/scheduling-icon-1.png??" alt="Scheduling icon">
                                                </div>
                                                <div class="txt">Scheduling</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- EZ Integration -->
                                    <div class="sub-menu-cont">
                                        <a href="https://hireez.com/ez-integration/" class="navbar group-link">
                                            <span class="group-txt">EZ Integration</span>
                                            <span class="group-arrow"></span>
                                        </a>
                                        <div class="sub-link-wrap">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/talent-data-cloud/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/talentdata-icon.png?" alt="Cloud icon">
                                                </div>
                                                <div class="txt">Talent Data Cloud</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/integrations/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/apps-icon.png??" alt="Apps and APIs icon">
                                                </div>
                                                <div class="txt">Apps and APIs</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- EZ Security & Compliance -->
                                    <div class="sub-menu-cont">
                                        <a href="https://hireez.com/ez-security-compliance/" class="navbar group-link">
                                            <span class="group-txt">EZ Security & Compliance</span>
                                            <span class="group-arrow"></span>
                                        </a>
                                        <div class="sub-link-wrap">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/security-compliance/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/privacy-icon.png??" alt="Privacy & Compliance icon">
                                                </div>
                                                <div class="txt">Privacy & Compliance</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/security-compliance/?enter=security">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/security-icon-1.png??" alt="Security & Certificates icon">
                                                </div>
                                                <div class="txt">Security & Certificates</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/security-compliance/?enter=sso">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/sso-icon.png??" alt="sso icon">
                                                </div>
                                                <div class="txt">SSO / Two-factor Authentication</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- EZ Collaboration -->
                                    <div class="sub-menu-cont">
                                        <a href="https://hireez.com/ez-collaboration/" class="navbar group-link">
                                            <span class="group-txt">EZ Collaboration</span>
                                            <span class="group-arrow"></span>
                                        </a>
                                        <div class="sub-link-wrap">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/hiring-teams/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/hiring-icon.png??" alt="Hiring team icon">
                                                </div>
                                                <div class="txt">Hiring team</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/administration/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/admin-icon.png??" alt="Administration icon">
                                                </div>
                                                <div class="txt">Administration</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li id="" class="menu-item">
                            <a class="navbar" href="https://hireez.com/why-hireez/" aria-current="page" role="button" state="aria-expanded" expanded="false">Why hireEZ?</a>
                        </li>
                        <li id="" class="menu-item menu-item-has-children resources-item">
                            <a href="#" style="pointer-events: none;" role="button" state="aria-expanded" expanded="false">Resources
                                <span>
                                    <img src="https://hireez.com/wp-content/uploads/2022/01/Arrow-white.png" alt="Arrow pointing down">
                                </span>
                            </a>
                            <ul class="sub-menu second-sub-menu">
                                <li id="" class="menu-item">
                                    <a class="navbar" href="https://hireez.com/resources/content-library/">
                                        <div class="submenu-item submenu-item-content-library">
                                            <img class="submenu-item-img" src="https://hireez.com/wp-content/uploads/header/library-icon.svg" alt="Library icon">
                                            <div class="submenu-item-title">
                                                <div class="title">Content Library</div>
                                                <span> Tips, trends and guides for recruiters </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li id="" class="menu-item">
                                    <a class="navbar" href="https://hireez.com/resources/feature-releases/">
                                        <div class="submenu-item submenu-item-feature-releases">
                                            <img class="submenu-item-img" src="https://hireez.com/wp-content/uploads/header/feature-icon.svg" alt="New features icon">
                                            <div class="submenu-item-title">
                                                <div class="title">Feature Releases</div>
                                                <span> Stay updated with what's new on hireEZ </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li id="" class="menu-item menu-item-report">
                                    <a class="navbar" href="https://explore.hireez.com/2022-recruitment-trends">
                                        <div class="submenu-item submenu-item-2021-Recruitment">
                                            <div class="submenu-item-title">
                                                <div class="title">New Report
                                                    <img class="submenu-item-img" src="https://hireez.com/wp-content/uploads/header/popular.png" alt="Popular icon"> </div>
                                                <span style="max-width:150px;">Map out 2022 recruitment trends</span>
                                                <p class="linka"> Download Now > </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
    
                        <li id="" class="menu-item menu-item-has-children">
                            <a href="#" style="pointer-events: none;" role="button" state="aria-expanded" expanded="false">Company
                                <span>
                                    <img src="https://hireez.com/wp-content/uploads/2022/01/Arrow-white.png" alt="Arrow pointing down">
                                </span>
                            </a>
                            <ul class="sub-menu third-sub-menu">
                                <li id="" class="menu-item">
                                    <a class="navbar" href="https://hireez.com/about-us">
                                        <div class="submenu-item submenu-item-about-us">
                                            <div class="submenu-item-title">
                                                <div class="title">About Us</div>
                                                <span> Our values, mission and commitment to recruiters </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li id="" class="menu-item">
                                    <a class="navbar" href="https://hireez.com/careers">
                                        <div class="submenu-item submenu-item-Careers">
                                            <div class="submenu-item-title">
                                                <div class="title">Careers</div>
                                                <span> Be a part of our team! </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li id="" class="menu-item">
                                    <a class="navbar" href="https://hireez.com/newsroom/">
                                        <div class="submenu-item submenu-item-newsroom">
                                            <div class="submenu-item-title">
                                                <div class="title">Newsroom</div>
                                                <span> Big announcements you don't want to miss </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- <li id="" class="menu-item">
                                    <a href="https://hireez.com/solutions/security-compliance/">
                                        <div class="submenu-item submenu-item-security">
                                            <div class="submenu-item-title">
                                                <div class="title">Security</div>
                                                <span>Information Security and Compliance </span>
                                            </div>
                                        </div>
                                    </a>
                                </li> -->
                            </ul>
                        </li>
                        <li id="" class="menu-item no-mr">
                            <a class="navbar" href="https://hireez.com/new-pricing/" aria-current="page" role="button" state="aria-expanded" expanded="false">Pricing</a>
                        </li>
                        <li id="" class="menu-item menu-item-btn">
                            <a class="navbar btn" target="_blank" rel="noopener" href="https://explore.hireez.com/l/874171/2021-01-04/91r2pk">CONTACT SALES</a>
                        </li>
                    </ul>
                    <!-- pc -->
                </nav>
                <!-- mobile -->
                <div class="mobile-menu" style="display:none;">
                    <div class="icon-menu-wrap">
                        <span class="icon"></span>
                    </div>
                    <ul class="mobile-ul appear">
                        <li class="m-menu-item">
                            <a href="javascript:;" class="navbar menu-link">
                                Solution
                                <span class="icon-arrow"></span>
                            </a>
                            <ul class="sub-menu-ul first-sub-menu-ul">
                                <li class="sub-item">
                                    <!-- Sourcing -->
                                    <div class="sub-container">
                                        <a href="https://hireez.com/ez-sourcing/" class="navbar sub-title">EZ Sourcing</a>
                                        <div class="sub-cont">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/ai-sourcing/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/sourcing-icon.png??" alt="Sourcing icon">
                                                </div>
                                                <div class="txt">AI Sourcing</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/diversity-inclusion/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/diversity-icon.png??" alt="Diversity icon">
                                                </div>
                                                <div class="txt">Diversity, Equity, & Inclusion</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/talent-maps/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/maps-icon.png??" alt="Talent Maps icon">
                                                </div>
                                                <div class="txt">Talent Maps</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/talent-data-cloud/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/ats-icon.png??" alt="ATS Rediscovery icon">
                                                </div>
                                                <div class="txt">ATS Rediscovery</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/chrome-extension/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/chrome-icon.png??" alt="Chrome icon">
                                                </div>
                                                <div class="txt">Chrome Extension</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/boolean-builder/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/boolean-icon.png??" alt="boolean icon">
                                                </div>
                                                <div class="txt">Boolean Builder</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Engagement -->
                                    <div class="sub-container">
                                        <a href="https://hireez.com/ez-engagement/" class="navbar sub-title">EZ Engagement</a>
                                        <div class="sub-cont">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/engagement/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/engagement-icon.png??" alt="engagement icon">
                                                </div>
                                                <div class="txt">Engagement</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/scheduling/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/scheduling-icon-1.png??" alt="scheduling icon">
                                                </div>
                                                <div class="txt">Scheduling</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Integration -->
                                    <div class="sub-container">
                                        <a href="https://hireez.com/ez-integration/" class="navbar sub-title">EZ Integration</a>
                                        <div class="sub-cont">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/talent-data-cloud/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/talentdata-icon.png" alt="Talent Data Cloud icon">
                                                </div>
                                                <div class="txt">Talent Data Cloud</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/integrations/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/apps-icon.png??" alt="Apps and APIs icon">
                                                </div>
                                                <div class="txt">Apps and APIs</div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Security & Compliance -->
                                    <div class="sub-container">
                                        <a href="https://hireez.com/ez-security-compliance/" class="navbar sub-title">EZ Security & Compliance</a>
                                        <div class="sub-cont">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/security-compliance/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/privacy-icon.png??" alt="Privacy & Compliances icon">
                                                </div>
                                                <div class="txt">Privacy & Compliances</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/security-compliance/?enter=security">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/security-icon-1.png??" alt="Security & Certificates icon">
                                                </div>
                                                <div class="txt">Security & Certificates</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/security-compliance/?enter=sso">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/sso-icon.png??" alt="sso icon">
                                                </div>
                                                <div class="txt">SSO / Two-factor Authentication</div>
                                            </a>
                                        </div>
                                    </div>
    
                                    <!-- Collaboration -->
                                    <div class="sub-container">
                                        <a href="https://hireez.com/ez-collaboration/" class="navbar sub-title">EZ Collaboration</a>
                                        <div class="sub-cont">
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/hiring-teams/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/hiring-icon.png??" alt="Hiring team icon">
                                                </div>
                                                <div class="txt">Hiring team</div>
                                            </a>
                                            <a class="navbar sub-link" href="https://hireez.com/solutions/administration/">
                                                <div class="icon-wrap">
                                                    <img class="submenu-icon" src="https://hireez.com/wp-content/uploads/header/admin-icon.png??" alt="Administration icon">
                                                </div>
                                                <div class="txt">Administration</div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <!-- <li class="sub-item">
                                    <a href="https://hireez.com/solutions/" class="btn-see">
                                        <div>
                                            <span>See All Features</span>
                                            <img class="img" src="https://hireez.com/wp-content/uploads/header/blue-jt.svg" alt="
                                                        Blue arrow pointing right icon">
                                        </div>
                                    </a>
                                </li> -->
                            </ul>
                        </li>
                        <li class="m-menu-item">
                            <a href="https://hireez.com/why-hireez/" class="navbar menu-link">
                                Why hireEZ?
                            </a>
                        </li>
                        <li class="m-menu-item menu-item-has-children">
                            <a href="#" class="menu-link">
                                Resources
                                <span class="icon-arrow"></span>
                            </a>
                            <ul class="sub-menu-ul">
                                <li class="sub-item">
                                    <a href="https://hireez.com/resources/content-library/" class="navbar sub-link">Content Library</a>
                                </li>
                                <li class="sub-item">
                                    <a href="https://hireez.com/resources/feature-releases/" class="navbar sub-link">Feature Releases </a>
                                </li>
                                <li class="sub-item">
                                    <a href="https://explore.hireez.com/2022-recruitment-trends" class="navbar sub-link">Map out 2022 recruitment trends</a>
                                </li>
                            </ul>
                        </li>
    
                        <li class="m-menu-item menu-item-has-children">
                            <a href="#" class="menu-link">
                                Company
                                <span class="icon-arrow"></span>
                            </a>
                            <ul class="sub-menu-ul">
                                <li class="sub-item">
                                    <a href="https://hireez.com/about-us" class="navbar sub-link">About Us</a>
                                </li>
                                <li class="sub-item">
                                    <a href="https://hireez.com/careers" class="navbar sub-link">Careers</a>
                                </li>
                                <li class="sub-item">
                                    <a href="https://hireez.com/newsroom/" class="navbar sub-link">Newsroom</a>
                                </li>
                                <!-- <li class="sub-item">
                                    <a href="https://hireez.com/solutions/security-compliance/" class="sub-link">Security</a>
                                </li> -->
                            </ul>
                        </li>
                        <li class="m-menu-item">
                            <a href="https://hireez.com/new-pricing/" class="navbar menu-link">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- mobile -->
            </div>
        </div>
    
    </header>
    </div>`;
    }
}
// drop down nav end

// black foot
var foot = document.getElementById("hiretual-foot");
if (foot) {
    foot.innerHTML = `<div style="background-color: #0F1114;" id="footer-bg">
    <div id="footer-nav">
        <div class="foot-logo">
            <div>
                <img class="foot-nav-img" width="80" height="80" src="https://hireez.com/wp-content/uploads/2022/01/hireEZ-white-yellow-logo.png"
                    alt="hireEZ Logo">
            </div>

        </div>
        <div class="footer-nav-col">
            <div>
                <p class="footer-nav-col-title">Get started</p>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_get started Sign In" href="https://app.hiretual.com/login" rel="noopener noreferrer">Sign In</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_get started Free Trial" href="https://app.hiretual.com/signup/professional" rel="noopener noreferrer">Free Trial</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_get started Sign In" href="https://hireez.com/new-pricing/" rel="noopener noreferrer">Pricing</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_get started Free Trial" href="https://explore.hireez.com/contact-sales" rel="noopener noreferrer">Contact Sales</a>
            </div>


        </div>

        <div class="footer-nav-col">
            <div>
                <p class="footer-nav-col-title">Solution</p>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_solution EZ Sourcing" href="https://hireez.com/ez-sourcing/" rel="noopener noreferrer">EZ Sourcing</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_solution EZ Engagement" href="https://hireez.com/ez-engagement/" rel="noopener noreferrer">EZ Engagement</a>
            </div>
            <div class="footer-nav-link">
                <a data-vars-ga-action="click_solution EZ Integration" href="https://hireez.com/ez-integration/" rel="noopener noreferrer">EZ Integration</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_solution EZ Security & Compliance" href="https://hireez.com/ez-security-compliance/" rel="noopener noreferrer">EZ Security & Compliance</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_solution EZ collaboration" href="https://hireez.com/ez-collaboration/" rel="noopener noreferrer">EZ Collaboration</a>
            </div>



        </div>

        <div class="footer-nav-col">
            <div>
                <p class="footer-nav-col-title">Company</p>
            </div>

            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_company about us" href="https://hireez.com/about-us/" rel="noopener noreferrer">About Us</a>
            </div>

            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_company careers" href="https://hireez.com/careers/" rel="noopener noreferrer">Careers</a>
            </div>


            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_company partners" href="https://hireez.com/partners/" rel="noopener noreferrer">Partners</a>
            </div>

            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_company newsroom" href="https://hireez.com/newsroom/" rel="noopener noreferrer">Newsroom</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_company api" href="https://hireez.com/api/" rel="noopener noreferrer">API</a>
            </div>
        </div>
        <div class="footer-nav-col">
            <div>
                <p class="footer-nav-col-title">Resources</p>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_resources e-books" href="https://hireez.com/resources/content-library/?enterpage=e-books" rel="noopener noreferrer">eBooks</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_resources blogs" href="https://hireez.com/resources/content-library/?enterpage=blog" rel="noopener noreferrer">Blog</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_resources webinars" href="https://hireez.com/resources/content-library/?enterpage=webinar"
                    rel="noopener noreferrer">Webinars</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_resources case study" href="https://hireez.com/resources/content-library/?enterpage=case-study"
                    rel="noopener noreferrer">Case Study</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_resources feature releases" href="https://hireez.com/resources/feature-releases/" rel="noopener noreferrer">Feature Releases</a>
            </div>
        </div>
        <div class="footer-nav-col">
            <div>
                <p class="footer-nav-col-title">Support</p>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_support contact supports" href="mailto:support@hireez.com" rel="noopener noreferrer">Contact Support</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_support help center" href="https://hireez.zendesk.com/hc/en-us" rel="noopener noreferrer">Help Center</a>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="click_support Accessibility" href="https://hireez.com/accessibility-statement/" rel="noopener noreferrer">Accessibility</a>
            </div>
        </div>

        <div class="footer-nav-col">
            <div>
                <p class="footer-nav-col-title">Subscribe To Our Newsletter</p>
            </div>
            <div class="footer-nav-link">
                <a class="footer-link" data-vars-ga-action="" href="javascript:void(0)" rel="noopener noreferrer">Recruitment strategy tips, guides, videos, and live Q&As delivered right to your inbox. </a>
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
        <a id="foot-foot" href="https://hireez.com/" title="" class="footer-link footer-nav-link home-link">
            <img src="https://hireez.com/wp-content/uploads/2022/01/hireEZ-white-yellow-logo.png" alt="">
        </a>
        <div class="third-link-wrap foot-foot">
            <div class="footer-nav-link foot-foot">
                <a class="footer-link" data-vars-ga-action="click_find us on linkedin" href="https://www.linkedin.com/company/hireez/" target="_blank" rel="noopener noreferrer">
                    <img class="footer-nav-logo" width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/in-icon.png" alt="Linkedin Icon"/>
                    <div class="box-tooltip">
                        <div class="tooltip-text">Linkedln</div>
                    </div>
                </a>
            </div>

            <div class="footer-nav-link foot-foot">

                <a class="footer-link" data-vars-ga-action="click_find us on g2 crowd" href="https://www.g2.com/products/hiretual-hiretual/reviews" target="_blank" rel="noopener noreferrer">
                    <img class="footer-nav-logo" width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/g2-icon.png" alt="G2 Crowd Icon"/>
                    <div class="box-tooltip">
                        <div class="tooltip-text">G2 Crowd</div>
                    </div>
                </a>
            </div>
            <div class="footer-nav-link foot-foot">
                <a class="footer-link" title="Facebook" data-vars-ga-action="click_find us on facebook" href="https://www.facebook.com/hireEZ/" target="_blank"
                    rel="noopener noreferrer">
                    <img class="footer-nav-logo " width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/facebook-icon.png"
                        alt="Facebook icon" />
                    <div class="box-tooltip">
                        <div class="tooltip-text">Facebook</div>
                    </div>
                </a>
            </div>
            <div class="footer-nav-link foot-foot">

                <a class="footer-link" data-vars-ga-action="click_find us on twitter" href="https://twitter.com/hire_ez" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" class="footer-nav-logo " src="https://hireez.com/wp-content/uploads/footer/twitter-icon.png"
                        alt="Twitter icon" />
                    <div class="box-tooltip">
                        <div class="tooltip-text">Twitter</div>
                    </div>
                </a>
            </div>
            <div class="footer-nav-link foot-foot">

                <a class="footer-link" data-vars-ga-action="click_find us on Instagram" href="https://www.instagram.com/hire_ez/" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" class="footer-nav-logo " src="https://hireez.com/wp-content/uploads/footer/ins-icon.png" alt="Twitter icon"/>
                    <div class="box-tooltip">
                        <div class="tooltip-text">Instagram</div>
                    </div>
                </a>
            </div>
            <div class="footer-nav-link foot-foot">

                <a class="footer-link" data-vars-ga-action="click_find us on youtube" href="https://www.youtube.com/channel/UCuY6mPSYOmHzr3X9oxP9RdQ" target="_blank" rel="noopener noreferrer">

                    <img alt="Youtube logo in Black and White" class="footer-nav-logo over-logo" src="https://hireez.com/wp-content/uploads/footer/tube-icon.png"/>
                    <div class="box-tooltip">
                        <div class="tooltip-text">YouTube</div>
                    </div>
                </a>
            </div>
        </div>
    </div>



    <div id="footer-icon-box">
        <div class="icon-title">
            FIND US AT
        </div>
        <div class="icon-box">
            <a class="footer-link" data-vars-ga-action="click_find us on linkedin" href="https://www.linkedin.com/company/hireez/" target="_blank" rel="noopener noreferrer">
                <img class="footer-nav-logo" width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/in-icon.png" alt="Linkedin Icon"/>
            </a>
            <a class="footer-link" data-vars-ga-action="click_find us on g2 crowd" href="https://www.g2.com/products/hiretual-hiretual/reviews" target="_blank"
                el="noopener noreferrer" rel="noopener">
                <img class="footer-nav-logo" width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/g2-icon.png" alt="G2 Crowd Icon"/>
            </a>
            <a class="footer-link" data-vars-ga-action="click_find us on facebook " href="https://www.facebook.com/hireEZ/" target="_blank" rel="noopener noreferrer">
                <img class="footer-nav-logo " width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/facebook-icon.png"
                    alt="Facebook icon" />
            </a>
            <a class="footer-link" data-vars-ga-action="click_find us on twitter" href="https://twitter.com/hire_ez" alt="Twitter Icon" target="_blank" rel="noopener">
                <img width="40" height="32" class="footer-nav-logo " src="https://hireez.com/wp-content/uploads/footer/twitter-icon.png"
                    alt="Twitter icon" />
            </a>
            <a class="footer-link" data-vars-ga-action="click_find us on Instagram" href="https://www.instagram.com/hire_ez/" target="_blank" el="noopener noreferrer" rel="noopener">
                <img class="footer-nav-logo" width="24" height="24" src="https://hireez.com/wp-content/uploads/footer/ins-icon.png" alt="Instagram Icon"/>
            </a>
            <a class="footer-link" data-vars-ga-action="click_find us on youtube" href="https://www.youtube.com/channel/UCuY6mPSYOmHzr3X9oxP9RdQ" target="_blank" rel="noopener noreferrer">
                <img alt="Youtube logo in Black and White" width="24" height="24" class="footer-nav-logo over-logo" src="https://hireez.com/wp-content/uploads/footer/tube-icon.png"/>
            </a>
        </div>
    </div>
</div>`;
};

// black foot end

//White background footer2
var foot_div = document.createElement("div");
foot_div.setAttribute('class', 'foot2');
foot_div.innerHTML = `<div class="foot2-left">
     <p class="foot2-copyright">  Copyright © hireEZ 2022. All Rights Reserved </p>
 </div><div class="foot2-right"><p class="foot2-terms"><a href="https://hiretual.com/google-api-disclosure/">Google API Disclosure </a> &nbsp|&nbsp <a href="https://app.hiretual.com/policies/termsofservice"> Terms of
             Use </a> &nbsp| &nbsp<a href="https://app.hiretual.com/policies/generalpolicy"> Privacy
             Policy </a> &nbsp|&nbsp <a href="https://hireteammate.com/gdpr/faqs"> GDPR FAQ </a> &nbsp|&nbsp;<a href="https://hiretual.com/CCPA/">Do Not Sell My Personal Info </a>&nbsp;|&nbsp;<a href="https://app.hiretual.com/optout">Opt Out </a></p>
 </div>`;
document.body.appendChild(foot_div);

// top指的是顶级的窗口。self指的是当前的窗口
// if (self != top) {    
//      self.document.body.innerHTML=``;
// }

(function(){
    $(".first-sub-menu .left-item").mouseover(function () {
        var $this = $(this);
        var index = $this.index();
        $this.addClass("on").siblings().removeClass("on");
        $(".sub-menu-cont").eq(index).addClass("show").siblings().removeClass("show");
    }).mouseout(function () {
    });
})()
// 修改表单字段ID
function addID(name) {
    if (document.querySelectorAll("." + name + " input")[0] != undefined) {
        document.querySelectorAll("." + name + " input")[0].id = name
    }
}
var idArr = ["website", "industry", "email", "jobtitle", "numberofemployees", "company", "address", "mobilephone"]
for (var i = 0; i < idArr.length; i++) {
    addID(idArr[i])
}

// professional msg
function createIfarme(firstname,company) {
    var i = document.createElement('iframe');
    i.style.width = '0';
    i.style.height = '0';
    i.style.body = 0;
    i.style.margin = 0;
    i.style.padding = 0;
    i.style.border = 0;
    i.style.opacity = 0;
    i.style.position = 'absolute';
    i.id = "cIfarme1";
    i.src = `https://hiretual.com/new-pricing/professional/?firstname=${firstname}&company=${company}`;
    document.body.appendChild(i);
}

// set cookie
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname + "=" + cvalue + "; " + expires + ";" + `domain=hiretual.com`;
// }
document.querySelectorAll('#pardot-form input').forEach((i)=>i.addEventListener('change', function () {
    let keyDataPardot = JSON.parse(window.localStorage.getItem('dataPardot'));
    let firstname = $('#pardot-form .first_name input').val() || keyDataPardot.FirstName, lastname = $('#pardot-form .last_name input').val() || keyDataPardot.LastName, company = $('#pardot-form .company input').val() || keyDataPardot.CompanyName;
    if (firstname && company) {
        if (document.getElementById('cIfarme1')) {
            document.getElementById('cIfarme1').setAttribute('src',`https://hiretual.com/new-pricing/professional/?firstname=${firstname}&company=${company}`)
        } else {
            createIfarme(firstname,company)
        }
    } else {
        console.error('parameter error')
    }
}));
// End professional msg
