
import { Selector, t } from 'testcafe'
import { login, newUsr, newPass } from './helpers/signupHelpers';
import { Navbar } from './page-objects/pages/components/NavPanel';
const navbar = new Navbar();

const welcomeMsg = Selector('#nameofuser').withText('Welcome Oleg').visible;
const wrongName =  newUsr();
const wrongPasswd =  newPass();

fixture `Verify login functionality scnearios`
.page `https://www.demoblaze.com/index.html`

    test('Test login happy path', async t => {
        login('oleg','test123')
        await t.expect(welcomeMsg.exists).ok
        })

    test('Test login error path', async t => {
            login(wrongName,wrongPasswd);
            await t
            .expect(navbar.loginLink.exists).ok()
    })