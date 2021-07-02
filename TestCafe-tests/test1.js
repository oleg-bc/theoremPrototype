import { Selector, t } from 'testcafe'
import { setMouseDownDelay, enableMouseDownDelay } from './helpers/mouseDown';
import { userName, userPasswd, login } from './helpers/signupTest';

//signup selectors
const signupLink = Selector('#signin2');
const signupUserName = Selector('#sign-username');
const signupPasswd = Selector('#sign-password');
const signupBtn = Selector('.btn').withText('Sign up');


const loginLink = Selector('#login2');
const loginModal = Selector('#logInModalLabel').withText('Log in').visible;
const loginUserName = Selector('#loginusername');
const loginPassword = Selector('#loginpassword');
const loginButton = Selector('.btn').withText('Log in');
const welcomeMsg = Selector('#nameofuser').withText('Welcome Oleg').visible;
const userNameLabel = Selector('.form-control-label').withText('Username:').visible

const centerPanel = Selector('#tbodyid')
const phones = Selector('.list-group-item').withText('Phones')
const numProds = Selector(centerPanel).child('.col-md-6')
console.log('SQUARES    **** ',JSON.stringify(numProds))

const prod = Selector('.col-md-6')

//video selectors
const playBtn = Selector('button.vjs-big-play-button');
const pauseBtn = Selector('.vjs-control-text').withText('Pause');
//const playSetting = Selector(.)


let newUser = userName;
let newPass = userPasswd;


fixture `verify video play functionality`
.page `https://www.demoblaze.com/`
test(`Video-test`, async t=>{
await t
.click(Selector('.nav-link').withText('About us'))
const playerLoaded = Selector('.vjs-poster').exists
await t.expect(playerLoaded).ok()     
await setMouseDownDelay(1000);
await t.hover(playBtn)
.wait(1000)
.click(playBtn)
.rightClick(".vjs-poster")
.doubleClick(".vjs-poster")
// .debug()
t.wait(3500)
const pauseButtonLoaded = pauseBtn.exists;
await t 
.expect(pauseButtonLoaded).ok()
 // todo: replace with conditional that looks at time elapsed sine play was clicked
.click(pauseBtn)//todo: verify counter is at the expected time.
})

fixture `Verify basic nav to landing page`
    //Test signup with ${newUser} and ${newPass}
    test(`Test1`, async t => {
        
        await t
        //click on signup link
        .click(signupLink)
        .expect(signupUserName.exists).ok()
        .expect(signupPasswd.exists).ok()
        await t
        .typeText(signupUserName,newUser)
        .typeText(signupPasswd,newPass)
        //await t.click(signupBtn)

        await t.setNativeDialogHandler(() => true)
        .click(signupBtn)
          //TODO Create a LOGIN function USE IT HERE TO LOGIN
          //use it to verify wrong login 
    })

    test('Test login error path', async t => {
            //enter wrong password
            //ensure error: wrong password
            //try w/ wrong name - "user does exist"
            //click on login link
            //ensure login modal comes up
            //enter login info
            //ensure "welcome $userName" is now visible
    })
    test('Test-login-happy-path', async t => {
        login('oleg','test123')
        await t.expect(welcomeMsg.exists).ok
        })

test('Test page loaded', async t => {
await t 
    .expect(signupLink.exists).ok()
    .expect(loginLink.exists).ok()
    .expect(centerPanel.exists).ok()
    .expect(prod.exists).ok()
    //.expect(prod).count.eql(9)
})

test('Test nav to phones', async t => {
await t
    .click(phones)
    .expect(centerPanel.exists).ok()
})





test('Test Shopping Cart', async t =>{
    await t
    //login
    //check cart empty
    //go to home page
    //
    //add stuff to cart
    //verify in cart
    //cleanup - delete from cart

})
test('Test Checkout', async t =>{
//click place order button
    //fill out order form
//click purchase
//verify modal
//id/amount/cardnum/name/date click ok

})
test('Test nav to laptops', async t =>{
    //click laptops
    //click next
    //click previous
})
test('Test nav to monitors', async t =>{
     //click monitors
    //click next
    //click previous
})