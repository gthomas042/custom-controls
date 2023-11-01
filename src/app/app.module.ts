import { Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TextareaComponent } from './custom-controls/text-area/textarea.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TextareaComponent
    ],
    providers: [

    ],
    //bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(private injector: Injector){}

    ngDoBootstrap() {
        const webComponentPrefix = "rtg";
        
        const element = createCustomElement(TextareaComponent, { injector: this.injector });
        customElements.define(`${webComponentPrefix}-wc-textarea`, element);
    }
}
