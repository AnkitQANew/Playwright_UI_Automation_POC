const {test,expect} = require ('@playwright/test')

//////////////////////////////////////////////////////////  Mouse Hover ////////////////////////////////////////////////////////

test.skip ("Mouse Hover Demo    ", async ({page})=> {

    await page.goto("https://www.thetestingworld.com/")

    const TraningMenu =  await page.locator('id=menu531')
    const subMenu     =  await page.locator('id=menu666')


    await TraningMenu.hover()

    await subMenu.hover() 

    await page.waitForTimeout(5000)

})


//////////////////////////////////////////////////////////  Double click  ////////////////////////////////////////////////////////

test ("Double click Demo",   async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const doubleClickBtn1 =  await page.locator("//button[normalize-space()='Copy Text']")

       await      doubleClickBtn1.dblclick()

        const doubleClickBtn2= await page.locator("//input[@id='field2']")  
        
        await expect(doubleClickBtn2).toHaveValue('Hello World!')
    


})