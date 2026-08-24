import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly navHome: Locator;
  readonly navSignupLogin: Locator;
  readonly navLogout: Locator;
  readonly navDeleteAccount: Locator;
  readonly loggedInUserText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navHome = page.locator('header').getByRole('link', { name: 'Home' });
    this.navSignupLogin = page.locator('header').getByRole('link', { name: 'Signup / Login' });
    this.navLogout = page.locator('header').getByRole('link', { name: 'Logout' });
    this.navDeleteAccount = page.locator('header').getByRole('link', { name: 'Delete Account' });
    this.loggedInUserText = page.locator('header').getByText(/Logged in as/i);
  }

  async navigateTo(path: string = '/') {
    await this.page.goto(path);
  }

  async dismissAdsIfPresent() {
    try {
      const adFrame = this.page.frameLocator('iframe[name*="aswift"], iframe[id*="google_ads"]');
      const dismissButton = adFrame.locator('#dismiss-button, div[aria-label="Close ad"]');
      if (await dismissButton.isVisible({ timeout: 2000 })) {
        await dismissButton.click();
      }
    } catch {
      // Abaikan jika tidak ada iklan
    }
  }
}