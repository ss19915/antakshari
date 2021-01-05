import React from 'react';
import { updateTimer } from '../../actions/actions';
import Timer from './Timer';

class TimerLogic extends React.Component {
    constructor(props){
        super(props);
        this.isTimerActive = false;
        this.timerLastUpdateTime = null;
    }

    startTimer() {
        setTimeout( () => {
            const { timer, updateTimer, pauseTimer } = this.props;
            const { time } = timer;
            let lastUpdatedDuration = new Date() - this.timerLastUpdateTime;
            console.log(lastUpdatedDuration );
            if(this.isTimerActive && time > 0 && lastUpdatedDuration > 1000){
                this.timerLastUpdateTime = new Date();
                updateTimer( time - 1);
                this.startTimer();
            }
            
            if(time < 1 && timer.active){
                pauseTimer();
            }

        }, 1000);
    }

    render() {
        const {
            timer,
        } = this.props;

        this.timer = timer;
        if(timer.active && !this.isTimerActive){
            this.isTimerActive = true;
            this.startTimer();
        }
        else if ( !timer.active && this.isTimerActive ){
            this.isTimerActive =  false;
        }

        return (
            <Timer {...this.props} />
        );
    }
}

export default TimerLogic;