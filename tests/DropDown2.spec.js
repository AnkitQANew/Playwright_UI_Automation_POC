const {test,expect} = require ('@playwright/test')

/////////////////////////////////////// select multiple options ////////////////////////////

test ("Select value from Drop-Down ", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption('#colors', ['red','blue'])
    
    await page.waitForTimeout(5000)

    const options = await page.locator('#colors option')

    await expect(options).toHaveCount(7);

/////////////////////////////////////// select multiple options with JS array  ////////////////////////////

       const optionsArray = await page.$$('#colors option')

       for (const x of optionsArray)

        {
             const data   = await x.textContent()

             console.log(data)

        }

       await expect (optionsArray).toHaveLength(7)


       /////////////////////////////////////// verify that any particular option is present or not  /////////////////

       const alldropdownData = await page.locator('#colors').textContent()

        expect (alldropdownData.includes('Blue'))



     })
    

