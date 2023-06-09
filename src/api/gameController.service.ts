/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { JoinClassDto } from '../model/joinClassDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GameControllerService {

    protected basePath = 'http://blankgame.duckdns.org/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createGame(user: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public createGame(user: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public createGame(user: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public createGame(user: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling createGame.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user !== undefined && user !== null) {
            queryParameters = queryParameters.set('user', <any>user);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('post',`${this.basePath}/game`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param uuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGame(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getGame(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getGame(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getGame(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getGame.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/game/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param uuid
     * @param user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWord(uuid: string, user: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getWord(uuid: string, user: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getWord(uuid: string, user: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getWord(uuid: string, user: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getWord.');
        }

        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling getWord.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/game/${encodeURIComponent(String(uuid))}/user/${encodeURIComponent(String(user))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public joinToGame(body: JoinClassDto, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public joinToGame(body: JoinClassDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public joinToGame(body: JoinClassDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public joinToGame(body: JoinClassDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling joinToGame.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<string>('post',`${this.basePath}/game/join`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param uuid
     * @param user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public startGame(uuid: string, user: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public startGame(uuid: string, user: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public startGame(uuid: string, user: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public startGame(uuid: string, user: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling startGame.');
        }

        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling startGame.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user !== undefined && user !== null) {
            queryParameters = queryParameters.set('user', <any>user);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('post',`${this.basePath}/game/${encodeURIComponent(String(uuid))}/start`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
