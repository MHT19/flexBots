const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://flexstudent.nu.edu.pk/Login');

    await page.click("#m_inputmask_4");
    await page.keyboard.type("21L5784");

    await page.click("#pass");
    await page.keyboard.type("2148299694");


    // page.on('click', ' button#m_login_signin_submit', () => {
    //     console.log("yo1");
    //     document.querySelector(".flaticon-list-3").parentElement.click();
    //     console.log("yo2");
    // });

    // await page.waitForSelector('button#m_login_signin_submit').then(() => {
    //     console.log('Button was clicked!');
    // })

    // Click the button


    await page.waitForSelector('.flaticon-list-3');

    await page.evaluate(() => {
        document.querySelector('.flaticon-list-3').parentElement.click();
    });



    // Run a function after the button is clicked
    // await page.evaluate(() => {
    //     console.log('Button was clicked!');
    // });

    console.log("yooyyy");
    // const hrefText = await page.evaluate(() => {
    //     return document.querySelector('a.m-menu__link').href;
    // });
    // console.log(hrefText);

    await page.screenshot({ path: 'flexLoggedIn.png' });
    // await browser.close();
})();