import { useState } from "react";

export default function UserInput({onInput,userInput}){

    return(
        <section id="user-input">
            <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => onInput('initialInvestment',event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => onInput('annualInvestment',event.target.value)} />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => onInput('expectedReturn',event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration}  onChange={(event) => onInput('duration',event.target.value)}/>
            </p>
            </div>
        </section>
    );
}