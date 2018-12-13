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
        this.hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        this.minutes = Math.floor((t / 1000 / 60) % 60);
        this.seconds = Math.floor((t / 1000) % 60);
    }

    initCounter(){
        var self = this;
        var timeInterval = setInterval(function(){
            self.getTimeElapsed();
            console.log("days: " + self.days);
            console.log("hours: " + ('0' + self.hours).slice(-2));
            console.log("minutes: " + ('0'+self.minutes).slice(-2));
            console.log("seconds: " + ('0'+self.seconds).slice(-2));
        }, 1000);
    }

    
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