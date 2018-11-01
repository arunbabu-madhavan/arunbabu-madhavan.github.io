import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPointButtonComponent } from './buttons/right-point-button/right-point-button.component';
import { RouterModule } from '@angular/router';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { DayNightColorDirective } from './directives/day-night-color.directive';
import { FooterComponent } from './footer/footer.component';
import { ColorPaletteDirective } from './directives/color-palette.directive';
import { BorderHoverLedButtonComponent } from './buttons/border-hover-led-button/border-hover-led-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationArrowsComponent } from './navigation-arrows/navigation-arrows.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers:[],
  declarations: [RightPointButtonComponent,CarouselComponent,BorderHoverLedButtonComponent, TopNavigationBarComponent, DayNightColorDirective, FooterComponent,ColorPaletteDirective, CarouselComponent, NavigationArrowsComponent, CalendarComponent],
  bootstrap:[],
  exports:[RightPointButtonComponent,CarouselComponent,TopNavigationBarComponent,DayNightColorDirective,FooterComponent,ColorPaletteDirective,BorderHoverLedButtonComponent,NavigationArrowsComponent,CalendarComponent]
})
export class SharedModule { }
