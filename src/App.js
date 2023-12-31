import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Study Harder 💼",
    "Buil Projects on React 🥲",
    "Find Job In React 🤑",
];
// we are using useState hook
//// React hooks with use like useState, useEffect and hooks cannot be called inside function like below and do not step state manually
// //function aplha(){
//    // const [step,setStep] = useState(1);
////    alert("hello previous");
//    // if (step>1){
//        // setStep( step - 1);
//    // }
// //}
export default function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true)
    // console.log(arr);
    // // which step we are in
    // const step = 1;
    // handle click events in react
    function handlePrevious() {
        // alert("hello previous");
        if (step > 1) {
           setStep((s)=> s-1)
        }
    }
    function handleNext() {
        // alert("hello next");
        if (step < 4) {
            setStep(step + 1);
            // other of increasing step to 2
            // setStep((s)=> s+1)
            // setStep((s)=> s+1)
        }
    }
    // content to be rendered in root container
    return <>
        {/* this button code uses a useState hook to open and close the div container with className steps */}
        <button className="close" onClick={()=>setIsOpen((is)=>!is)}>&times;</button>
        {isOpen &&(
        <div className="steps">
            <div className="numbers">
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
                <div className={`${step >= 4 ? 'active' : ''}`}>4</div>

            </div>
            <p className="message">Step {step} : {messages[step - 1]}</p>
            <div className="buttons">
                <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>Previous</button>
                <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>Next</button>

            </div>
        </div>
    )}</>
};