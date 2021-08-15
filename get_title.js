'use strict';

    const puppeteer = require('puppeteer-core');


    (async () => {

        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH, // set by docker container
            headless: false,
        });
        
        const page = await browser.newPage()
        await page.goto('https://londonparkour.com/')
        const title = await page.title()
        console.log(title)
        await browser.close()

    })()