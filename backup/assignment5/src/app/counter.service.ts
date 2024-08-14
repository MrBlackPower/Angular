export class CounterService {
    toActive = 0;
    toInactive = 0;

    incrementToActive(){
        this.toActive++;
        console.log(this.toActive);
    }

    incrementToInactive(){
        this.toInactive++;
        console.log(this.toInactive);
    }
}