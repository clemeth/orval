/*
 * Generated by orval v2.5.9 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { AxiosInstance, AxiosPromise } from 'axios';
import faker from 'faker';
import { ListPetsParams, Pet, Pets } from '../model';

export interface SwaggerPetstoreApi {
  // List all pets
  listPets(params?: ListPetsParams, version?: number): AxiosPromise<Pets>;
  // Create a pet
  createPets(version?: number): AxiosPromise<unknown>;
  // Info for a specific pet
  showPetById(
    petId: string,
    testId: string,
    version?: number,
  ): AxiosPromise<Pet>;
}

export const getSwaggerPetstoreApi = (
  axios: AxiosInstance,
): SwaggerPetstoreApi => ({
  listPets(params?: ListPetsParams, version = 1): AxiosPromise<Pets> {
    type Mutator = <T>(url: string, config?: T) => [string, T | undefined];

    const mutator: Mutator = (url, config) => [
      url,
      { ...config, responseType: 'json' },
    ];

    return axios.get(
      ...mutator(`/v${version}/pets`, {
        params,
      }),
    );
  },
  createPets(version = 1): AxiosPromise<unknown> {
    return axios.post(`/v${version}/pets`, undefined);
  },
  showPetById(petId: string, testId: string, version = 1): AxiosPromise<Pet> {
    return axios.get(`/v${version}/pets/${petId}/test/${testId}`);
  },
});

export const getSwaggerPetstoreApiMock = (): SwaggerPetstoreApi => ({
  listPets(params?: ListPetsParams, version?: number): AxiosPromise<Pets> {
    return Promise.resolve(
      [...Array(faker.random.number({ min: 1, max: 10 }))].map(() => ({
        id: 6,
        name: 'jon',
        tag: 'jon',
      })),
    ).then((data) => ({ data })) as AxiosPromise<Pets>;
  },
  createPets(version?: number): AxiosPromise<unknown> {
    return Promise.resolve(undefined).then((data) => ({
      data,
    })) as AxiosPromise<unknown>;
  },
  showPetById(
    petId: string,
    testId: string,
    version?: number,
  ): AxiosPromise<Pet> {
    return Promise.resolve(
      (() => ({
        id: faker.random.number({ min: 1, max: 99 }),
        name: faker.name.firstName(),
        tag: faker.helpers.randomize([faker.random.word(), undefined]),
      }))(),
    ).then((data) => ({ data })) as AxiosPromise<Pet>;
  },
});
