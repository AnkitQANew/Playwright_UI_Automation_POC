const {test,expect} = require ('@playwright/test')

/////////////////////////////////////  Locating multiple web element 

test ("Demo Multiple locators", async ({page})=> {

    await page.goto("https://demoblaze.com/index.html")

    const links  =  await page.$$('a') 

    for (const x of links)
        {
                   const linktext  = await x.textContent();
                   console.log(linktext)

                   if (linktext ==="Contact")

                    {
                        console.log ("++++++++++++++++++++++++++++++++++++++++")
                        break
                    }

        } 

})

