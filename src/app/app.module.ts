import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
        VgOverlayPlayModule
    ],
    providers: [],
    bootstrap: [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
