import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/login/models";
import { establecerUsuarios } from "./auth.actions";

export const authFeatureKey= 'auth';

export interface AuthState {
    authUser: Usuario | null;
}

export const initialState: AuthState ={
    authUser: null,
}

export const authReducer = createReducer (
    initialState,

    on (establecerUsuarios, (currentState, {payload})=> {
        return{
            authUser: payload
        }
    })
    )