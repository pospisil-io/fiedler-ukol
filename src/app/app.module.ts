import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { DetailComponent } from './detail/detail.component';
import { SensorComponent } from './sensor/sensor.component';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorListComponent,
    FilterPipe,
    DetailComponent,
    SensorComponent,
    GroupComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
