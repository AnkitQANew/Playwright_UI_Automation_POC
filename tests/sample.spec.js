
const {test,expect} = require ('@playwright/test')

test("My First Test", async function ({page}) {

    expect (12).toBe (12)
})

test.skip("My second test", async function ({page}) {
    expect (10).toBe (10)
})

test("My Third test ", async function ({page}) {
    
})

test.only("My Fourth test ", async function ({page}) {
    
})