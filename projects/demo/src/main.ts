import { enableProdMode, provideZonelessChangeDetection } from "@angular/core"
import { environment } from "./environments/environment"
import { bootstrapApplication } from "@angular/platform-browser"
import { AppComponent } from "./app/app.component"
import { provideToastr } from "@m-f-1998/ngx-toastr"

if ( environment.production ) {
  enableProdMode ()
}

bootstrapApplication ( AppComponent, {
  providers: [
    provideToastr (),
    provideZonelessChangeDetection ()
  ]
} )
  .catch ( err => console.log ( err ) )
