import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { ExperienceComponent } from './experience/experience.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'customer', component: CustomerComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard]  },
  { path: 'portfolio-item', component: PortfolioItemComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
