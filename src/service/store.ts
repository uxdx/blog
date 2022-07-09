import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './Auth';

interface userInterface {
    displayName: string;
    email: string;
}

const userInitialState = { displayName: 'Anonymous', email: '' } as userInterface;

const user = createSlice({
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

const loginModal = createSlice({
    name: 'loginModal',
    initialState: false,
    reducers: {
        loginModalOpen(){
            return true;
        },
        loginModalClose(){
            return false;
        }
    }
})



export const store = configureStore({
    reducer: {
        user: user.reducer,
        loginModal: loginModal.reducer
    }
}) 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export let { updateUser, resetUser } = user.actions;
export let { loginModalOpen, loginModalClose } = loginModal.actions;