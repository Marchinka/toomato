import { Category } from "./Category";

type TimerPhase = "CategoryChoice" | "InProgress" | "Completed";

export interface TimerState {
    phase: TimerPhase;
    started: boolean;
    running: boolean;
    elapsedSeconds: number;
    category: Category | null;
}


export const INITIAL_TIMER_STATE : TimerState = {
    phase: "CategoryChoice",
    started: false,
    running: false,
    elapsedSeconds: 0,
    category: null
};  