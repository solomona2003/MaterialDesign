import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [MatIconModule, MatMenuModule, MatCheckboxModule, MatButtonModule, MatTabsModule, MatProgressSpinnerModule ],
    exports: [MatIconModule, MatMenuModule, MatCheckboxModule, MatButtonModule, MatTabsModule, MatProgressSpinnerModule]

})

export class MaterialModule {

}
