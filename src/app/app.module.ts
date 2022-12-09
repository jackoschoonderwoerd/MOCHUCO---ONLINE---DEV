
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AudioComponent } from './pages/item/audio/audio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FooterComponent } from './navigation/footer/footer.component';
import { getRemoteConfig } from 'firebase/remote-config'
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { ItemComponent } from './pages/item/item.component';
import { LanguagesComponent } from './admin/venues/items/add-item/languages/languages.component';
import { LogoComponent } from './pages/logo/logo.component';
import { MochucoComponent } from './pages/mochuco/mochuco.component';
import { NgModule } from '@angular/core';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { QRCodeModule } from 'angular2-qrcode';
import { ReactiveFormsModule } from '@angular/forms';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { SelectLanguageComponent } from './navigation/footer/select-language/select-language.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StageComponent } from './pages/stage/stage.component';
import { TestComponent } from './pages/test/test.component';
import { UiDialogComponent } from './shared/ui-dialog/ui-dialog.component';
import { WarningComponent } from './shared/warning/warning.component';
import { enableIndexedDbPersistence } from "firebase/firestore";










@NgModule({
    declarations: [
        AdminComponent,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        LogoComponent,
        MochucoComponent,
        ScannerComponent,
        SelectLanguageComponent,
        TestComponent,
        UiDialogComponent,
        StageComponent,
        ItemComponent,
        LanguagesComponent,
        WarningComponent,
        AudioComponent,
    ],
    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxScannerQrcodeModule,
        AppMaterialModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideFirestore(() => getFirestore()),

        provideFirestore(() => {
            const firestore = getFirestore();

            enableIndexedDbPersistence(firestore);
            return firestore;
        }),

        provideStorage(() => getStorage()),
        BrowserAnimationsModule,
        QRCodeModule,
        ReactiveFormsModule,



        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            scope: './',

            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',

        }),

        provideAuth(() => getAuth()),
        // provideStorage(() => getStorage()),
        // ServiceWorkerModule.register('ngsw-worker.js', {
        //   enabled: environment.production,
        //   // Register the ServiceWorker as soon as the application is stable
        //   // or after 30 seconds (whichever comes first).
        //   registrationStrategy: 'registerWhenStable:30000'
        // }),

    ],
    providers: [],
    bootstrap: [AppComponent]


})
export class AppModule { }
