// tslint:disable
/**
 * stackprint-notes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    author: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    text: string;
}
/**
 * 
 * @export
 * @interface NoteParams
 */
export interface NoteParams {
    /**
     * 
     * @type {string}
     * @memberof NoteParams
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NoteParams
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof NoteParams
     */
    text: string;
}

/**
 * NoteApi - axios parameter creator
 * @export
 */
export const NoteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new note
         * @param {NoteParams} [noteParams] Note creation parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNote(noteParams?: NoteParams, options: any = {}): RequestArgs {
            const localVarPath = `/notes`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["API-Key"] = localVarApiKeyValue;
            }

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof noteParams !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(noteParams !== undefined ? noteParams : {}) : (noteParams || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a note
         * @param {string} id The identifier of the object to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNote(id: string, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNote.');
            }
            const localVarPath = `/notes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["API-Key"] = localVarApiKeyValue;
            }

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a single note
         * @param {string} id The identifier of the object to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNote(id: string, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getNote.');
            }
            const localVarPath = `/notes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["API-Key"] = localVarApiKeyValue;
            }

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List notes
         * @param {string} [sort] Sort results by the specified properties and orders
         * @param {number} [limit] Limit the number of results returned
         * @param {number} [skip] Skip the given number of results
         * @param {string} [id] Filter results by id
         * @param {string} [author] Filter results by author
         * @param {string} [text] Filter results by text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotes(sort?: string, limit?: number, skip?: number, id?: string, author?: string, text?: string, options: any = {}): RequestArgs {
            const localVarPath = `/notes`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["API-Key"] = localVarApiKeyValue;
            }

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (author !== undefined) {
                localVarQueryParameter['author'] = author;
            }

            if (text !== undefined) {
                localVarQueryParameter['text'] = text;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing note
         * @param {string} id The identifier of the object to get
         * @param {NoteParams} [noteParams] Note update parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNote(id: string, noteParams?: NoteParams, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateNote.');
            }
            const localVarPath = `/notes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["API-Key"] = localVarApiKeyValue;
            }

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof noteParams !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(noteParams !== undefined ? noteParams : {}) : (noteParams || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NoteApi - functional programming interface
 * @export
 */
export const NoteApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new note
         * @param {NoteParams} [noteParams] Note creation parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNote(noteParams?: NoteParams, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Note> {
            const localVarAxiosArgs = NoteApiAxiosParamCreator(configuration).createNote(noteParams, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete a note
         * @param {string} id The identifier of the object to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNote(id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = NoteApiAxiosParamCreator(configuration).deleteNote(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a single note
         * @param {string} id The identifier of the object to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNote(id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Note> {
            const localVarAxiosArgs = NoteApiAxiosParamCreator(configuration).getNote(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary List notes
         * @param {string} [sort] Sort results by the specified properties and orders
         * @param {number} [limit] Limit the number of results returned
         * @param {number} [skip] Skip the given number of results
         * @param {string} [id] Filter results by id
         * @param {string} [author] Filter results by author
         * @param {string} [text] Filter results by text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotes(sort?: string, limit?: number, skip?: number, id?: string, author?: string, text?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Note>> {
            const localVarAxiosArgs = NoteApiAxiosParamCreator(configuration).listNotes(sort, limit, skip, id, author, text, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an existing note
         * @param {string} id The identifier of the object to get
         * @param {NoteParams} [noteParams] Note update parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNote(id: string, noteParams?: NoteParams, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Note> {
            const localVarAxiosArgs = NoteApiAxiosParamCreator(configuration).updateNote(id, noteParams, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NoteApi - factory interface
 * @export
 */
export const NoteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create a new note
         * @param {NoteParams} [noteParams] Note creation parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNote(noteParams?: NoteParams, options?: any): AxiosPromise<Note> {
            return NoteApiFp(configuration).createNote(noteParams, options)(axios, basePath);
        },
        /**
         * 
         * @summary Delete a note
         * @param {string} id The identifier of the object to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNote(id: string, options?: any): AxiosPromise<void> {
            return NoteApiFp(configuration).deleteNote(id, options)(axios, basePath);
        },
        /**
         * 
         * @summary Get a single note
         * @param {string} id The identifier of the object to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNote(id: string, options?: any): AxiosPromise<Note> {
            return NoteApiFp(configuration).getNote(id, options)(axios, basePath);
        },
        /**
         * 
         * @summary List notes
         * @param {string} [sort] Sort results by the specified properties and orders
         * @param {number} [limit] Limit the number of results returned
         * @param {number} [skip] Skip the given number of results
         * @param {string} [id] Filter results by id
         * @param {string} [author] Filter results by author
         * @param {string} [text] Filter results by text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotes(sort?: string, limit?: number, skip?: number, id?: string, author?: string, text?: string, options?: any): AxiosPromise<Array<Note>> {
            return NoteApiFp(configuration).listNotes(sort, limit, skip, id, author, text, options)(axios, basePath);
        },
        /**
         * 
         * @summary Update an existing note
         * @param {string} id The identifier of the object to get
         * @param {NoteParams} [noteParams] Note update parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNote(id: string, noteParams?: NoteParams, options?: any): AxiosPromise<Note> {
            return NoteApiFp(configuration).updateNote(id, noteParams, options)(axios, basePath);
        },
    };
};

/**
 * NoteApi - object-oriented interface
 * @export
 * @class NoteApi
 * @extends {BaseAPI}
 */
export class NoteApi extends BaseAPI {
    /**
     * 
     * @summary Create a new note
     * @param {NoteParams} [noteParams] Note creation parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NoteApi
     */
    public createNote(noteParams?: NoteParams, options?: any) {
        return NoteApiFp(this.configuration).createNote(noteParams, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Delete a note
     * @param {string} id The identifier of the object to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NoteApi
     */
    public deleteNote(id: string, options?: any) {
        return NoteApiFp(this.configuration).deleteNote(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Get a single note
     * @param {string} id The identifier of the object to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NoteApi
     */
    public getNote(id: string, options?: any) {
        return NoteApiFp(this.configuration).getNote(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary List notes
     * @param {string} [sort] Sort results by the specified properties and orders
     * @param {number} [limit] Limit the number of results returned
     * @param {number} [skip] Skip the given number of results
     * @param {string} [id] Filter results by id
     * @param {string} [author] Filter results by author
     * @param {string} [text] Filter results by text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NoteApi
     */
    public listNotes(sort?: string, limit?: number, skip?: number, id?: string, author?: string, text?: string, options?: any) {
        return NoteApiFp(this.configuration).listNotes(sort, limit, skip, id, author, text, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Update an existing note
     * @param {string} id The identifier of the object to get
     * @param {NoteParams} [noteParams] Note update parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NoteApi
     */
    public updateNote(id: string, noteParams?: NoteParams, options?: any) {
        return NoteApiFp(this.configuration).updateNote(id, noteParams, options)(this.axios, this.basePath);
    }

}


