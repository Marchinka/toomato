import { BehaviorSubject, Observer, Subject, Subscription } from 'rxjs';

export class EntityStore<T> {
    protected subject: BehaviorSubject<T>;

    constructor(initialValue: T) {
        this.subject = new BehaviorSubject<T>(initialValue);
    }

    subscribe(next?: ((value: T) => void) | null, error?: ((error: any) => void) | null, complete?: (() => void) | null) : Subscription {
        return this.subject.subscribe(next);
    }

    next(value: T) {
        return this.subject.next(value);
    }

}