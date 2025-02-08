import { PayloadAction, SerializedError } from "@reduxjs/toolkit";

export interface IState {
    loading: boolean;
    error: string | null;
}

export const handlePending = <T extends IState>(state: T) => {
    state.loading = true;
    state.error = null;
};

export const handleRejected = <T extends IState>(state: T, action: PayloadAction<unknown>) => {
    state.loading = false;
    if (typeof action.payload === "string") {
        state.error = action.payload;
    } else if ((action.payload as SerializedError)?.message) {
        state.error = (action.payload as SerializedError).message || "Unknown error";
    } else {
        state.error = "An error occurred";
    }
};
