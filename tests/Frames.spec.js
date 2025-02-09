const {test,expect} = require ('@playwright/test')


test.skip ("Frame/ IFrame Demo   ", async ({page})=> {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const allFrame =  await page.frames()

    console.log("number of frames are   ",allFrame.length)

    /////////////////////////////////////////   Approach 1 using URL //////////////////////////////////////////////////

      const frame1 =   await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})

      await frame1.fill('//input[@name="mytext1"]', 'Hello')

      await page.waitForTimeout(5000)

})


//////////////////////////////////////  Nested Frames //////////////////////////////////////////////////////////////


test ("Nested Frames Demo    ", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame3 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})

    await frame3.fill('//input[@name="mytext3"]', 'Welcome')

    await page.waitForTimeout(5000)

    const childFrame  = await frame3.childFrames()
    
    await childFrame[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check()



})

