import faker from 'faker';
import { t, Selector } from 'testcafe';

export const firstName = faker.name.firstName();
export const userName = faker.internet.userName();
export const userPasswd = faker.internet.password();
console.log(firstName)
console.log(userName)
console.log(userPasswd)


//login selectors
const loginLink = Selector('#login2');
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
await t.click(loginButton)

}