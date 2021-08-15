/**
 * @name get title
 *
 * @desc Get the title of a page and print it to the console.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagetitle}
 */

    const puppeteer = require('puppeteer');

    (async () => {
        
        const browser = await puppeteer.launch({
            executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
            headless: false,
        });
        
        const page = await browser.newPage()
        await page.goto('https://londonparkour.com/')
        const title = await page.title()
        console.log(title)
        await browser.close()
    })()