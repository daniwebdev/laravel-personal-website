<!DOCTYPE html>
<html lang="en">
	
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
		<!-- Meta -->
		<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="RStill - CV/Resume">
        <meta name="keywords" content="cv, resume, portfolio, creative, modern">
        <meta name="author" content="Hamza Gourram">
		<!-- Page Title -->
		<title>RStill - CV/Resume</title>
		<!-- Styles -->
		<link rel="stylesheet" href="{{ asset('template/profile/css/bootstrap.css') }}">
		<link rel="stylesheet" href="{{ asset('template/profile/css/font-awesome.min.css') }}">
		<link rel="stylesheet" href="{{ asset('template/profile/css/tootik.css') }}">
		<link rel="stylesheet" href="{{ asset('template/profile/css/magnific-popup.css') }}">
		<link rel="stylesheet" href="{{ asset('template/profile/css/swiper.css') }}">
		<link rel="stylesheet" href="{{ asset('template/profile/css/animate.css') }}">
		<link rel="stylesheet" href="{{ asset('template/profile/css/style.css') }}">
		<!-- Light & Dark Color -->
		<link rel="stylesheet" id="light-dark" href="{{ asset('template/profile/css/colors/light.css') }}">
		<!-- Theme Color -->
		<link rel="stylesheet" id="colors" href="{{ asset('template/profile/css/colors/color1-0487cc.css') }}">
		<!-- Responsive style -->
		<link rel="stylesheet" href="{{ asset('template/profile/css/responsive.css') }}">
		<!-- Favicon -->
		<link rel="shortcut icon" type="image/ico" href="{{ asset('template/profile/images/favicon.png')}}">
		<!-- Google Fonts -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|PT+Sans+Narrow:400,700">
	</head>
	<body>

		<div class="content">
			<!-- #LOADER# --> <!-- other loader : http://tobiasahlin.com/spinkit/ -->
			<div class="loading-overlay">
				<div class="spinner">
				  <div class="rect1"></div>
				  <div class="rect2"></div>
				  <div class="rect3"></div>
				  <div class="rect4"></div>
				  <div class="rect5"></div>
				</div>
			</div>
			
			<!-- #MENU# -->
			<div class="menu">
				<h2 class="logo">RS</h2>
				<div class="menu-content">
					<ul>
						<li><a class="active" href="#" data-value="about">ABOUT</a></li>
						<li><a href="#" data-value="skills">SKILLS</a></li>
						<li><a href="#" data-value="education">EDUCATION</a></li>
						<li><a href="#" data-value="experience">EXPERIENCE</a></li>
						<li><a href="#" data-value="portfolio">PORTFOLIO</a></li>
						<li><a href="#" data-value="pricing">PRICING</a></li>
						<li><a href="#" data-value="testimonials">TESTIMONIALS</a></li>
						<li><a href="#" data-value="interests">INTERESTS</a></li>
						<li><a href="#" data-value="blog">BLOG</a></li>
						<li><a href="#" data-value="contact-us">CONTACT US</a></li>
					</ul>
				</div>
				<div class="open-menu">
					<i class="fa fa-bars"></i>
				</div>
			</div>
			<!-- #THEME-OPTION# --> <!-- other colors : http://colorhunt.co/ -->
			<div class="theme-option">
				<div class="change-theme">
					<div class="light-dark-theme">
						<ul>
							<li class="light">
								<h4>Light</h4>
								<span data-value="{{ asset('template/profile/css/colors/light.css') }}"><i class="fa fa-check"></i></span>
							</li>
							<li class="dark">
								<h4>Dark</h4>
								<span data-value="{{ asset('template/profile/css/colors/dark.css') }}"><i class="fa fa-check"></i></span>
							</li>
						</ul>
					</div>
					<div class="colors-theme">
						<h4>12 awesome colors</h4>
						<ul>
							<li class="color1"><span data-value="{{ asset('template/profile/css/colors/color1-0487cc.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color2"><span data-value="{{ asset('template/profile/css/colors/color2-f23a3a.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color3"><span data-value="{{ asset('template/profile/css/colors/color3-2eac6d.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color4"><span data-value="{{ asset('template/profile/css/colors/color4-f35b25.css') }}"><i class="fa fa-check"></i></span></li>
						</ul>
						<ul>
							<li class="color5"><span data-value="{{ asset('template/profile/css/colors/color5-f6416c.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color6"><span data-value="{{ asset('template/profile/css/colors/color6-ff9999.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color7"><span data-value="{{ asset('template/profile/css/colors/color7-00adb5.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color8"><span data-value="{{ asset('template/profile/css/colors/color8-00cf95c.css') }}"><i class="fa fa-check"></i></span></li>
						</ul>
						<ul>
							<li class="color9"><span data-value="{{ asset('template/profile/css/colors/color9-827055.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color10"><span data-value="{{ asset('template/profile/css/colors/color10-8200ff.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color11"><span data-value="{{ asset('template/profile/css/colors/color11-e4c144.css') }}"><i class="fa fa-check"></i></span></li>
							<li class="color12"><span data-value="{{ asset('template/profile/css/colors/color12-5457a6.css') }}"><i class="fa fa-check"></i></span></li>
						</ul>
					</div>
				</div>
				<div class="open-theme">
					<i class="fa fa-cogs"></i>
				</div>
			</div>
			<!-- #SCROLL-TOP# -->
			<div class="scroll-top" data-tootik="TOP" data-tootik-conf="invert no-arrow no-fading">
				<i class="fa fa-arrow-up"></i>
			</div>
			<!-- #CONTAINER# -->
			<div class="container">
				<!-- #ABOUT# -->
				<section id="about" class="section section-about wow fadeInUp">
					<div class="profile">
						<div class="row">
							<div class="col-sm-4">
								<div class="photo-profile">
									<img src="{{ asset('template/profile/images/me.jpg') }}" alt="Robert Smith">
								</div>
								<a href="cv/cv-1.pdf" target="cv">
									<div class="download-resume">
										<i class="fa fa-cloud-download" aria-hidden="true"></i>
										<span class="text-download">DOWNLOAD RESUME</span>
									</div>
								</a>
								<div class="available">
									<i class="fa fa-check" aria-hidden="true"></i>
									<span class="text-available">available on freelance</span>
								</div>
							</div>
							<div class="col-sm-8">
								<div class="info-profile">
									<h2><span>HI I'M</span> ROBERT SMITH</h2>
									<h3>web developer & web designer</h3>
									<p>Hello! I’m Robert Smith. Web Developer with over 8 years of experience.
									Experienced with all stages of the development cycle for dynamic web projects.
									Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
									<div class="row">
										<div class="col-sm-6">
											<ul class="ul-info">
												<li class="li-info">
													<span class="title-info">Age</span>
													<span class="info">26</span>
												</li>
												<li class="li-info">
													<span class="title-info">Address</span>
													<span class="info">6235, London, Earth, BE 45</span>
												</li>
												<li class="li-info">
													<span class="title-info">Email</span>
													<span class="info">robertsmith@gmail.com</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-6">
											<ul class="ul-info">
												<li class="li-info">
													<span class="title-info">Phone</span>
													<span class="info">+123 456 789 012</span>
												</li>
												<li class="li-info">
													<span class="title-info">Website</span>
													<span class="info">www.robertsmith.com</span>
												</li>
												<li class="li-info">
													<span class="title-info">Nationality</span>
													<span class="info">American</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-12">
											<span class="title-links">Social Links</span>
											<ul class="ul-social-links">
												<li class="li-social-links">
													<a href="#" data-tootik="Facebook" data-tootik-conf="square"><i class="fa fa-facebook" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Twitter" data-tootik-conf="square"><i class="fa fa-twitter" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Google Plus" data-tootik-conf="square"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Linkedin" data-tootik-conf="square"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Dribbble" data-tootik-conf="square"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Pinterest" data-tootik-conf="square"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Vimeo" data-tootik-conf="square"><i class="fa fa-vimeo" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="#" data-tootik="Behance" data-tootik-conf="square"><i class="fa fa-behance" aria-hidden="true"></i></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!-- #SKILLS# -->
				<section id="skills" class="section section-skills wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">SKILLS</h2>
					</div>
					<div class="row">
						<div class="col-md-5">
							<div class="professional-skills">
								<div class="title-skills">
									<h3>PROFESSIONAL SKILLS</h3>
								</div>
@for ($i = 0; $i < 5; $i++)
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">HTML & CSS</span>
										<span class="skill-value">90%</span>
									</div>
									<div class="progress">
										<div class="progress-bar progress1" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
										</div>
									</div>
								</div>
								<!-- / single skill -->
@endfor
								{{-- <!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">WordPress</span>
										<span class="skill-value">75%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">JavaScript</span>
										<span class="skill-value">85%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">Laravel</span>
										<span class="skill-value">70%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress4" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">Photoshop</span>
										<span class="skill-value">65%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress5" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
									    </div>
									</div>
								</div> --}}
								<!-- / single skill -->
							</div>
						</div>
						<div class="col-md-7">
							<div class="additional-skills">
								<div class="title-skills">
									<h3>ADDITIONAL SKILLS</h3>
								</div>
								<div class="circle-progress">
									<div class="row">
										<!-- single circle skill -->
										<div class="col-sm-4">
											<div class="circle">
												<div class="chart-percentage">
													<span>90%</span>
												</div>
												<div class="chart" data-percent="90">
													<!-- canvas -->
												</div>
												<div class="name-circle">
													<span>English</span>
												</div>
											</div>
										</div>
										<!-- / single circle skill -->
										<!-- single circle skill -->
										<div class="col-sm-4">
											<div class="circle">
												<div class="chart-percentage">
													<span>80%</span>
												</div>
												<div class="chart" data-percent="80">
													<!-- canvas -->
												</div>
												<div class="name-circle">
													<span>Creativity</span>
												</div>
											</div>
										</div>
										<!-- / single circle skill -->
										<!-- single circle skill -->
										<div class="col-sm-4">
											<div class="circle">
												<div class="chart-percentage">
													<span>65%</span>
												</div>
												<div class="chart" data-percent="65">
													<!-- canvas -->
												</div>
												<div class="name-circle">
													<span>Teamwork</span>
												</div>
											</div>
										</div>
										<!-- / single circle skill -->
									</div>
								</div>
								<div class="other-skills">
									<div class="row">
										<div class="col-sm-6">
											<div class="other">
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Photography</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Mobile App Design</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Logo Design</span>
												</div>
												<!-- / single other skill -->
											</div>
										</div>
										<div class="col-sm-6">
											<div class="other">
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>3D Animation</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Audio Video Editing</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>UX and UI Design</span>
												</div>
												<!-- / single other skill -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!-- #EDUCATION# -->
				<section id="education" class="section section-education wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">EDUCATION</h2>
					</div>
					<div class="row">
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2014 - 2016</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Web Master / Web Developer</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Lipro University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
				            </div>
						</div>
						<!-- / single education -->
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2012 - 2014</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Software Engineering</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Oxford University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
				            </div>
						</div>
						<!-- / single education -->
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2010 - 2012</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Mobile App Development</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Lipro University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
				            </div>
						</div>
						<!-- / single education -->
						<div class="clearfix"></div>
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2008 - 2010</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Full Stack Developer</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Oxford University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
				            </div>
						</div>
						<!-- / single education -->
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2006 - 2008</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Computer Science</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Lipro University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
				            </div>
						</div>
						<!-- / single education -->
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2004 - 2006</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Desktop Development</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Oxford University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
				            </div>
						</div>
						<!-- / single education -->
						<div class="clearfix"></div>
					</div>
				</section>
				<!-- #EXPERIENCE# -->
				<section id="experience" class="section section-experience wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">EXPERIENCE</h2>
					</div>
					<div class="row">
						<div class="col-md-10 col-md-offset-1">
							<span class="icon-experience">
								<i class="fa fa-briefcase"></i>
							</span>
							<div class="all-experience">
								<!-- single experience -->
								<div class="experience-content">
									<span class="period-experience">Jan 2015 - Current</span>
									<h3 class="specialty-name">Wordpress Developer</h3>
									<h3 class="company-name">GOGLE</h3>
									<p class="prg-experience">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper lacus tortor, quis bibendum odio mattis vitae. Cras porta massa pretium auctor congue. Suspendisse ante massa, euismod sit amet sem sed, viverra tristique diam.</p>
								</div>
								<!-- / single experience -->
								<!-- single experience -->
								<div class="experience-content">
									<span class="period-experience">May 2013 - Aug 2014</span>
									<h3 class="specialty-name">Software Engineer</h3>
									<h3 class="company-name">FACBOOK</h3>
									<p class="prg-experience">Curabitur eleifend purus eu efficitur feugiat. Fusce quis libero sit amet urna mattis semper. Fusce ornare tristique scelerisque. Nunc ac cursus nibh. Maecenas lobortis nulla a nunc molestie, at volutpat sapien congue. Sed vehicula nec libero vel blandit. Praesent scelerisque sodales porttitor.</p>
								</div>
								<!-- / single experience -->
								<!-- single experience -->
								<div class="experience-content">
									<span class="period-experience">Sep 2010 - Mar 2012</span>
									<h3 class="specialty-name">Systems Analyst</h3>
									<h3 class="company-name">YOTUBE</h3>
									<p class="prg-experience">Quisque convallis justo tellus, ut consequat ante sagittis sed. Suspendisse tincidunt, justo sed dignissim viverra, lacus sem blandit nunc, ac molestie metus turpis mattis erat. Curabitur ac malesuada mauris, id gravida nisi.</p>
								</div>
								<!-- / single experience -->
								<!-- single experience -->
								<div class="experience-content">
									<span class="period-experience">Oct 2008 - Apr 2010</span>
									<h3 class="specialty-name">Full Stack Developer</h3>
									<h3 class="company-name">TWITTR</h3>
									<p class="prg-experience">Aliquam at sapien pretium, iaculis tortor id, euismod turpis. Nulla ante eros, semper a quam ut, dignissim scelerisque eros. Vestibulum congue a elit ut dignissim. Duis vel erat sed massa porta tincidunt at at lectus. Sed mattis commodo vestibulum. Integer bibendum eget tortor nec faucibus.</p>
								</div>
								<!-- / single experience -->
							</div>
						</div>
					</div>
				</section>
				<!-- #PORTFOLIO# -->
				<section id="portfolio" class="section section-portfolio wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">PORTFOLIO</h2>
					</div>
					<div class="filter-portfolio">
						<ul>
							<li class="active filter" data-filter="all">All</li>
							<li class="filter" data-filter=".term1">Web Design</li>
							<li class="filter" data-filter=".term2">Photography</li>
							<li class="filter" data-filter=".term3">Development</li>
						</ul>
					</div>
					<div class="row">
						<!-- single work -->
						<div class="col-sm-4">
							<div class="item-portfolio term3">
								<div class="item-overlay">
									<div class="item-content">
										<span class="icon-search">
											<a class="work-popup" href="{{ asset('template/profile/images/portfolio/item1.jpg') }}" data-group="1"><i class="fa fa-search" aria-hidden="true"></i></a>
										</span>
										<span class="icon-plus">
											<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
										</span>
										<h3>AWESOME TITLE PORTFOLIO</h3>
									</div>
								</div>
								<img src="{{ asset('template/profile/images/portfolio/item1.jpg') }}" alt="">
							</div>
						</div>
						<!-- / single work -->
						<!-- single work -->
						<div class="col-sm-4">
							<div class="item-portfolio term1">
								<div class="item-overlay">
									<div class="item-content">
										<span class="icon-search">
											<a class="work-popup" href="{{ asset('template/profile/images/portfolio/item2.jpg') }}" data-group="1"><i class="fa fa-search" aria-hidden="true"></i></a>
										</span>
										<span class="icon-plus">
											<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
										</span>
										<h3>AWESOME TITLE PORTFOLIO</h3>
									</div>
								</div>
								<img src="{{ asset('template/profile/images/portfolio/item2.jpg') }}" alt="">
							</div>
						</div>
						<!-- / single work -->
						<!-- single work -->
						<div class="col-sm-4">
							<div class="item-portfolio term2">
								<div class="item-overlay">
									<div class="item-content">
										<span class="icon-search">
											<a class="work-popup" href="{{ asset('template/profile/images/portfolio/item3.jpg') }}" data-group="1"><i class="fa fa-search" aria-hidden="true"></i></a>
										</span>
										<span class="icon-plus">
											<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
										</span>
										<h3>AWESOME TITLE PORTFOLIO</h3>
									</div>
								</div>
								<img src="{{ asset('template/profile/images/portfolio/item3.jpg') }}" alt="">
							</div>
						</div>
						<!-- / single work -->
						<div class="clearfix"></div>
						<!-- single work -->
						<div class="col-sm-4">
							<div class="item-portfolio term2">
								<div class="item-overlay">
									<div class="item-content">
										<span class="icon-search">
											<a class="work-popup" href="{{ asset('template/profile/images/portfolio/item4.jpg') }}" data-group="1"><i class="fa fa-search" aria-hidden="true"></i></a>
										</span>
										<span class="icon-plus">
											<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
										</span>
										<h3>AWESOME TITLE PORTFOLIO</h3>
									</div>
								</div>
								<img src="{{ asset('template/profile/images/portfolio/item4.jpg') }}" alt="">
							</div>
						</div>
						<!-- / single work -->
						<!-- single work -->
						<div class="col-sm-4">
							<div class="item-portfolio term1">
								<div class="item-overlay">
									<div class="item-content">
										<span class="icon-search">
											<a class="work-popup" href="{{ asset('template/profile/images/portfolio/item5.jpg') }}" data-group="1"><i class="fa fa-search" aria-hidden="true"></i></a>
										</span>
										<span class="icon-plus">
											<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
										</span>
										<h3>AWESOME TITLE PORTFOLIO</h3>
									</div>
								</div>
								<img src="{{ asset('template/profile/images/portfolio/item5.jpg') }}" alt="">
							</div>
						</div>
						<!-- / single work -->
						<!-- single work -->
						<div class="col-sm-4">
							<div class="item-portfolio term3">
								<div class="item-overlay">
									<div class="item-content">
										<span class="icon-search">
											<a class="work-popup" href="{{ asset('template/profile/images/portfolio/item6.jpg') }}" data-group="1"><i class="fa fa-search" aria-hidden="true"></i></a>
										</span>
										<span class="icon-plus">
											<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
										</span>
										<h3>AWESOME TITLE PORTFOLIO</h3>
									</div>
								</div>
								<img src="{{ asset('template/profile/images/portfolio/item6.jpg') }}" alt="">
							</div>
						</div>
						<!-- / single work -->
						<div class="clearfix"></div>
					</div>
				</section>
				<!-- #PRICING# -->
				<section id="pricing" class="section section-pricing wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">PRICING</h2>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="pricing-content">
								<div class="pricing-title">
									<h3>STARTER</h3>
								</div>
								<div class="pricing-price">
									<span class="dolar">$</span>
									<span class="number">49</span>
									<span class="mo">/mo</span>
								</div>
								<div class="pricing-detail">
									<div class="line-detail">
										<span>1TB Disk Space</span>
									</div>
									<div class="line-detail">
										<span>10 Limites Project</span>
									</div>
									<div class="line-detail">
										<span>Responsive Page</span>
									</div>
									<div class="line-detail">
										<span>Free Hosting</span>
									</div>
									<div class="line-detail">
										<span>24/7 Support</span>
										<span class="new">NEW</span>
									</div>
								</div>
								<div class="pricing-buy">
									<a href="#"><h3>BUY NOW</h3></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="pricing-content">
								<div class="most-populaire">
									<span>MOST POPULAIRE !</span>
								</div>
								<div class="pricing-title">
									<h3 class="h3-most-populaire">STANDARD</h3>
								</div>
								<div class="pricing-price">
									<span class="dolar">$</span>
									<span class="number">99</span>
									<span class="mo">/mo</span>
								</div>
								<div class="pricing-detail">
									<div class="line-detail">
										<span>Unlimited Disk Space</span>
									</div>
									<div class="line-detail">
										<span>30 Limites Project</span>
									</div>
									<div class="line-detail">
										<span>Responsive Page</span>
									</div>
									<div class="line-detail">
										<span>Free Hosting</span>
									</div>
									<div class="line-detail">
										<span>24/7 Support</span>
									</div>
								</div>
								<div class="pricing-buy">
									<a href="#"><h3>BUY NOW</h3></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="pricing-content">
								<div class="pricing-title">
									<h3>PREMIUM</h3>
								</div>
								<div class="pricing-price">
									<span class="dolar">$</span>
									<span class="number">399</span>
									<span class="mo">/mo</span>
								</div>
								<div class="pricing-detail">
									<div class="line-detail">
										<span>Unlimited Disk Space</span>
									</div>
									<div class="line-detail">
										<span>Unlimited Project</span>
									</div>
									<div class="line-detail">
										<span>Responsive Page</span>
									</div>
									<div class="line-detail">
										<span>Free Hosting</span>
									</div>
									<div class="line-detail">
										<span>24/7 Support</span>
									</div>
								</div>
								<div class="pricing-buy">
									<a href="#"><h3>BUY NOW</h3></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!-- #TESTIMONIALS# -->
				<section id="testimonials" class="section section-testimonials wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">TESTIMONIALS</h2>
					</div>
				    <div class="swiper-container">
				        <div class="swiper-wrapper">
				        	<!-- single testimonial -->
				            <div class="swiper-slide">
				            	<div class="personal-info">
				            		<img src="{{ asset('template/profile/images/testimonials/personal1.jpg') }}" alt="">
				            		<h3>Chris Smith</h3>
				            		<span>Product Manager</span>
				            	</div>
				            	<div class="personal-text">
				            	<p><i class="fa fa-quote-left"></i>Phasellus turpis lacus, convallis at odio ac, mattis condimentum dolor. In hac habitasse platea dictumst. Fusce eros felis, commodo eget lacus.<i class="fa fa-quote-right"></i></p>
				            	</div>
				            </div>
				            <!-- / single testimonial -->
				            <!-- single testimonial -->
				            <div class="swiper-slide">
				            	<div class="personal-info">
				            		<img src="{{ asset('template/profile/images/testimonials/personal2.jpg') }}" alt="">
				            		<h3>Chris Smith</h3>
				            		<span>Product Manager</span>
				            	</div>
				            	<div class="personal-text">
				            	<p><i class="fa fa-quote-left"></i>Aenean commodo pharetra leo, sed consequat sapien eleifend non. Nunc varius malesuada justo in lacinia. Curabitur eget mauris quis quam.<i class="fa fa-quote-right"></i></p>
				            	</div>
				            </div>
				            <!-- / single testimonial -->
				            <!-- single testimonial -->
				            <div class="swiper-slide">
				            	<div class="personal-info">
				            		<img src="{{ asset('template/profile/images/testimonials/personal3.jpg') }}" alt="">
				            		<h3>Chris Smith</h3>
				            		<span>Product Manager</span>
				            	</div>
				            	<div class="personal-text">
				            		<p><i class="fa fa-quote-left"></i>Aliquam accumsan, est id vestibulum commodo, massa eros consequat velit, sed pulvinar diam est non purus. Donec quis sapien nec interdum.<i class="fa fa-quote-right"></i></p>
				            	</div>
				            </div>
				            <!-- / single testimonial -->
				            <!-- single testimonial -->
				            <div class="swiper-slide">
				            	<div class="personal-info">
				            		<img src="{{ asset('template/profile/images/testimonials/personal4.jpg') }}" alt="">
				            		<h3>Chris Smith</h3>
				            		<span>Product Manager</span>
				            	</div>
				            	<div class="personal-text">
				            	<p><i class="fa fa-quote-left"></i>Morbi gravida lorem a odio tristique auctor. Praesent gravida ultricies nisi ut tempus. Quisque accumsan leo facilisis velit iaculis egestas.<i class="fa fa-quote-right"></i></p>
				            	</div>
				            </div>
				            <!-- / single testimonial -->
				            <!-- single testimonial -->
				            <div class="swiper-slide">
				            	<div class="personal-info">
				            		<img src="{{ asset('template/profile/images/testimonials/personal5.jpg') }}" alt="">
				            		<h3>Chris Smith</h3>
				            		<span>Product Manager</span>
				            	</div>
				            	<div class="personal-text">
				            	<p><i class="fa fa-quote-left"></i>Sed et maximus magna, et finibus tellus. Pellentesque eleifend tempus sodales. Nunc risus nisi, hendrerit nec dictum et, accumsan eget libero.<i class="fa fa-quote-right"></i></p>
				            	</div>
				            </div>
				            <!-- / single testimonial -->
				            <!-- single testimonial -->
				            <div class="swiper-slide">
				            	<div class="personal-info">
				            		<img src="{{ asset('template/profile/images/testimonials/personal6.jpg') }}" alt="">
				            		<h3>Chris Smith</h3>
				            		<span>Product Manager</span>
				            	</div>
				            	<div class="personal-text">
				            	<p><i class="fa fa-quote-left"></i>Pellentesque in elit sed magna imperdiet finibus sed sed erat. Curabitur laoreet feugiat ligula, quis feugiat nibh rhoncus et. Nam id leo.<i class="fa fa-quote-right"></i></p>
				            	</div>
				            </div>
				            <!-- / single testimonial -->
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination">
				        	<!-- span -->
				        </div>
				    </div>
				</section>
				<!-- #INTERESTS# -->
				<section id="interests" class="section section-interests wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">INTERESTS</h2>
					</div>
					<div class="text-interests">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					<!-- more icons for interests : https://www.iconfinder.com/ -->
				    <div class="swiper-container">
				        <div class="swiper-wrapper">
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/travel_icon.png') }}" alt="Travel">
				            	</div>
				            	<h4>Travel</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/music_icon.png') }}" alt="Music">
				            	</div>
				            	<h4>Music</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/gaming_icon.png') }}" alt="Gaming">
				            	</div>
				            	<h4>Gaming</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/swiming_icon.png') }}" alt="Swiming">
				            	</div>
				            	<h4>Swiming</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/movies_icon.png') }}" alt="Movies">
				            	</div>
				            	<h4>Movies</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/shopping_icon.png') }}" alt="Shopping">
				            	</div>
				            	<h4>Shopping</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/bicycling_icon.png') }}" alt="Bicycling">
				            	</div>
				            	<h4>Bicycling</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="{{ asset('template/profile/images/interests/cooking_icon.png') }}" alt="Cooking">
				            	</div>
				            	<h4>Cooking</h4>
				            </div>
				        </div>
				    </div>
				</section>
				<!-- #BLOG# -->
				<section id="blog" class="section section-blog wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">BLOG</h2>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="blog-content">
								<img src="{{ asset('template/profile/images/blog/blog1.jpg') }}" alt="">
								<div class="blog-detail">
									<h4><a href="#">PHOTO</a> / <a href="#">DESIGN</a> / <a href="#">DEV</a></h4>
									<h3><a href="single-blog.html">HERE GOES AN AWESOME BLOG TITLE</a></h3>
									<ul class="ul-detail">
										<li><i class="fa fa-user-o"></i>Robert Smith</li>
										<li><i class="fa fa-calendar-check-o"></i>Nov 12</li>
										<li><i class="fa fa-comments-o"></i>46</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
									<a href="single-blog.html"><span class="read-more">READ MORE</span></a>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="blog-content">
								<img src="{{ asset('template/profile/images/blog/blog2.jpg') }}" alt="">
								<div class="blog-detail">
									<h4><a href="#">PHOTO</a> / <a href="#">DESIGN</a> / <a href="#">DEV</a></h4>
									<h3><a href="single-blog.html">HERE GOES AN AWESOME BLOG TITLE</a></h3>
									<ul class="ul-detail">
										<li><i class="fa fa-user-o"></i>Robert Smith</li>
										<li><i class="fa fa-calendar-check-o"></i>Nov 12</li>
										<li><i class="fa fa-comments-o"></i>46</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
									<a href="single-blog.html"><span class="read-more">READ MORE</span></a>
								</div>
							</div>
						</div>
					</div>
					<div class="load-more">
						<a href="more-blog.html"><span>LOAD MORE</span></a>
					</div>
				</section>
				<!-- #CONTACT_US# -->
				<section id="contact-us" class="section section-contact-us wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">CONTACT US</h2>
					</div>
					<div class="row">
						<div class="col-sm-7">
							<div class="form-content">
								<h3>LET'S HAVE A FUN</h3>
								<form id="contactForm" data-toggle="validator">
									<input type="text" id="name" placeholder="Name" required>
									<input type="email" id="email" placeholder="Email" required>
									<textarea id="message" placeholder="Message" required></textarea>
									<input type="submit" id="form-submit" value="SEND">
									<div id="msgSubmit" class="h3 text-center hidden"></div>
            						<div class="clearfix"></div>
								</form>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="info-content">
								<h3>KEEP IN TOUCHE</h3>
								<div class="address">
									<span class="info-icon"><i class="fa fa-map-marker"></i></span>
									<span class="info-text">6235, London, Earth, BE 45</span>
								</div>
								<div class="email">
									<span class="info-icon"><i class="fa fa-envelope"></i></span>
									<span class="info-text">robertsmith@gmail.com</span>
								</div>
								<div class="telephone">
									<span class="info-icon"><i class="fa fa-phone"></i></span>
									<span class="info-text">+123 456 789 012</span>
								</div>
								<div class="website">
									<span class="info-icon"><i class="fa fa-link"></i></span>
									<span class="info-text">www.robertsmith.com</span>
								</div>
							</div>
						</div>
					</div>
					<div class="social-links">
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
							<li><a href="#"><i class="fa fa-behance"></i></a></li>
						</ul>
					</div>
				</section>
			</div>
		</div>

		<!-- #JQUERY-PLUGINS# -->
		<script src="{{ asset('template/profile/js/jquery.min.js') }}"></script>
		<script src="{{ asset('template/profile/js/bootstrap.min.js') }}"></script>
		<script src="{{ asset('template/profile/js/jquery.magnific-popup.min.js') }}"></script>
		<script src="{{ asset('template/profile/js/swiper.min.js') }}"></script>
		<script src="{{ asset('template/profile/js/jquery.easypiechart.min.js') }}"></script>
		<script src="{{ asset('template/profile/js/wow.min.js') }}"></script>
		<script src="{{ asset('template/profile/js/validator.min.js') }}"></script>
    	<script src="{{ asset('template/profile/js/form-scripts.js') }}"></script>
		<script src="{{ asset('template/profile/js/script.js') }}"></script>
		<script>
		/**** EasyPieChart Circle Progress ****/
		$(function() {
			//circle progress additional skills
		    $('.chart').easyPieChart({
		        barColor: '#757575',
		        trackColor: 'rgba(255,255,255,0)',
		        scaleColor: 'rgba(255,255,255,0)',
		        lineWidth: '10',
		        lineCap: 'square'
		    });
		});
		</script>

	</body>

<!-- Mirrored from rstill.netlify.com/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 11 Jul 2019 07:57:57 GMT -->
</html>