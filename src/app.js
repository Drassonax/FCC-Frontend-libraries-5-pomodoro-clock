import React from 'react'
import ReactDOM from 'react-dom'
import Break from './components/Break'
import Session from './components/Session'
import Timer from './components/Timer'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

class PomodoroClock extends React.Component {
    constructor(props) {
        super(props)
        this.intervalId = ''
        this.beep
        this.incrementBreak = this.incrementBreak.bind(this)
        this.decrementBreak = this.decrementBreak.bind(this)
        this.incrementSession = this.incrementSession.bind(this)
        this.decrementSession = this.decrementSession.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.switchIsRunning = this.switchIsRunning.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.startOrStop = this.startOrStop.bind(this)
        this.displayTimer = this.displayTimer.bind(this)
        this.beepBeep = this.beepBeep.bind(this)
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMin: 25,
            timerSec: 0,
            displayTimer: '25:00',
            timerIsSession: true,
            isRunning : false,
            timerLabel: 'Session'
        }
    }
    componentDidMount() {
        this.beep = document.getElementById('beep')
    }
    incrementBreak = () => {
        if (!this.state.isRunning) {
            if (this.state.breakLength < 60) {
                this.setState({
                    breakLength: this.state.breakLength + 1,
                    timerIsSession: true,
                    timerLabel: 'Session'
                })
            }
        }
    }
    decrementBreak = () => {
        if (!this.state.isRunning) {
            if (this.state.breakLength > 1) {
                this.setState({
                    breakLength: this.state.breakLength -1,
                    timerIsSession: true,
                    timerLabel: 'Session'
                })
            }
        }
        
    }
    incrementSession = () => {
        if (!this.state.isRunning) {
            if (this.state.sessionLength < 60) {
                this.setState({
                    sessionLength: this.state.sessionLength + 1,
                    timerMin: this.state.sessionLength + 1,
                    timerSec: 0,
                    timerIsSession: true,
                    timerLabel: 'Session'
                }, this.displayTimer) 
            }
        }
        
    }
    decrementSession = () => {
        if (!this.state.isRunning) {
            if (this.state.sessionLength > 1) {
                this.setState({
                    sessionLength: this.state.sessionLength - 1,
                    timerMin: this.state.sessionLength - 1,
                    timerSec: 0,
                    timerIsSession: true,
                    timerLabel: 'Session'
                }, this.displayTimer)
            }
        }
    }
    resetTimer = () => {
        this.beep.pause()
        this.beep.currentTime = 0
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timerMin: 25,
            timerSec: 0,
            timerIsSession: true,
            isRunning: false,
            timerLabel: 'Session'
        }, this.displayTimer)
        if (this.intervalId !== '') {
            clearInterval(this.intervalId)
        }
    }
    switchIsRunning = () => {
        this.setState({ isRunning: !this.state.isRunning })
    }

    startTimer = () => {
        this.intervalId = setInterval(() => {
            if (this.state.timerMin === 0 && this.state.timerSec === 0) {
                this.beepBeep()
                if (this.state.timerIsSession) {
                    this.setState({
                        timerIsSession: !this.state.timerIsSession,
                        timerLabel: 'Break',
                        timerMin: this.state.breakLength,
                        timerSec: 0
                    }, this.displayTimer)
                } else {
                    this.setState({
                        timerIsSession: !this.state.timerIsSession,
                        timerLabel: 'Session',
                        timerMin: this.state.sessionLength,
                        timerSec: 0
                    })
                }
            } else if (this.state.timerSec === 0) {
                this.setState({ 
                    timerMin: this.state.timerMin - 1,
                    timerSec: 59
                 }, this.displayTimer)
            } else {
                this.setState({ 
                    timerSec: this.state.timerSec - 1
                 }, this.displayTimer)
            }
        }, 1000)
    }
    stopTimer = () => {
        this.setState({ isRunning: false })
        clearInterval(this.intervalId)

    }
    startOrStop = () => {
        if (this.state.isRunning) {
            this.switchIsRunning()
            this.stopTimer()
        } else {
            this.switchIsRunning()
            this.startTimer()
        }
    }
    displayTimer = () => {
        let minutes
        let seconds
        if (this.state.timerSec < 10) {
            seconds = `0${this.state.timerSec}`
        } else {
            seconds = `${this.state.timerSec}`
        }
        if (this.state.timerMin < 10) {
            minutes = `0${this.state.timerMin}`
        } else {
            minutes = `${this.state.timerMin}`
        }
        this.setState({ displayTimer: `${minutes}:${seconds}`})
    }
    beepBeep = () => {
        this.beep.currentTime = 0
        this.beep.play()
    }

    render() {
        return (
            <div>
                <div id="title">Pomodoro clock</div>
                <Break 
                  breakLength={this.state.breakLength}
                  incrementBreak={this.incrementBreak}
                  decrementBreak={this.decrementBreak}
                />
                <Session 
                  sessionLength={this.state.sessionLength}
                  incrementSession={this.incrementSession}
                  decrementSession={this.decrementSession}
                />
                <Timer 
                  resetTimer={this.resetTimer}
                  sessionLength={this.state.sessionLength}
                  timer={this.state.displayTimer}
                  timerLabel={this.state.timerLabel}
                  switchIsRunning={this.switchIsRunning}
                  startOrStop={this.startOrStop}
                />
                <audio src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" id="beep"></audio>
            </div>
        )
    }
}

ReactDOM.render(<PomodoroClock />, document.getElementById('root'))