// IMPORT DEPENDENCYS
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// IMPORT COMPONENTS
import { AuthComponent } from "./components/auth/auth.component";
import { FeedComponent } from "./components/feed/feed.component";
import { MarketplaceComponent } from "./components/marketplace/marketplace.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PlansComponent } from "./components/plans/plans.component";
import { ErrorComponent } from "./components/error/error.component";
import { BannerPlansComponent } from './components/banner-plans/banner-plans.component'

// ? GUARDS
import { IdentityGuard } from "./services/identity.guard";

const appRoutes: Routes = [
    {path: '', component: FeedComponent, canActivate:[IdentityGuard]},
    {path: 'auth', component: AuthComponent},
    {path: 'marketplace', component: MarketplaceComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'plans', component: PlansComponent},
    {path: 'banner-plans', component: BannerPlansComponent},
    {path: 'logout/:sure', component: AuthComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});