console.log('sohrab: at top of lock_login_test.js...');

Feature('SPA login');

Scenario('Log in using Lock', (/*{I}*/) => {
    const {I} = inject();
    I.amOnPage('/');
    I.waitForVisible('#qsLoginBtn', 3);
    I.click('#qsLoginBtn');
    I.waitForVisible('input[name="password"]', 5);
    I.wait(1);
    I.fillField('input[name="username"]', 'asdasd');
    I.fillField('input[name="password"]', 'asdasd');
    I.click('.auth0-lock-widget-container .auth0-lock-submit');
    I.retry(2).waitForVisible('#qsLogoutBtn', 5);
});
