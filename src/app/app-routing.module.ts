import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// const routes: Routes = ;

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      children: [
        {
          path: '',
          component: ProfilePageComponent
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
