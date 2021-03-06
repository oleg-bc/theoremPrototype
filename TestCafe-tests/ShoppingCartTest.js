import { Selector, t } from 'testcafe'
//TODO: Move out these selectors to Page object library
const buyBtn = Selector('.col-lg-1')
        .child('.btn').withText('Place Order')
const prodOnPage = Selector("#tdbodyid")
        .child('.col-lg-4')  
        .child('.card')
        .child('.card-block')
        .child('card-title')
        .child('.hrefch')
        .withText('Nokia lumia 1520');//TODO: parameterize this value
//fixture below simulates user flow from browse to selection to add to cart but does NOT test checkout
fixture `Verify shopping cart`
.page `https://www.demoblaze.com/index.html`
    test('Test-shopping-cart', async t =>{
        await t
        const prodOnPageLoaded = prodOnPage.exists; 
        const prodTwoLoaded = Selector('.hrefch').withText('Nokia').exists
        await t.expect(prodTwoLoaded).ok()
        
        .doubleClick(Selector('.hrefch').withText('Nokia'))
        const prodPageLoaded = Selector('div').child('.name').withText('Nokia lumia 1520').exists;  //TODO: Make this check dynamic  
        await t.expect(prodPageLoaded).ok()
        await t.hover(Selector('.btn-lg').withText('Add to cart'))
        await t.setNativeDialogHandler(() => true)
        .click(Selector('.btn-lg').withText('Add to cart'))
        .navigateTo('https://www.demoblaze.com/cart.html')
        const buyBtnLoaded = Selector('.btn-succes').exists;
        await t .expect(buyBtnLoaded).ok
        const purchasePriceConfirmation = Selector('.totalp').withText('820').exists
        await t
        .hover(Selector(buyBtn))
 })