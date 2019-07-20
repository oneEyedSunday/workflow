import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { AuthLayoutComponent } from './auth-layout.component';

export const layoutCmps: any[] = [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LandingComponent,
    AuthLayoutComponent
];

export * from './landing/landing.component';
export * from './auth-layout.component';
