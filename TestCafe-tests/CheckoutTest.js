import { Selector, t } from 'testcafe'
import { fillCart } from './helpers/shop'

const buyBtn = Selector('.col-lg-1')
        .child('.btn').withText('Place Order')
const prodOnPage = Selector("#tdbodyid")
        .child('.col-lg-4')  
        .child('.card')
        .child('.card-block')
        .child('card-title')
        .child('.hrefch')
        .withText('Nokia lumia 1520');//param this value

//checkout modal selectors
const modalTop = Selector('.modal-content');
const nameField = Selector('#name')
const countryField = Selector('#country')
const cityField = Selector('#city') 
const ccField = Selector('#card')
const monthField = Selector('#month')
const yearField = Selector('#year')
const purchaseBtn = Selector('.btn').withText('Purchase')
const checkMark = Selector('.sa-placeholder');
const confBtn = Selector('.confirm').withText('OK');

//prod selectors
const prod1 = Selector('.hrfch').withText('Nokia lumia 1520'); //refactor to parametarize based on product availability

fixture `Verify Checkout Functionality`
.page `https://www.demoblaze.com/index.html`
    test('Test-shopping-cart', async t =>{
        await t
        await fillCart();
        await t.click(buyBtn)
        const modalLoaded = modalTop.exists;
        await t.expect(modalLoaded).ok()
        .hover(nameField)
        .typeText(nameField,'Oleg')
        .typeText(countryField, 'Wakanda')
        .typeText(cityField, 'SF')
        .typeText(ccField, '12122120')
        .typeText(monthField,'July')
        .typeText(yearField,'2022')
        .hover(purchaseBtn)
        .click(purchaseBtn)
    const checkMarkLoaded = checkMark.exists;
    const confBtnLoaded = confBtn.exists;
        await t.expect(checkMarkLoaded).ok()
                .expect(confBtnLoaded).ok()
                .hover(confBtn)
                .click(confBtn)
 })