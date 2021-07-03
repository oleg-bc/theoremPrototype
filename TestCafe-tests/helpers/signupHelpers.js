import faker from 'faker';
import { t, Selector } from 'testcafe';
import { Navbar } from '../page-objects/pages/components/NavPanel';
const navbar = new Navbar;

export const firstName = faker.name.firstName();
export const userName = faker.internet.userName();
export const userPasswd = faker.internet.password();
console.log(firstName)
console.log(userName)
console.log(userPasswd)

export  function newUsr(){
    return faker.internet.userName();
}
export  function newPass(){
    return faker.internet.password();
}

//login selectors
const loginLink = navbar.loginLink;
const loginModal = Selector('#logInModalLabel').withText('Log in').visible;
const loginUserName = Selector('#loginusername');
const loginPassword = Selector('#loginpassword');
const loginButton = Selector('.btn').withText('Log in');
const welcomeMsg = Selector('#nameofuser').withText('Welcome Oleg').visible;

const userNameLabel = Selector('.form-control-label').withText('Username:').visible

export async function login(login,pass){
    await t
    .click(loginLink)
    .expect(loginModal.exists).ok
const userNameLoad = await loginUserName.with({visibilityCheck: true})();
const passWordLoad = await loginPassword.with({visibilityCheck: true})();
await t
    .expect(userNameLabel.exists).ok
await t
    .typeText(loginUserName, login)
    .typeText(loginPassword, pass)
const buttonConfirm = await loginButton.with({vsibilityCheck: true})();
await t
.hover(loginButton)
.click(loginButton)
const welcomeMsg2 = Selector('#nameofuser').withText(`Welcome ${login}`).visible;
const welcomeLoaded = welcomeMsg2.exists;
await t.expect(welcomeLoaded).ok();

}