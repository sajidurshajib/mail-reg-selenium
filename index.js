const { Builder, By, until } = require('selenium-webdriver');
const util = require('util');

const delay = util.promisify(setTimeout);

(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(
        'https://identity.bluehost.com/index.html?client_id=263&scope=openid&response_type=id_token&allowWebmailSignIn=false&redirect_uri=https://my.bluehost.com/hosting/account/app&state=account-page&format=basic&showGoogleSignIn=true'
    );
    await driver.findElement(By.name('username')).sendKeys('Azadehsoltan@hotmail.com');
    await driver.findElement(By.name('password')).sendKeys('BlueHost6$');
    await driver.wait(until.elementLocated(By.xpath(`//*[text()='Log In']`)), 10000);
    await driver.findElement(By.xpath(`//*[text()='Log In']`)).click();
    await delay(20000);
    await driver.quit();
})();
