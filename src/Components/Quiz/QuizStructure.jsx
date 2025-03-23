import React, { useState } from 'react';
import "/src/assets/css/quiz.css";
import Showresult from './Showresult';

export default function QuizStructure({ Questions, path }) {
    const [currQues, setCurrQues] = useState(0);
    const [result, setResult] = useState(0);
    const [isLast, setIsLast] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({}); 

    let Score = () => {
        if (selectedAnswers[currQues] === Questions[currQues].Answer) {
            setResult(prevResult => prevResult + 1);
        }
    };

    let nextHandle = () => {
        if (!selectedAnswers[currQues]) {
            alert("Please select an answer before continuing!");
            return;
        }

        Score();

        if (currQues < Questions.length - 1) {
            setCurrQues(currQues + 1);
        } else {
            setIsLast(true);
        }
    };

    let prevHandle = () => {
        if (currQues > 0) {
            setCurrQues(currQues - 1);
        }
    };

    let resetAll = () => {
        setCurrQues(0);
        setResult(0);
        setIsLast(false);
        setSelectedAnswers({});
    };

    return (
        <>
            <div className="Quiz" style={{margin:'100px auto 0'}}>
                <h2 className='text-center mb-5 heading'>Quiz page</h2>

                <div className="container bg-primary">
                    {isLast ? (
                        <Showresult result={result} total={Questions.length} tryAgain={resetAll} path={path} />
                    ) : (
                        <>
                            <div className="question">
                                <span>{currQues + 1}.&nbsp;
                                    <span>{Questions[currQues].Question}</span>
                                </span>
                            </div>
                            <div className="option">
                                {Questions[currQues].Options.map((el, i) =>
                                   <button
                                   className={`w-100 my-2 btn ${selectedAnswers[currQues] === el ? "selected-answer" : "btn-second"}`}
                                   key={i}
                                   onClick={() => setSelectedAnswers({ ...selectedAnswers, [currQues]: el })}
                               >
                                   {el}
                               </button>
                               
                                )}
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <button className=' text-white' style={{
                                    background: 'none',
                                    border: 'none',
                                    marginBottom: '20px'
                                }} onClick={prevHandle} disabled={currQues === 0}>Back</button>
                                <button className=' text-white' style={{
                                    background: 'none',
                                    border: 'none',
                                    marginBottom: '20px'
                                }} onClick={nextHandle}>Next</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
