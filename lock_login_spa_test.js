console.log('sohrab: at top of lock_login_spa_test.js...');

Feature("SPA login with new responsive design");

Scenario("Log in using Lock", (/*{I}*/) => {
  const {I} = inject();
  console.log("sohrab: executing scenario handler function for scenario 'Log in using Lock'");
  I.amOnPage("/");
  console.log("sohrab1");
  I.waitForVisible("#qsLoginBtn", 20);
  console.log("sohrab2");
  I.click("#qsLoginBtn");
  console.log("sohrab3");
  I.waitForVisible('input[name="password"]', 20);
  I.wait(1);
  console.log("sohrab4");
  I.fillField('input[name="username"]', "asdasd");
  console.log("sohrab5");
  I.fillField('input[name="password"]', "asdasd");
  console.log("sohrab6");
  I.click(".auth0-lock-widget-container .auth0-lock-submit");
  console.log("sohrab7");
  I.waitForVisible("#profileDropDown", 20);
  console.log("sohrab8");
  I.wait(3);
  I.click("#profileDropDown");
  console.log("sohrab9");
  I.waitForVisible("#qsLogoutBtn");
  I.click("#qsLogoutBtn");
  console.log("sohrab10");
  I.waitForVisible("#qsLoginBtn", 20);
  I.amOnPage("/");
  console.log("sohrab11");
});
