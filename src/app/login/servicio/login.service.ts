import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, Subject, map} from 'rxjs';
import { Usuario } from '../models';
import { HttpClient } from '@angular/common/http';
import { _isTestEnvironment } from '@angular/cdk/platform';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { establecerUsuarios } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selector';
import { NavItem } from 'src/app/dashboard/toolbar/nav-item';




export interface LoginFormValue {
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {
   
loginUser$ = new BehaviorSubject <Usuario | null >(null);

  constructor(private router: Router,
    private httpClient: HttpClient,
    private store: Store <AppState>,) { }
  

  establecerUsuarioAutenticado (usuario: Usuario) : void{
    this.store.dispatch (establecerUsuarios ({payload: usuario}))
  }

  
  obtenerUsuarioAutenticado() : Observable<Usuario| null > {
    return this.store.select (selectAuthUser);
  }


  getVeryFyRole(link: NavItem): Observable<boolean>{
    return this.loginUser$.pipe(
      map((usuarioAuth) => link.allowedRoles.some((r) =>r === usuarioAuth?.role)));
  }

  login (formValue: LoginFormValue):void {
   this.httpClient.get <Usuario []>(
    'http://localhost:3000/usuarios',
    {
      params:{
        ...formValue
      },
    }
   ).subscribe({
    next: (usuarios) =>{
       const usuarioAutenticado = usuarios [0];
      if (usuarioAutenticado){
        localStorage.setItem('token', usuarioAutenticado.token)
        this.establecerUsuarioAutenticado (usuarioAutenticado);
        this.router.navigate(['dashboard'])
      } else{
        alert ('Usuario y/o contraseña incorrectos')
      }
    }
   })
  }




   verificarToken(): Observable <Boolean>{
    const token= localStorage.getItem ('token');
     return this.httpClient.get <Usuario []> (` http://localhost:3000/usuarios?token=${token}`)
    .pipe(
      map ((usuarios) =>{
        const usuarioAutenticado = usuarios [0];
        if (usuarioAutenticado){
          localStorage.setItem('token', usuarioAutenticado.token)
          this.establecerUsuarioAutenticado (usuarioAutenticado)
         }
      return !!usuarioAutenticado;
        })
      );

 }

}


