import { Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { CategoryComponent } from './modules/category/category.component';
import { PersonalityComponent } from './modules/personality/personality.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'category/:industry', component: CategoryComponent },
    { path: 'personality/:id', component: PersonalityComponent }
];