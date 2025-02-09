const {test,expect} = require ('@playwright/test')

//////////////////////////////////////////////////////////  Mouse Hover ////////////////////////////////////////////////////////

test ("Mouse Hover Demo    ", async ({page})=> {

    await page.goto("https://www.thetestingworld.com/")

    const TraningMenu =  await page.locator('id=menu531')
    const subMenu     =  await page.locator('id=menu666')


    await TraningMenu.hover()

    await subMenu.hover() 

    await page.waitForTimeout(5000)

})


