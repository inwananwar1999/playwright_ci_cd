import { test as baseTest } from '@playwright/test';
import { AuthPage } from './pages/AuthPage';
import { RegisterPage } from './pages/RegisterPage';
import { AccountStatusPage } from './pages/AccountStatusPage';

type CustomFixtures = {
  authPage: AuthPage;
  registerPage: RegisterPage;
  accountStatusPage: AccountStatusPage;
};

export const test = baseTest.extend<CustomFixtures>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  accountStatusPage: async ({ page }, use) => {
    await use(new AccountStatusPage(page));
  },
});

export { expect } from '@playwright/test';