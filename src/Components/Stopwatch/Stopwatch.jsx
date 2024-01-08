import React, { useState } from 'react'
import './Stopwatch.css'
function Stopwatch() {
    let [ hours,setHours] = useState(0)
    let [minutes, setMinutes] = useState(0)
    let[seconds , setSeconds] = useState (0);
    let [millisec,setMillisec]=useState(0);
    let [interval,setIntervals]=useState(null)
    let startStopWatch =()=>{
        if(!interval){
            let id= setInterval(()=>{
                setMillisec(millisec++)
                if(millisec >= 60){
                    setSeconds(seconds++)
                    millisec = 0;
                    if(seconds >= 60){
                        setMinutes(minutes++)
                        seconds = 0;
                    }
                    if(minutes >=60){
                        setHours(hours++)
                        minutes = 0
                    }
                }
            },10)
            setIntervals(id)
        }
    }
    let stopStopWatch=()=>{
        clearInterval(interval)
        setIntervals(null)
    }
    let resetStopWatch =()=>{
        stopStopWatch()
        setHours(0);
        setMinutes(0);
        setSeconds(0)
        setMillisec(0);
    }

  return (
    <div>
        <div className='stopWatch mt-5'>
            <div className="container">
                <div className="row">
                    <h2 className='mt-4'>Stop Watch</h2>
                    <div className="d-flex sw mt-5">
                        <p><span style={hours <10 ?{display : 'block'}: {display : 'none'}}>0</span>{hours}</p>
                        <p>:</p>
                        <p><span style={minutes <10 ?{display : 'block'}: {display : 'none'}}>0</span>{minutes}</p>
                        <p>:</p>
                        <p><span style={seconds <10 ?{display : 'block'}: {display : 'none'}}>0</span>{seconds}</p>
                        <p>:</p>
                        <p><span style={millisec <10 ?{display : 'block'}: {display : 'none'}}>0</span>{millisec}</p>
                    </div>
                    <div className=" bttns mt-5">
                        <button onClick={startStopWatch} className='btn btn-success'>Start</button>
                        <button onClick={stopStopWatch} className='btn btn-warning'>Stop</button>
                        <button onClick={resetStopWatch} className='btn btn-danger'>Reset</button>
                    </div>
                </div>
            </div>
            {/* <div className="main"> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default Stopwatch