import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user/user.component';
import {AboutComponent} from './components/about/about.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileTemplate} from 'app/components/template/profile-template.component';
import {TransferComponent} from 'app/components/transfer/transfer.component';
import { DepositComponent } from 'app/components/deposit/deposit.component';
import { WithdrawComponent } from 'app/components/withdraw/withdraw.component';


const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'admin/template/create',
        component: ProfileTemplate
    },
    {
        path:'user/transfer',
        component: TransferComponent
    },
    {
        path:'user/deposit',
        component: DepositComponent
    },
    {
        path:'user/withdraw',
        component: WithdrawComponent
    }
   

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
