import { Selector, ClientFunction } from "testcafe";


// HACK: Define functions that monkey-patch TestCafe internals
export const enableMouseDownDelay = ClientFunction(() => {
    const proto     = window['%testCafeAutomation%'].DragToElement.prototype.constructor.prototype
    const mousedown = proto._mousedown;
    proto._mousedown = function (...args) {
        let result;
        return mousedown
            .apply(this, args)
            .then(r => result = r)
            .then(() => new Promise(r => setTimeout(r, window.mouseDownDelay || 0)))
            .then(() => result);
    }
});

export const setMouseDownDelay = ClientFunction(ms => window.mouseDownDelay = ms);
// End of function definitions

// test('Drag example #4165', async t => {
   
//     // HACK: Call patching functions to enable delays during a test
//     // Can be called only once per test
//     await enableMouseDownDelay();
//     // Can be called multiple times per test
//     await setMouseDownDelay(1000);
//     await t.expect(fooSelector.exists).ok()
//         .expect(bazSelector.exists).ok()
//         .dragToElement(fooSelector, bazSelector, { speed: 0.01 })
//         .expect(Selector('.list-group-item').nth(0).innerText).eql('bar');
//     }
// )    