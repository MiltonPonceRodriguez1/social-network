import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { routing, appRoutingProviders } from "./app.routing";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { IdentityGuard } from "./services/identity.guard";
import { UserService } from "./services/user.service";

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { FeedComponent } from './components/feed/feed.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ChatComponent } from './shared/chat/chat.component';
import { PublicationNewComponent } from './shared/publication-new/publication-new.component';
import { BirthdaysComponent } from './shared/birthdays/birthdays.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { PaidPostNewComponent } from './shared/paid-post-new/paid-post-new.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlansComponent } from './components/plans/plans.component';
import { BannerNewComponent } from './shared/banner-new/banner-new.component';
import { UserUploadComponent } from './shared/user-upload/user-upload.component';
import { BannerPreviewComponent } from './shared/banner-preview/banner-preview.component';
import { BannersListComponent } from './components/banners-list/banners-list.component';
import { BannerPlansComponent } from './components/banner-plans/banner-plans.component';
import { MarketplaceListAllComponent } from './components/marketplace-list-all/marketplace-list-all.component';
import { MarketplaceListFavoritesComponent } from './components/marketplace-list-favorites/marketplace-list-favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedComponent,
    ErrorComponent,
    HeaderComponent,
    SidebarComponent,
    ChatComponent,
    PublicationNewComponent,
    BirthdaysComponent,
    MarketplaceComponent,
    PaidPostNewComponent,
    ProfileComponent,
    PlansComponent,
    BannerNewComponent,
    UserUploadComponent,
    BannerPreviewComponent,
    BannersListComponent,
    BannerPlansComponent,
    MarketplaceListAllComponent,
    MarketplaceListFavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
