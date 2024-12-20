import "../Components/calculator.css"
import { useState, useEffect } from "react";
import * as math from "mathjs"

export default function Calculator() {

    const [sum, setSum] = useState("");
    const [calculatorValue, setCalculatorValue] = useState("");
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Du har använt likamed tecknet ${count} antal gånger!`;
        
      });

    const handleClick = (e) => {
        const btnNumber = e.target.name;

        if (isNaN(btnNumber)) {
            if (calculatorValue && calculatorValue !== btnNumber) {
                setCalculatorValue(btnNumber);
                setSum(sum.slice(0, -1).concat(btnNumber));
            } else if (!calculatorValue) {
                setCalculatorValue(btnNumber);
                setSum(sum.concat(btnNumber));
            }
        } else {
            if (calculatorValue) {
                if(sum.slice(-1) === calculatorValue) {
                    setSum(sum.concat(btnNumber));
                } else {
                    setSum(sum + calculatorValue + btnNumber);
                }
                setCalculatorValue("");
            } else{
                setSum (sum.concat(btnNumber));
            }
        }
    };

    const clearSum = () => {
        setSum("");
        setCalculatorValue("");
    };

    const calculateSum =() => {
        try {
            setSum(math.evaluate(sum).toString());
            setCalculatorValue("");

        } catch (error) {
            setSum("Error")
        }
    };

    const backSum = () => {
        setSum(sum.slice(0, -1));
        setCalculatorValue("");
    };
    
    function Welcome(props) {
        return <div className="welcomeDiv"><h1 className="welcome">{props.name}</h1></div>;
      }


    return(
    <div>
        <div className="mainDiv">
            <form>
                <input type="text" value={sum} />
            </form>
            <div className="btnDiv">
                <button className="pinkBtn" onClick={backSum} id="backSum">C</button>
                <button className="pinkBtn" name="/" onClick={handleClick}>&divide;</button>
                <button className="pinkBtn" onClick={clearSum} id="clearSum">Clear</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className="pinkBtn" name="-" onClick={handleClick}>&ndash;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className="pinkBtn" name="*" onClick={handleClick}>&times;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className="pinkBtn" name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button className="pinkBtn" name="." onClick={handleClick}>.</button>
                <button className="pinkBtn" name="=" onClick={ () => {calculateSum(); setCount(count + 1);}} id="sum">=</button>

            </div>
        </div>
        <Welcome name="Välkommen till miniräknaren!" />
         <div className="welcomeDiv">
            <h1 className="countNumber">Du har använt likamed tecknet {count} antal gånger!</h1>
         </div>
    </div>
    ); 
    
}