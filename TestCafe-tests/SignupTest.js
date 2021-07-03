import { Selector, t } from 'testcafe'
import { userName, userPasswd, login } from './helpers/signupHelpers';

//signup selectors
const signupLink = Selector('#signin2');
const signupUserName = Selector('#sign-username');
const signupPasswd = Selector('#sign-password');
const signupBtn = Selector('.btn').withText('Sign up');
let newUser = userName;
let newPass = userPasswd;

fixture `Verify signup scenarios`
.page `https://www.demoblaze.com/index.html`

    test(`Verify signup functionality with ${newUser} and ${userPasswd}`, async t => {
        await t
        .click(signupLink)
        .expect(signupUserName.exists).ok()
        .expect(signupPasswd.exists).ok()
        await t
        .typeText(signupUserName,newUser)
        .typeText(signupPasswd,newPass)
        await t.setNativeDialogHandler(() => true)
        .click(signupBtn)
        login(newUser,userPasswd)
    })
