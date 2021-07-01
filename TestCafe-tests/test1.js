import { Selector } from 'testcafe'
//selectors
const signupLink = Selector('#signin2');
const loginLink = Selector('#login2');
const centerPanel = Selector('#tbodyid')
const phones = Selector('.list-group-item').withText('Phones')

//    const osCount = Selector('.column.col-2 label').count;
const prodCount = Selector('.col-lg-4.col-md-6.mb-4').count


fixture `Verify basic nav to landing page`
    .page `https://www.demoblaze.com/`

test('Test page loaded', async t => {
await t 
    .expect(signupLink.exists).ok()
    .expect(loginLink.exists).ok()
    .expect(centerPanel.exists).ok()
    .expect(prodCount).eql(9);
})

test('Test nav to phones', async t => {
await t
    .click(phones)
    .expect(centerPanel.exists).ok()
})