import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {LoggingInterceptor} from './logging-interceptor';
import {environment} from '../../environments/environment';

export const httpInterceptorProviders = [];
httpInterceptorProviders.push({provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true});

/**
 * If I export it like below, that is OK both for JIT & AOT.
 * But I want to use environment.production to load dynamic providers in different evn.
 * Like this LoggingInterceptor, it wouldn't exist in production.
 * */
// export const httpInterceptorProviders = [
//   {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
// ];

