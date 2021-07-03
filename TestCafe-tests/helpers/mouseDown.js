import { ClientFunction } from "testcafe";
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