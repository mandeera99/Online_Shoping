import React from "react";


const Register = () => {
    return (
        <div className="d-flex justify-content-center">
        <form>
        <div class="form-outline mb-4">
                <input type="text" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">First name</label>
            </div>

            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
            </div>


            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
            </div>
            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Repeat Password</label>
            </div>

            <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                </div>

  
            </div>


            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>


  
        </form>
        </div>
    );
};
export default Register;
