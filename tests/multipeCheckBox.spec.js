const {test,expect} = require ('@playwright/test')


test ("Multiple check-box operations   ", async ({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/")


//////////////////////////////////////////////////////  selecting the multiple check-box in a loop 

await page.locator("//input[@id='sunday']").check()

const checkBoxLocators = [  

    "//input[@id='sunday']",
    "//label[normalize-space()='Monday']",
    "//label[normalize-space()='Thursday']"
]

     for(const x of checkBoxLocators )
     {

        await page.locator(x).check()
    
     }

     await page.waitForTimeout(5000)
})     