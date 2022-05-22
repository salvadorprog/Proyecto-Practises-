import { Injectable } from '@angular/core';
import { PersonDto } from '../../../../../../core/Interfaces/personDto/person-dto';
import * as CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { environment } from '../../../../../../../environments/environment';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  /**
   * Crea una nueva persona
   * @param newPerson Datos de la nueva persona
   * @returns Persona creada
   */
  createNewPerson(newPerson: PersonDto) {
    newPerson.password = CryptoJS.MD5(newPerson.password + '').toString();                                  // Encriptamos la contraseña
    
    return this.http.post<PersonDto>(environment.serverAddress + '/auth/register', newPerson , this.auth.getHeadersToken());    // Lanzamos la petición
  }

}
