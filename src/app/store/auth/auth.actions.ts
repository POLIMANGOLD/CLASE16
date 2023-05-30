import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/login/models";

 export const establecerUsuarios =createAction (
    '[auth] establecer Usuarios',
    props<{payload: Usuario}>(), 
    
 );