import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';

// const routes: Routes = ;

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      children: [
        {
          path: '',
          component: ProfilePageComponent
        },
        {
          path: 'skills',
          component: SkillsComponent
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
