import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    

    if (this.auth.getToken() != null) {
      this.router.navigateByUrl('/');                                              // Comprobamos si el usuario tiene un token, si lo tiene lo redirigimos a la aplicación
    }

    /**
     * Este código nos permite cambiar el texto de bienvenida de la aplicación
     */
    const typed = new Typed('.typed', {
      strings: [
                ' Practises management',
                ' Administrador de prácticas'                                            // Texto
      ],
      typeSpeed: 75,                                                                     // Velocidad de tipado
      shuffle: true,                                                                     // Aleatorio
      backSpeed: 50,                                                                     // Velocidad de borrado
      loop: true,                                                                        // Repetir
      cursorChar: '<span id="color">_</span>',                                           // Cursor
      fadeOutClass: 'typed-fade-out',                                                    // Clase al tipear
      backDelay: 1500                                                                    // Tiempo de retorno
  });
  }

  toggleMenu() {
    let actions = document.querySelector('#actions') as HTMLDivElement;

    if (actions.classList.contains('noShowMenu')) {
      actions.classList.remove('noShowMenu');
    }
    else {
      actions.classList.add('noVisibility');
      
      setTimeout(() => {
        actions.classList.add('noShowMenu');
        actions.classList.remove('noVisibility');

      }, 500)
    }
  }

}
