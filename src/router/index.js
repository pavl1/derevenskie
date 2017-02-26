import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from 'pages'

import Market from 'pages/market'
import MarketAppeal from 'pages/market/Appeal'

import Farmer from 'pages/farmer'
import FarmerAppeal from 'pages/farmer/Appeal'
import FarmerFounder from 'pages/farmer/Founder'
import FarmerAgroholding from 'pages/farmer/Agroholding'

import Investor from 'pages/investor'
import InvestorAppeal from 'pages/investor/Appeal'
import InvestorLand from 'pages/investor/Land'
import InvestorGreenhouse from 'pages/investor/Greenhouse'
import InvestorFarm from 'pages/investor/Farm'
import InvestorApiary from 'pages/investor/Apiary'
import InvestorStore from 'pages/investor/Store'
import InvestorContacts from 'pages/investor/Contacts'

import Company from 'pages/company'
import CompanyIdea from 'pages/company/Idea'
import CompanyCommand from 'pages/company/Command'
import CompanyAbout from 'pages/company/About'

import Contacts from 'pages/contacts'
import ContactsStarostenko from 'pages/contacts/Starostenko'
import ContactsVoytovich from 'pages/contacts/Voytovich'
import ContactsInvestor from 'pages/contacts/Investor'
import ContactsLand from 'pages/contacts/Land'
import ContactsOffice from 'pages/contacts/Office'
// import ContactsClients from 'components/ContactsClients'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/market',
            component: Market,
            children: [
                {
                    path: '',
                    component: MarketAppeal
                }
            ]
        }, {
            path: '/farmer',
            component: Farmer,
            children: [
                {
                    path: '',
                    component: FarmerAppeal
                }, {
                    path: 'founder',
                    component: FarmerFounder
                }, {
                    path: 'agroholding',
                    component: FarmerAgroholding
                }
            ]
        }, {
            path: '/investor',
            component: Investor,
            children: [
                {
                    path: '',
                    component: InvestorAppeal
                },
                {
                    path: 'land',
                    component: InvestorLand
                },
                {
                    path: 'greenhouse',
                    component: InvestorGreenhouse
                },
                {
                    path: 'farm',
                    component: InvestorFarm
                },
                {
                    path: 'apiary',
                    component: InvestorApiary
                },
                {
                    path: 'store',
                    component: InvestorStore
                },
                {
                    path: 'contacts',
                    component: InvestorContacts
                },

            ]
        }, {
            path: '/company',
            component: Company,
            children: [
                {
                    path: '',
                    component: CompanyIdea
                }, {
                    path: 'command',
                    component: CompanyCommand
                }, {
                    path: 'about',
                    component: CompanyAbout
                }
            ]
        }, {
            path: '/contacts',
            component: Contacts,
            children: [
                {
                    path: '',
                    component: ContactsStarostenko
                }, {
                    path: 'voytovich',
                    component: ContactsVoytovich
                }, {
                    path: 'investor',
                    component: ContactsInvestor
                }, {
                    path: 'land',
                    component: ContactsLand
                }, {
                    path: 'office',
                    component: ContactsOffice
                }
            ]
        }
    ]
})
