import {IObserver} from "../IObserver";

export class SmsNotification implements IObserver {
    update(): void {
        console.info(`Notification: task status has been changed.`)
    }

}