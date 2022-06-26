import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getCurrentUser } from './Auth';

interface userInterface {
    displayName: string;
    email: string;
}

const userInitialState = { displayName: 'Anonymous', email: '' } as userInterface;

let user = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        updateUser(state) {
            let user = getCurrentUser();
            state.displayName = user?.displayName ?? 'anonymous';
            state.email = user?.email ?? '';
        },
        resetUser(state) {
            state.displayName = 'anonymous';
            state.email = '';
        }
    }
});


export const store = configureStore({
    reducer: {
        user: user.reducer
    }
}) 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export let { updateUser, resetUser } = user.actions;