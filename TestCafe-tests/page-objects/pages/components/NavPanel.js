import {Selector, t} from 'testcafe'

export class Navbar {
    constructor() {
        //Selectors
        this.signupLink = Selector('#signin2');
        this.loginLink  = Selector('#login2');
    }
}

export class Navpanel {
    constructor(){
    //Selectors
    this.phones = Selector('.list-group-item').withText('Phones')
    this.laptops = Selector('.list-group-item').withText('Laptops')
    this.monitors = Selector('.list-group-item').withText('Monitors')
    }
}

