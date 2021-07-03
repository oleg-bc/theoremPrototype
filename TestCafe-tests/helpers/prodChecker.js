import { Selector, t } from 'testcafe';

export async function checkProducts(category){
    await t
    .click(category)
    const prodImage = Selector('.product-deatil')
    .child('.row')
    .child('.col-md-5')
    .child('.product-image')

    const prodItem = Selector('#tbodyid')
    .child('.col-lg-4')
    .child('.card')
    .child('.card-block')
    .child('.card-title')
    .child('.hrefch')
    const prodItemLoaded = prodItem.exists;
    await t.expect(prodItemLoaded).ok()
    const navItems = await prodItem; 
    const navCount = await prodItem.count;
    for(let i=0; i<navCount; i++){ 
        await t 
        .click(navItems.nth(i))
        const prodImageLoaded = prodImage.exists;
        await t.expect(prodImageLoaded).ok()
        .navigateTo('https://www.demoblaze.com/index.html#')
        .click(category);  
    } 
}