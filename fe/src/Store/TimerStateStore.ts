import { Category } from "../Models/Category";
import { TimerState } from "../Models/TimerState";
import { ToomatoSummary } from "../Models/ToomatoSummary";
import { EntityStore } from "./EntityStore";

export class TimerStateStore extends EntityStore<TimerState> {
    change(values: Partial<TimerState>) {
        let newState = {
            ...this.subject.value,
            ...values
        }
        this.next(newState);
    }
}