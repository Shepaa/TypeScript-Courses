"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
class Observable {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (!this.observers.includes(observer))
            this.observers.push(observer);
    }
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (!~index)
            this.observers.splice(index, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}
exports.Observable = Observable;
