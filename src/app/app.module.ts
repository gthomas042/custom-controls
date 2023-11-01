import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TextareaComponent } from './custom-controls/text-area/textarea.component';

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
    bootstrap: [AppComponent]
})
export class AppModule { }
