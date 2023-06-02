function Header() {
    return ( <>
    <header class="clearHeader">
		<div class="top-header">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-4 col-lg-2">
						<div class="logo">
							<a href="/">
								<img src="../img/logo.png"/>
							</a>
						</div>
					</div>
					<div class="col-2 col-lg-7">
						<div class="main-menu">
							<ul>
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Favourites</a>
								</li>
								<li>
									<a href="#">Discover</a>
								</li>
								<li class="drop-down">
									<a href="#">Submit</a>
									<ul class="sub-menu">
										<li>
											<a href="#">Submit Tool</a>
										</li>
										<li>
											<a href="#">Submit News</a>
										</li>
									</ul>
								</li>
								<li class="drop-down">
									<a href="#">Community</a>
									<ul class="sub-menu">
										<li><a href="#">Newlatter Issues</a></li>
										<li><a href="#">Latest AI News</a></li>
										<li><a href="#">Join Discord</a></li>
									</ul>
								</li>
							</ul>
						</div>

						<div class="nav-btn d-lg-none d-block">
							<span class="nav-icon">
								<span class="inner-icon top"></span>
								<span class="inner-icon middle"></span>
								<span class="inner-icon bottom"></span>
							</span>
						</div>
					</div>
					<div class="col-6 col-lg-3">
						<div class="login-btn">
							<a href="#" class="theme-btn" data-bs-toggle="modal" data-bs-target="#loginmodal">Login / Register</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    </> );
}

export default Header;