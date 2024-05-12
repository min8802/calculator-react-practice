import { useState } from "react";
import Button from "./Button";
import ButtonNumber from "../functions/ButtonNumber";
import ButtonOperator from "../functions/ButtonOperator";
import ButtonEnter from "../functions/ButtonEnter";

const Calculator = () => {

    const [result, setResult] = useState("0");
    const [operator, setOperator] = useState("");
    const [temp, setTemp] = useState("0");

    return (
        <div className="bg-green-300">
            <div className="p-8 bg-white">{result}</div>
            <div className="grid grid-cols-4">
                <ButtonNumber name={1} setResult={setResult} result={result}/>
                <ButtonNumber name={2} setResult={setResult} result={result}/>
                <ButtonNumber name={3} setResult={setResult} result={result}/>
                <ButtonOperator name={"+"} setResult={setResult} setOperator={setOperator} result={result} setTemp={setTemp}/>
                <ButtonNumber name={4} setResult={setResult} result={result}/>
                <ButtonNumber name={5} setResult={setResult} result={result}/>
                <ButtonNumber name={6} setResult={setResult} result={result}/>
                <ButtonNumber name={"-"} setResult={setResult} result={result}/>
                <ButtonNumber name={7} setResult={setResult} result={result}/>
                <ButtonNumber name={8} setResult={setResult} result={result}/>
                <ButtonNumber name={9} setResult={setResult} result={result}/>
                <ButtonNumber name={"*"} setResult={setResult}/>
                <ButtonEnter name={"Enter"} setResult={setResult} result={result} operator={operator} temp={temp}/>
                <ButtonNumber name={"0"} setResult={setResult} result={result}/>
                <ButtonNumber name={"Del"} setResult={setResult}/>
                <ButtonNumber name={"/"} setResult={setResult}/>
            </div>
        </div>
    );
};

export default Calculator;