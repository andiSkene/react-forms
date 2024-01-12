import { useRef, useState } from 'react';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [ emailIsInvalid, setEmailIsInvalid ] = useState(false);

  function submitHandler(event) {
    //prevents default browser behavior which would submit a HTTP request and reload page
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    //validate values
    const emailIsValid = enteredEmail.includes('@');
    if(!emailIsValid){
      setEmailIsInvalid(true);
      //adding a return here prevents an HTTP request from being sent
      return;
    }
    console.log('HTTP request is sending...');
    //reset validator
    setEmailIsInvalid(true);

    //package them up
    //submit
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          ref={email} 
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
            </div>
        </div>


        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          ref={password} 
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
