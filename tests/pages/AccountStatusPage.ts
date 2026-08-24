import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountStatusPage extends BasePage {
  readonly accountCreatedHeader: Locator;
  readonly accountDeletedHeader: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountCreatedHeader = page.getByRole('heading', { name: 'Account Created!' });
    this.accountDeletedHeader = page.getByRole('heading', { name: 'Account Deleted!' });
    this.continueButton = page.locator('a[data-qa="continue-button"]');
  }

  async clickContinue() {
    await this.continueButton.click();
    await this.dismissAdsIfPresent();
  }
}