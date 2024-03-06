import {IObservable} from "./IObservable";
import {IObserver} from "./IObserver";

export abstract class Observable implements IObservable {
    private readonly observers: IObserver[] = [];

    public attach(observer: IObserver): void {
        if (!this.observers.includes(observer)) this.observers.push(observer)
    }

    public detach(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (!~index) this.observers.splice(index, 1)
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update()
        }
    }

}