/**
 * Generated by orval v6.5.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpContext
} from '@angular/common/http'
import {
  Injectable
} from '@angular/core'
import {
  Observable
} from 'rxjs'
import type {
  Pets,
  ListPetsParams,
  CreatePetsBody,
  Pet
} from '../../model'
import listPetsMutator from '../../mutator/response-type'


type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};



@Injectable({ providedIn: 'root' })
export class PetsService {
  constructor(
    private http: HttpClient,
  ) {}/**
 * @summary List all pets
 */
 listPets<TData = Pets>(
    params?: ListPetsParams,
    version= 1,
 ) {
      return listPetsMutator<TData>(
      {url: `/v${version}/pets`, method: 'get',
        params,
    },
      this.http,
      );
    }
  /**
 * @summary Create a pet
 */
 createPets<TData = void>(
    createPetsBody: CreatePetsBody,
    version= 1, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.post<TData>(
      `/v${version}/pets`,
      createPetsBody,options
    );
  }
/**
 * @summary Info for a specific pet
 */
 showPetById<TData = Pet>(
    petId: string,
    version= 1, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `/v${version}/pets/${petId}`,options
    );
  }
};
