import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function StateLogin() {
  //hooks ---------------------------------------------------------
  const {
    value: emailValue, 
    inputChangeHandler: inputEmailChangeHandler, 
    inputBlurHandler: inputEmailBlurHandler, 
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue, 
    inputChangeHandler: inputPasswordChangeHandler, 
    inputBlurHandler: inputPasswordBlurHandler, 
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  //functions ---------------------------------------------------------
  function submitHandler(event) {
    //prevents default browser behavior which would submit a HTTP request and reload page
    event.preventDefault();
    console.log('submit', emailValue, passwordValue)

    //validate values
    //package them up
    //submit
  }

  //JSX ---------------------------------------------------------
  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={inputEmailBlurHandler}
          onChange={inputEmailChangeHandler}
          value={emailValue}
          error={emailHasError ? "Please enter a valid email" : null}
        />

        <div className="control no-margin">
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={inputPasswordBlurHandler}
            onChange={inputPasswordChangeHandler}
            value={passwordValue}
            error={passwordHasError ? "Please enter a valid password" : null}
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
