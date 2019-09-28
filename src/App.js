
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            millisec: 0
        }
    }

    handleCntDwn = (e) => {
        e.preventDefault();
        
        this.timer = setInterval(() => {
            const { min, sec, millisec } = this.state;
            if (millisec > 0) {
                this.setState(({ millisec}) => ({
                    millisec: millisec - 1
                }))

            }
            else {
                if (sec > 0) {
                    this.setState(({ sec}) => ({
                        sec: sec - 1,
                        millisec: 59
                    }))
                } else {
                    if (min === 0) {
                        clearInterval(this.timer);
                    } else {
                        this.setState(({min}) => ({
                            min: min - 1,
                            sec: 59,
                        }))
                    }
                }

            }
        }, 1000 / 60);
    
    }
    timerStop(e){
        e.preventDefault();
        clearInterval(this.timer)
    }
    render() {
        const { min, sec, millisec } = this.state;
        return (
            <div className = "center">
                <h1>COUNTDOWN</h1>
                <hr></hr>
                <br></br>
                Minutes : <input onChange={e => this.setState({ min: e.target.value })}></input>
                <br></br><br></br>
                Seconds : <input onChange={e => this.setState({ sec: e.target.value })}></input>
                <br></br><br></br>
                Milliseconds : <input onChange={e => this.setState({ millisec: e.target.value })}></input>
                <br></br><br></br>
               
                    <button className = "button1" onClick={e => this.handleCntDwn(e)}>Start</button>&nbsp;
                    <button  className = "button1" onClick={e => this.timerStop(e)}>Stop</button>
                <br></br><br></br>
                <h1>{min} : {sec} : {millisec}</h1>
                <br></br>
                <br></br>
            </div>

        )

    }
}


export default App;
