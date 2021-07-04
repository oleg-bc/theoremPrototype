# Theorem Software Test Automation Engineer Simulation

**Tool Selected: *Testcafe***

## **Running Instructions**

 - [1 ] Clone the repo
 - [2 ] cd theoremProtoype/Testcafe-tests/
 - [3 ] npm install
 - [4 ] npm test

 **Bug Report**:
 bug#000001
 
 Summary: search functionality not available.

 Requirement:  "Searching for phones "

 Expected UI/Behavior: search box and/or search button available.

 Actual Result: no search controls available

 Screenshots/Videos: NA


## EXAMPLE TEST OUTPUT

NOTE: failing test left in failing state on purpose. As an indication of work in progress. With more than 8 hrs I would work on resolving the failures.
`$ npm test

> theoremprototype@1.0.0 test C:\Users\oleg-\Documents\theoremPrototype\TestCafe-tests
> testcafe chrome *.js

 Running tests in:
 - Chrome 91.0.4472.124 / Windows 10

 Verify Checkout Functionality      
 √ Test-shopping-cart

 Verify navigation and page verification

 √ Test page loaded

 √ Test nav to and verify phones

 √ Test nav to and verify laptops

 √ Test nav to and verify monitors

 Verify login functionality scnearios

 √ Test login happy path

 √ Test login error path

 Verify shopping cart

 √ Test-shopping-cart

 Verify signup scenarios

 √ Verify signup functionality with Jace89 and zVQY6Oud_p4Jut_

 verify video play functionality

 × Video-test

   1) AssertionError: expected false to be truthy

      Browser: Chrome 91.0.4472.124 / Windows 10

         22 |.rightClick(".vjs-poster")
         23 |.doubleClick(".vjs-poster")
         24 |await t.wait(3500)
         25 |const pauseButtonLoaded = pauseBtn.exists;
         26 |await t
       > 27 |.expect(pauseButtonLoaded).ok()
         28 | // todo: replace with conditional that looks at time elapsed sine play was clicked
         29 |.click(pauseBtn)//todo: verify counter is at the expected time.
         30 |})
         31 |

         at <anonymous> (C:\Users\oleg-\Documents\theoremPrototype\TestCafe-tests\VideoTest.js:27:28)
         at asyncGeneratorStep (C:\Users\oleg-\Documents\theoremPrototype\TestCafe-tests\VideoTest.js:2:149)
         at _next (C:\Users\oleg-\Documents\theoremPrototype\TestCafe-tests\VideoTest.js:2:487)




 1/10 failed (1m 36s)

npm ERR! Test failed.  See above for more details.`

## future direction

*"What would you do differently if you had more time? A few sentences in the README of the repository are enough."*

The assignment was engaging and enjoyable. Given more time I'd work on following items:

 1. Solve the video player controls issues
 2. Parameterize product content verifications
 3. Add (a lot) more negative scenarios (ex image failing to load)
 4. A better organized Page Object Model to add utility and helper functions into page object libs
 5. Implement ci/cd with browser stack
 6. Implement responsiveness tests and tests for different screens (moble tablet)
 7. A11y tests, UI Performance tests (ex lighthouse)
 8. In a real world situation - would work with code base to make testing optimization such as add test-data IDs to key controls
 9. Docker setup

## Assignment Specifications checklist:

● These are the areas that the client requested coverage for: 

 - [x] ○ Account creation  
 - [x] ○ Log in  
 - [x] ○ Browsing the store’s main categories (Phones, Laptops, Monitors)  
 - [ ] ○ Searching for phones  -- *Functionality not available see "bug" below*
 - [ ] ○ Play About Us video  -- *Test Currently fails. TestCafe driver unable to handle* video controls.  Ran out of time creating custom handlers.
 - [x] ○ Shopping cart  
 - [x] ○ Checkout

 - [x]  Including a way to pass along custom data for tests where needed, as the catalog is going to be changing frequently. 
 - [x]  Having comments put in place to help with the handover of the code to the client. 
 - [x]  Any scenarios and needs outside of what the client has requested that you feel should be included can be documented and optionally added to the automated suite, if time allows it. 