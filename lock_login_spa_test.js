console.log('sohrab: at top of lock_login_spa_test.js...');

Feature("SPA login with new responsive design");

Scenario("Log in using Lock", (/*{I}*/) => {
  const {I} = inject();
  console.log("sohrab: executing scenario handler function for scenario 'Log in using Lock'");
  I.amOnPage("/");
  I.waitForVisible("#qsLoginBtn", 20);
  I.click("#qsLoginBtn");
  I.waitForVisible('input[name="password"]', 20);
  I.wait(1);
  I.fillField('input[name="username"]', "asdasd");
  I.fillField('input[name="password"]', "asdasd");
  I.click(".auth0-lock-widget-container .auth0-lock-submit");
  I.waitForVisible("#profileDropDown", 20);
  I.wait(3);
  I.click("#profileDropDown");
  I.waitForVisible("#qsLogoutBtn");
  I.click("#qsLogoutBtn");
  I.waitForVisible("#qsLoginBtn", 20);
  I.amOnPage("/");
});
