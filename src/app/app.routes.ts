import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Menu } from './pages/menu/menu';

export const routes: Routes = [
    { path: '', component: Main, title: 'Главная' },
    { path: 'menu', component: Menu, title: 'Меню' },
    { path: '**', redirectTo: '' }
];
