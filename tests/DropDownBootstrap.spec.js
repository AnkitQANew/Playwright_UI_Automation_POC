
const {test,expect} = require ('@playwright/test')

test ("Bootstrao Drop-Down  selection ", async ({page})=> {

await page.goto("https://www.redbus.in/")

await page.locator('#src').fill('Delhi')

await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")

const cityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")

for (let x of cityOptions)

    {
        const value =        await x.textContent()

        console.log(value)


        if(value.includes('Anand Vihar'))

            {
                x.click ()
                break;
            }

    }


})





