import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover-user',
    loadChildren: () => import('./recover-user/recover-user.module').then( m => m.RecoverUserPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-address',
    loadChildren: () => import('./list-address/list-address.module').then( m => m.ListAddressPageModule)
  },
  {
    path: 'list-teacher',
    loadChildren: () => import('./list-teacher/list-teacher.module').then( m => m.ListTeacherPageModule)
  },
  {
    path: 'form-teacher',
    loadChildren: () => import('./form-teacher/form-teacher.module').then( m => m.FormTeacherPageModule)
  },
  {
    path: 'list-course',
    loadChildren: () => import('./list-course/list-course.module').then( m => m.ListCoursePageModule)
  },
  {
    path: 'form-course',
    loadChildren: () => import('./form-course/form-course.module').then( m => m.FormCoursePageModule)
  },
  {
    path: 'form-student',
    loadChildren: () => import('./form-student/form-student.module').then( m => m.FormStudentPageModule)
  },
  {
    path: 'list-student',
    loadChildren: () => import('./list-student/list-student.module').then( m => m.ListStudentPageModule)
  },
  {
    path: 'form-address',
    loadChildren: () => import('./form-address/form-address.module').then( m => m.FormAddressPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
