import { Selector } from 'testcafe'
//selectors
const signupLink = Selector('#signin2');
const loginLink = Selector('#login2');
const centerPanel = Selector('#tbodyid')
const phones = Selector('.list-group-item').withText('Phones')
//const singleProdPanel =  Selector('')
const numProds = Selector(centerPanel).child('.col-md-6')
console.log('SQUARES    **** ',JSON.stringify(numProds))
//    const osCount = Selector('.column.col-2 label').count;
const prod = Selector('.col-md-6')


fixture `Verify basic nav to landing page`
    .page `https://www.demoblaze.com/`

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

test('Test signup', async t => {
    //click on signup link
    //ensure modal appears
    //call GENERATE NEW USER function
    //signup as the user
    //signup as existing user
    //ensure error message is shown 
})

test('Test login', async t => {
    //click on login link
    //enter wrong password
    //ensure error: wrong password
    //try w/ wrong name - "user does exist"
    //click on login link
    //ensure login modal comes up
    //enter login info
    //ensure "welcome $userName" is now visible

})

test('Test play about us video', async t =>{})
test('Test Shopping Cart', async t =>{})
test('Test Checkout', async t =>{})
test('Test nav to laptops', async t =>{})
test('Test nav to monitors', async t =>{})