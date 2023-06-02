import Header from "@/component/header";
import Footer from "@/component/footer";
function Login() {
    return ( <>
    <Header/>
    <div class="login-main">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-4">
					<div class="login-from">
						<h3>Login</h3>
						<form>
							<div class="login-from-group">
								<input type="text" name="username" placeholder="username"/>
							</div>

							<div class="login-from-group">
								<input type="password" name="password" placeholder="password"/>
							</div>

							<div class="login-btn text-center">
							<button  class="login-btn-inner theme-btn" >Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    <Footer/>
    </> );
}

export default Login;