import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiServer: string = "http://localhost/mobiweb/";
    public ApiUrl: string = "api/movies";
    public ServerWithApiUrl: string = this.ApiServer + this.ApiUrl;
} 