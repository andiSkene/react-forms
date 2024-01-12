import { useState } from "react";

export function useInput(defaultValue,validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function inputChangeHandler(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }

      function inputBlurHandler() {
        setDidEdit(true)
      }
    
    return {
        value: enteredValue,
        inputChangeHandler,
        inputBlurHandler,
        hasError: didEdit && !valueIsValid
    }
}