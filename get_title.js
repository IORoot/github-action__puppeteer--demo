
    const puppeteer = require('puppeteer-core');


    (async () => {

        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH, // set by docker container
            headless: true,
        });
        
        const page = await browser.newPage()
        await page.goto('https://www.google.com/')
        const title = await page.title()
        console.log(title)
        browser.close()

    })()