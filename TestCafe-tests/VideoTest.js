import { Selector, t } from 'testcafe'
import { setMouseDownDelay, enableMouseDownDelay } from './helpers/mouseDown';

//video selectors
const playBtn = Selector('button.vjs-big-play-button');
const pauseBtn = Selector('.vjs-control-text').withText('Pause');

fixture `verify video play functionality`
.page `https://www.demoblaze.com/`

test(`Video-test`, async t=>{
await t
.click(Selector('.nav-link').withText('About us'))
const playerLoaded = Selector('.vjs-poster').exists
await t.expect(playerLoaded).ok() 
.hover(playBtn)
await setMouseDownDelay(1000);
await t.hover(playBtn)

//below actions are redundant at the moment. The reason for this is despite video controls working well with human input, they are not responding to testdriver input
.doubleClick(playBtn)
.wait(1000)
.click(playBtn)
.rightClick(".vjs-poster")
.doubleClick(".vjs-poster")
await t.wait(3500)
const pauseButtonLoaded = pauseBtn.exists;
await t 
.expect(pauseButtonLoaded).ok()
 // todo: replace with conditional that looks at time elapsed sine play was clicked
.click(pauseBtn)//todo: verify counter is at the expected time.
})
