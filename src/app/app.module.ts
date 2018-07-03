import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  }  from  '@angular/router';

import { UiSwitchModule } from 'ngx-toggle-switch';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './Modals/Modal/modal-basic';
import { NgbdModalBit } from './Modals/ModalBIT/modal-bit';
import { NgbdModalSymbolic } from './Modals/ModalRemoveSymbolic/modal-symbolic';
import { NgbdModalFlip } from './Modals/ModalFlip/modal-flip';
import { NgbdModalResetHC } from './Modals/ModalResetHourCounter/modal-reset-hc';
import { NgbdModalCentralization } from './Modals/ModalCentralization/modal-centralization';
import { NgbdModalFlashSoftware } from './Modals/ModalFlashSoftware/modal-flash-software'

import { OperatorComponent } from './operator/operator.component';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { OperatorService } from './operator/operator.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DevelopmentComponent } from './development/development.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent, OperatorComponent, MaintenanceComponent, DevelopmentComponent, NgbdModalFlashSoftware, NgbdModalCentralization, NgbdModalResetHC, NgbdModalFlip, NgbdModalSymbolic, NgbdModalBasic, NgbdModalBit, LogComponent, LoginComponent,  
    //NgbdModal,

  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, UiSwitchModule, NouisliderModule, NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'operator',
        component: OperatorComponent
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent
      },
      {
        path: 'development',
        component: DevelopmentComponent
      },
      {
        path: 'logs',
        component: LogComponent
      },


    ])
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
