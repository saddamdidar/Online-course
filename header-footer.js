const headerHTML = `<header class="it-header-height">
      <!-- header-area-start -->
      <div id="header-sticky" class="it-header-area it-header-transparent">
         <div class="container">
            <div class="it-header-style-2">
               <div class="row align-items-center">
                  <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-5 col-6">
                     <div class="it-header-logo">
                        <a href="index.html"><img src="assets/img/logo/logo-black-2.png" alt=""></a>
                     </div>
                  </div>
                  <div class="col-xxl-6 col-xl-7 d-none d-xl-block">
                     <div class="it-header-menu it-header-dropdown">
                        <nav class="it-menu-content">
                           <ul>

                              <li class="p-static">
                                 <a href="index.html">Home</a>                            
                               </li>

                               <li class="p-static">
                                 <a href="about-us-v1.html">About Us</a>                            
                               </li>

                               <li class="p-static">
                                 <a href="team.html">Our Team</a>                            
                               </li>

                               <li class="p-static">
                                 <a href="price.html">Pricing</a>                            
                               </li>

                               <li class="p-static">
                                 <a href="courses-with-filter.html">Courses</a>                            
                               </li>
                            </ul>
                        </nav>
                     </div>
                  </div>
                  <div class="col-xxl-4 col-xl-3 col-lg-8 col-md-7 col-6">
                     <div class="it-header-right-action d-flex justify-content-end align-items-center">
                        <div class="it-header-search-2 d-none d-md-block">
                           
                           <button class="search-box-outer">
                              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 13.6469C0 10.0275 1.43772 6.55637 3.99689 3.99708C6.55605 1.43779 10.027 0 13.6462 0C17.2654 0 20.7364 1.43779 23.2956 3.99708C25.8547 6.55637 27.2925 10.0275 27.2925 13.6469C27.2925 17.2663 25.8547 20.7374 23.2956 23.2967C20.7364 25.856 17.2654 27.2938 13.6462 27.2938C10.027 27.2938 6.55605 25.856 3.99689 23.2967C1.43772 20.7374 0 17.2663 0 13.6469ZM13.6462 2.21301C10.6139 2.21301 7.70581 3.41765 5.56164 5.56192C3.41748 7.70619 2.2129 10.6144 2.2129 13.6469C2.2129 16.6794 3.41748 19.5876 5.56164 21.7319C7.70581 23.8761 10.6139 25.0808 13.6462 25.0808C16.6785 25.0808 19.5866 23.8761 21.7308 21.7319C23.875 19.5876 25.0796 16.6794 25.0796 13.6469C25.0796 10.6144 23.875 7.70619 21.7308 5.56192C19.5866 3.41765 16.6785 2.21301 13.6462 2.21301Z" fill="#6C757D" />
                                 <path d="M8.6908 7.95356C9.341 7.30206 10.1135 6.78539 10.9639 6.43322C11.8142 6.08104 12.7258 5.9003 13.6462 5.90136C15.5803 5.90136 17.3344 6.68624 18.6017 7.95356C18.7971 8.16332 18.9035 8.44075 18.8984 8.72741C18.8934 9.01407 18.7773 9.28758 18.5745 9.49031C18.3718 9.69304 18.0983 9.80916 17.8117 9.81422C17.525 9.81928 17.2476 9.71287 17.0379 9.51742C16.593 9.07147 16.0643 8.71793 15.4822 8.47713C14.9001 8.23634 14.2761 8.11305 13.6462 8.11437C12.3214 8.11437 11.1235 8.64992 10.2561 9.5189C10.0463 9.71435 9.7689 9.82075 9.48225 9.8157C9.1956 9.81064 8.92211 9.69451 8.71939 9.49178C8.51667 9.28905 8.40055 9.01554 8.39549 8.72888C8.39043 8.44222 8.49683 8.16479 8.69228 7.95503L8.6908 7.95356ZM21.8782 21.8793C21.981 21.7765 22.103 21.6949 22.2373 21.6393C22.3716 21.5836 22.5155 21.555 22.6609 21.555C22.8062 21.555 22.9501 21.5836 23.0844 21.6393C23.2187 21.6949 23.3407 21.7765 23.4435 21.8793L29.703 28.1392C29.8985 28.3489 30.0049 28.6264 29.9998 28.913C29.9948 29.1997 29.8786 29.4732 29.6759 29.6759C29.4732 29.8786 29.1997 29.9948 28.9131 29.9998C28.6264 30.0049 28.349 29.8985 28.1393 29.703L21.8797 23.4446C21.6725 23.2372 21.5561 22.9559 21.5561 22.6627C21.5561 22.3695 21.6725 22.0882 21.8797 21.8808L21.8782 21.8793Z" fill="#6C757D" />
                              </svg>
                           </button>
                        </div>
                        <div class="it-header-login d-none d-xxl-block">
                           <a href="sign-in.html">Login</a>
                           <span>/</span>
                           <a href="sign-up.html">Register</a>
                        </div>
                        <a href="courses-with-filter.html" class="it-btn-yellow d-none d-xl-flex">
                           <span>
                              <span class="text-1">Apply Now</span>
                              <span class="text-2">Apply Now</span>
                           </span>
                           <i>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                              </svg>
                           </i>
                        </a>
                        <div class="it-header-bar d-xl-none">
                           <button class="it-menu-bar">
                              <span>
                                 <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                       d="M10 18.3333C10 17.4128 10.7462 16.6667 11.6667 16.6667H21.6667C22.5872 16.6667 23.3333 17.4128 23.3333 18.3333C23.3333 19.2538 22.5872 20 21.6667 20H11.6667C10.7462 20 10 19.2538 10 18.3333ZM0 1.66667C0 0.746183 0.746183 0 1.66667 0H21.6667C22.5872 0 23.3333 0.746183 23.3333 1.66667C23.3333 2.58713 22.5872 3.33333 21.6667 3.33333H1.66667C0.746183 3.33333 0 2.58713 0 1.66667ZM0 10C0 9.07953 0.746183 8.33333 1.66667 8.33333H21.6667C22.5872 8.33333 23.3333 9.07953 23.3333 10C23.3333 10.9205 22.5872 11.6667 21.6667 11.6667H1.66667C0.746183 11.6667 0 10.9205 0 10Z"
                                       fill="currentcolor" />
                                 </svg>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- header-area-end -->

   </header>`



const footerHTML = `<footer>
      
   <!-- footer-area-start -->
   <section class="it-footer-wrap gray-bg it-footer-style-2 fix">
      <div class="it-footer-area z-index-1 pt-200 pb-50" data-background="assets/img/shape/footer-bg-2-1.jpg">
         <img class="it-footer-shape-1" src="assets/img/shape/footer-2-1.png" alt="">
         <img class="it-footer-shape-2" data-parallax='{"y": -200, "smoothness": 30}' src="assets/img/shape/footer-2-2.png" alt="">
         <div class="it-footer-border"><span></span></div>
         <div class="container">
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div class="it-footer-widget it-footer-col-1-1">
                     <div class="it-footer-widget-logo mb-30">
                        

                        <a href="index.html"><img src="assets/img/logo/logo-black.png" alt=""></a>
                     </div>
                     <div class="it-footer-widget-text">
                        <p>Access expert-led courses designed to help you succeed in your career, all from the comfort of your home.</p>
                     </div>
                     <div class="it-footer-widget-btn">
                        <a href="contact-us.html" class="it-btn-yellow theme-bg">
                           <span>
                              <span class="text-1">Contact Us</span>
                              <span class="text-2">Contact Us</span>
                           </span>
                           <i>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                              </svg>
                           </i>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div class="it-footer-widget it-footer-col-1-2">
                     <h4 class="it-footer-widget-title">Useful Links</h4>
                     <div class="it-footer-widget-menu">
                        <ul>
                           <li><a href="#">Marketplace</a></li>
                           <li><a href="#">kindergarten</a></li>
                           <li><a href="#">University</a></li>
                           <li><a href="#">GYM Coaching</a></li>
                           <li><a href="#">Cooking</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div class="it-footer-widget it-footer-col-1-3">
                     <h4 class="it-footer-widget-title">Our Company</h4>
                     <div class="it-footer-widget-menu">
                        <ul>
                           <li><a href="#">Contact Us</a></li>
                           <li><a href="#">Become Teacher</a></li>
                           <li><a href="#">Blog</a></li>
                           <li><a href="#">Instructor</a></li>
                           <li><a href="#">Events</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div class="it-footer-widget it-footer-col-1-4 d-flex justify-content-lg-end">
                     <div>
                        <h4 class="it-footer-widget-title">Get Contact</h4>
                        <div class="it-footer-widget-contact mb-25">
                           <ul>
                              <li><span>Phone:</span><a href="tel:+880 1772 29 52 68">(+880) 1772 29 52 68</a></li>
                              <li><span>Email:</span><a href="mailto:hkl.saddam@gmail.com">hkl.saddam@gmail.com</a></li>
                              <li><span>Location:</span><a target="_blank" href="#">Dhaka, Bangladesh</a></li>
                           </ul>
                        </div>
                        <div class="it-footer-widget-social">
                           <a href="#">
                              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.5654 0.183594H18.5978L11.9747 7.75136L19.7656 18.0509H13.6671L8.88712 11.8058L3.42357 18.0509H0.386253L7.46894 9.9544L0 0.183594H6.25335L10.5697 5.89174L15.5654 0.183594ZM14.5006 16.2382H16.1798L5.33837 1.90156H3.53475L14.5006 16.2382Z" fill="#1F2432" />
                              </svg>
                           </a>
                           <a href="#">
                              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.7373 0C11.8245 4.94765e-05 12.8731 0.164898 13.8594 0.47168C14.0236 0.522763 14.186 0.5779 14.3467 0.636719C15.1509 0.931161 15.9091 1.32115 16.6074 1.79297C16.7472 1.88741 16.8846 1.98505 17.0195 2.08594C17.8277 2.69042 18.5459 3.4086 19.1504 4.2168C19.2513 4.35169 19.3489 4.48911 19.4434 4.62891C19.9152 5.32727 20.3052 6.08541 20.5996 6.88965C20.6584 7.05031 20.7136 7.21273 20.7646 7.37695C20.867 7.70592 20.9535 8.04183 21.0234 8.38379C21.1633 9.06723 21.2373 9.77522 21.2373 10.5C21.2373 10.9911 21.2029 11.4741 21.1377 11.9473C20.8765 13.8408 20.1102 15.573 18.9795 17.0039C18.8852 17.1232 18.7887 17.2405 18.6895 17.3555C18.491 17.5854 18.2828 17.8067 18.0654 18.0186C17.9567 18.1245 17.8456 18.2279 17.7324 18.3291C17.0534 18.9362 16.2951 19.4565 15.4746 19.8721C14.9275 20.1492 14.3529 20.3797 13.7559 20.5586C13.4575 20.648 13.1536 20.7251 12.8447 20.7881C12.6903 20.8196 12.5347 20.8475 12.3779 20.8721V13.5352H14.8242L15.29 10.5L15.2891 10.499H12.3779V8.53027C12.3779 8.4782 12.3795 8.42574 12.3828 8.37402C12.406 8.01348 12.5127 7.66609 12.7441 7.39844C12.8103 7.32194 12.8871 7.25242 12.9746 7.19043C13.1058 7.09747 13.2618 7.0224 13.4463 6.9707C13.631 6.91895 13.8442 6.89062 14.0889 6.89062H15.4131V4.30566C15.4131 4.30566 15.4123 4.30489 15.4111 4.30469H15.4092C15.4069 4.30431 15.4037 4.30344 15.3994 4.30273C15.3904 4.30124 15.3767 4.29965 15.3594 4.29688C15.3243 4.29127 15.2723 4.28305 15.207 4.27344C15.0764 4.25421 14.8899 4.22875 14.668 4.20312C14.335 4.16469 13.9214 4.12619 13.4932 4.10938L13.0625 4.10059C12.9125 4.10059 12.7654 4.10588 12.6221 4.11719C11.6196 4.19628 10.785 4.55048 10.1797 5.15625C10.05 5.28609 9.93029 5.42733 9.82227 5.58008C9.75029 5.68185 9.68299 5.78861 9.62109 5.90039C9.4972 6.12413 9.39385 6.36787 9.3125 6.63086C9.1702 7.0909 9.0957 7.61087 9.0957 8.18652V10.499H6.42969V13.5352H9.0957V20.8721C8.93893 20.8475 8.78329 20.8196 8.62891 20.7881C8.32 20.7251 8.01617 20.648 7.71777 20.5586C7.12076 20.3797 6.54616 20.1492 5.99902 19.8721C5.17857 19.4565 4.42027 18.9362 3.74121 18.3291C3.62802 18.2279 3.51689 18.1245 3.4082 18.0186C3.19082 17.8067 2.9826 17.5854 2.78418 17.3555C2.68495 17.2405 2.58839 17.1232 2.49414 17.0039C1.36339 15.573 0.597092 13.8408 0.335938 11.9473C0.270687 11.4741 0.237327 10.9911 0.237305 10.5C0.237305 9.41262 0.402157 8.36337 0.708984 7.37695C0.760067 7.21273 0.815204 7.05031 0.874023 6.88965C1.16847 6.08541 1.55846 5.32727 2.03027 4.62891C2.12472 4.48911 2.22235 4.35169 2.32324 4.2168C2.92773 3.4086 3.6459 2.69042 4.4541 2.08594C4.58899 1.98505 4.72642 1.88741 4.86621 1.79297C5.56458 1.32115 6.32271 0.931161 7.12695 0.636719C7.28761 0.5779 7.45003 0.522763 7.61426 0.47168C8.60067 0.164852 9.64992 0 10.7373 0ZM15.3477 4.2959C15.2526 4.28082 15.0588 4.25307 14.8037 4.22168C14.9662 4.24168 15.104 4.25925 15.207 4.27441C15.2657 4.28305 15.3132 4.29043 15.3477 4.2959Z" fill="currentcolor" stroke="#1F2432" stroke-width="0.000976562" />
                                 <path d="M15.2881 10.5L14.8232 13.5342H12.377V20.8721C12.1097 20.914 11.839 20.9454 11.5654 20.9668C11.2919 20.9882 11.0153 20.999 10.7363 20.999C10.4573 20.999 10.1808 20.9882 9.90723 20.9668C9.77039 20.9561 9.63433 20.9427 9.49902 20.9268L9.0957 20.8721H9.09668V13.5342H6.43066V10.5H9.0957L9.09668 10.499V8.18555C9.09673 7.28126 9.2817 6.5162 9.62207 5.90137C9.68399 5.78953 9.75124 5.68288 9.82324 5.58105C9.93127 5.42828 10.05 5.28611 10.1797 5.15625C10.2227 5.1132 10.2672 5.07175 10.3125 5.03125C10.3582 4.99045 10.4052 4.95128 10.4531 4.91309C10.9314 4.53205 11.5221 4.28117 12.2031 4.16895C12.4755 4.12406 12.7627 4.10156 13.0625 4.10156C13.2061 4.10157 13.3504 4.10474 13.4932 4.11035C13.7786 4.12157 14.0576 4.14199 14.3105 4.16602C14.8815 4.22025 15.3195 4.29048 15.3994 4.30371C15.4036 4.30441 15.407 4.3053 15.4092 4.30566H15.4121V6.88965H14.0889C14.0074 6.88965 13.929 6.89232 13.8545 6.89844C13.3318 6.94132 12.975 7.13039 12.7432 7.39844C12.5117 7.66631 12.405 8.0134 12.3818 8.37402C12.3785 8.42556 12.377 8.4774 12.377 8.5293V10.5H15.2881Z" fill="white" stroke="#1F2432" stroke-width="0.000976562" />
                              </svg>
                           </a>
                           <a href="#">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.6802 1.23535H6.03271C3.64478 1.23535 1.70898 3.17115 1.70898 5.55908V14.2065C1.70898 16.5945 3.64478 18.5303 6.03271 18.5303H14.6802C17.0681 18.5303 19.0039 16.5945 19.0039 14.2065V5.55908C19.0039 3.17115 17.0681 1.23535 14.6802 1.23535Z" stroke="#1F2432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M13.8122 9.33833C13.9189 10.058 13.796 10.793 13.4609 11.4388C13.1258 12.0846 12.5956 12.6083 11.9458 12.9354C11.2959 13.2625 10.5594 13.3763 9.8411 13.2608C9.12279 13.1452 8.45921 12.806 7.94476 12.2916C7.4303 11.7771 7.09116 11.1135 6.97557 10.3952C6.85999 9.67692 6.97384 8.94046 7.30094 8.29058C7.62804 7.64071 8.15173 7.11052 8.79752 6.77543C9.44331 6.44034 10.1783 6.31742 10.898 6.42414C11.6321 6.53299 12.3117 6.87507 12.8365 7.39984C13.3613 7.9246 13.7033 8.60423 13.8122 9.33833Z" stroke="#1F2432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M15.1094 5.12695H15.1221" stroke="#1F2432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </a>
                           <a href="#">
                              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.148 7.08887C15.6999 7.08887 17.1881 7.70533 18.2855 8.80264C19.3828 9.89994 19.9992 11.3882 19.9992 12.94V19.7664H16.0984V12.94C16.0984 12.4228 15.893 11.9267 15.5272 11.5609C15.1614 11.1951 14.6653 10.9896 14.148 10.9896C13.6308 10.9896 13.1347 11.1951 12.7689 11.5609C12.4031 11.9267 12.1977 12.4228 12.1977 12.94V19.7664H8.29688V12.94C8.29688 11.3882 8.91334 9.89994 10.0106 8.80264C11.108 7.70533 12.5962 7.08887 14.148 7.08887Z" fill="white" stroke="#1F2432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M5.37734 8.0625H1.47656V19.7648H5.37734V8.0625Z" fill="white" stroke="#1F2432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M3.42695 5.13613C4.50412 5.13613 5.37734 4.26291 5.37734 3.18574C5.37734 2.10857 4.50412 1.23535 3.42695 1.23535C2.34978 1.23535 1.47656 2.10857 1.47656 3.18574C1.47656 4.26291 2.34978 5.13613 3.42695 5.13613Z" fill="white" stroke="#1F2432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- copyright-area-start -->
      <div class="it-copyright-area it-copyright-ptb it-copyright-bg z-index-1 black-bg">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-12">
                  <div class="it-copyright-left text-center">
                     <p class="mb-0">Copyright © 2026 <a href="#">Saddamdidar</a> All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- copyright-area-end -->

   </section>
   <!-- footer-area-end -->

   </footer>`




   //Injector

   document.getElementById("header-placeholder").innerHTML = headerHTML;
   document.getElementById("footer-placeholder").innerHTML = footerHTML;