// import { executablePath } from 'puppeteer';
const executablePath = require('puppeteer');




async function getPic() {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: require('puppeteer').executablePath(),

    });
    const page = await browser.newPage();
    page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://flexstudent.nu.edu.pk/Login');

    await page.click("#m_inputmask_4");
    await page.keyboard.type("21L5784");

    await page.click("#pass");
    await page.keyboard.type("2148299694");

    // setTimeout(function () {
    //     page.click(".rc-anchor-normal-footer");
    // }, 2000);

    await page.solveRecaptchas();

    await page.click("#m_login_signin_submit");

    await page.screenshot({ path: 'flexLoggedIn.png' });

    await browser.close();
}

getPic();