import { Component, OnDestroy } from '@angular/core';
import links, { NavItem } from './nav-item';
import { Router } from '@angular/router';
import { LoginServicioService } from 'src/app/login/servicio/login.service';
import { AuthState } from 'src/app/store/auth/auth.reducer';
import { Usuario } from 'src/app/login/models';
import { BehaviorSubject, Observable, Subject, Subscription, map } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {
  showFiller = false;

  links = links;

  suscripcionLoginUser:Subscription | null =null;

 loginUser: Usuario|null =null;

  constructor (
    private router: Router,
    private loginService: LoginServicioService,
    
   
  ){
    this.suscripcionLoginUser = this.loginService.obtenerUsuarioAutenticado().subscribe((usuario) => this.loginUser = usuario)
  }
  ngOnDestroy(): void {
   this.suscripcionLoginUser?.unsubscribe();
  }
  loginUser$ = new Subject <Usuario | null >;

  getVeryFyRole(link: NavItem): Observable<Boolean>{
  return this.loginUser$.pipe(
  map((usuarioAuth) => link.allowedRoles.some((r) =>r === usuarioAuth?.role)));}

  logout (): void {
    this.router.navigate (['login']);
    localStorage.removeItem('token');

  }
}


