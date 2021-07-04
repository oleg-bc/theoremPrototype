import { Selector, t } from 'testcafe'
import { checkProducts } from './helpers/prodChecker'
import { Navbar, Navpanel } from './page-objects/pages/components/NavPanel';   

const navbar = new Navbar();
const navpanel = new Navpanel();

const centerPanel = Selector('#tbodyid')
const prod = Selector('.col-md-6')

fixture `Verify navigation and page verification`
.page `https://www.demoblaze.com/index.html`

test('Test landing page loaded', async t => {
await t 
    .expect(navbar.signupLink.exists).ok()
    .expect(navbar.loginLink.exists).ok()
    .expect(centerPanel.exists).ok()
    .expect(prod.exists).ok()
})
test('Test nav to and verify phones', async t => {
await t
    checkProducts(navpanel.phones)
})
test('Test nav to and verify laptops', async t =>{
    checkProducts(navpanel.laptops)
})
test('Test nav to and verify monitors', async t =>{
    checkProducts(navpanel.monitors)
})