import {Component} from '@angular/core';
// import { HTTP_PROVIDERS } from 'angular2/http';
// import 'rxjs/Rx';   // Load all features
// import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {Listing} from './listing';

@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    /** This is a description of the foo function. */
    //directives: [ROUTER_DIRECTIVES],
    // providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS
    // ]
})
export class AppComponent{
    selectedListing: Listing;  
    listings: Listing[] = [
        {id: 1, mlsNum: 111111, address: "Nasvhille, TN"},
        {id: 2, mlsNum: 222222, address: "Brentwood, TN"},
        {id: 3, mlsNum: 333333, address: "Franklin, TN"}];

    onClick(listing: Listing): void {
        this.selectedListing = listing;
    }
}