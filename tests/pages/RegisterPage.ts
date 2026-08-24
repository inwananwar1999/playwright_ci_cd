import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface UserRegistrationData {
  title?: 'Mr' | 'Mrs';
  password: string;
  dobDay?: string;
  dobMonth?: string;
  dobYear?: string;
  newsletter?: boolean;
  specialOffers?: boolean;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export class RegisterPage extends BasePage {
  readonly accountInfoHeader: Locator;
  readonly titleMrRadio: Locator;
  readonly titleMrsRadio: Locator;
  readonly passwordInput: Locator;
  readonly daysSelect: Locator;
  readonly monthsSelect: Locator;
  readonly yearsSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;

  // Address Information
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountInfoHeader = page.getByRole('heading', { name: 'Enter Account Information' });
    this.titleMrRadio = page.locator('#id_gender1');
    this.titleMrsRadio = page.locator('#id_gender2');
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.daysSelect = page.locator('select[data-qa="days"]');
    this.monthsSelect = page.locator('select[data-qa="months"]');
    this.yearsSelect = page.locator('select[data-qa="years"]');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.specialOffersCheckbox = page.locator('#optin');

    this.firstNameInput = page.locator('input[data-qa="first_name"]');
    this.lastNameInput = page.locator('input[data-qa="last_name"]');
    this.companyInput = page.locator('input[data-qa="company"]');
    this.address1Input = page.locator('input[data-qa="address"]');
    this.address2Input = page.locator('input[data-qa="address2"]');
    this.countrySelect = page.locator('select[data-qa="country"]');
    this.stateInput = page.locator('input[data-qa="state"]');
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
  }

  async fillRegistrationForm(data: UserRegistrationData) {
    if (data.title === 'Mr') await this.titleMrRadio.check();
    if (data.title === 'Mrs') await this.titleMrsRadio.check();

    await this.passwordInput.fill(data.password);
    if (data.dobDay) await this.daysSelect.selectOption(data.dobDay);
    if (data.dobMonth) await this.monthsSelect.selectOption(data.dobMonth);
    if (data.dobYear) await this.yearsSelect.selectOption(data.dobYear);

    if (data.newsletter) await this.newsletterCheckbox.check();
    if (data.specialOffers) await this.specialOffersCheckbox.check();

    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    if (data.company) await this.companyInput.fill(data.company);
    await this.address1Input.fill(data.address);
    if (data.address2) await this.address2Input.fill(data.address2);
    await this.countrySelect.selectOption(data.country);
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.zipcodeInput.fill(data.zipcode);
    await this.mobileNumberInput.fill(data.mobileNumber);

    await this.createAccountButton.click();
    await this.dismissAdsIfPresent();
  }
}