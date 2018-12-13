export class DayCounter{

    private startTime: string;
    private days;
    private hours;
    private minutes;
    private seconds;

    constructor(){
        this.startTime = '2018-03-26T23:00:00';
        this.initCounter();
    }

    private getTimeElapsed(): void {
        var t = Date.parse(new Date().toString()) - Date.parse(this.startTime);
        this.days = Math.floor(t / (1000 * 60 * 60 * 24));
        this.hours = ('0' + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
        this.minutes = ('0' + Math.floor((t / 1000 / 60) % 60)).slice(-2);
        this.seconds = ('0' + Math.floor((t / 1000) % 60)).slice(-2);
    }

    initCounter(){
        var self = this;
        var timeInterval = setInterval(function(){
            self.getTimeElapsed();
        }, 1000);
    }

    // getters
    
    getDays(){
        return this.days;
    }

    getHours(){
        return this.hours;
    }

    getMinutes(){
        return this.minutes;
    }

    getSeconds(){
        return this.seconds;
    }

}