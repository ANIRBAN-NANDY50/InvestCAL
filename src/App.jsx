import { useState } from "react";
import Results from "./components/Results.jsx";
import Header from "./components/header.jsx";
import UserInput from "./components/userinput.jsx";
function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment :10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
});

const inputIsValid = userInput.duration >=1;
function handleChange (inputIdentifier,newValue){
  setUserInput(prevUserInput => {
      return{
      ...prevUserInput,
      [inputIdentifier] : +newValue
      };
  });
}

  return (
     <>
     <Header />
     <UserInput onInput={handleChange} userInput={userInput}/>
     {/* Results Of Investment Calculation Goes Here */}
     {!inputIsValid && <p className="center">Please Enter Valid Duration</p>}
     {inputIsValid && <Results input={userInput}/>}
     </>
  )
}

export default App
