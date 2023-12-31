import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css'
const Login = () => {

    return (<section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
    <div className="card sm-3 " style={{width: "40%"}}>
      <div className="row g-0 d-flex align-items-center">
        
        <div className="col-lg-12">
          <div className="card-body py-8 px-md-8">
            <div className="text-center mb-3">---Citizen Login---</div>
            <div className="d-flex justify-content-end mb-3">
              <a href='#!' className="link-primary">Register New User</a>
            </div>
            <hr></hr>
            <form>
              <div className="form-outline mt-2 mb-4">
                <input type="email" id="ipt-email" className="form-control" />
                <label className="form-label" for="ipt-email">Email address</label>
              </div>
  
              <div className="form-outline mb-2">
                <input type="password" id="ipt-password" className="form-control" />
                <label className="form-label" for="ipt-password">Password</label>
              </div>
  
              <div className="row mb-4">
                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
  
              <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
  
            </form>
  
          </div>
        </div>
      </div>
    </div>
  </section>)
} 

export default Login;