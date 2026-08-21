import { test as setup, expect } from '@playwright/test';

const BASE_URL = 'http://makassar-brilink-dev.apps.ocp-new-dev.bri.co.id';
const BASE_URL_STAG = 'http://makassar-brilink.apps.ocp-new-dev.bri.co.id';



setup('Authenticate Maker Cabang', async ({ page }) => {
  await page.goto(`${BASE_URL}/bss/public/login`);
      await page.getByRole('textbox', { name: 'PN' }).click();
      await page.getByRole('textbox', { name: 'PN' }).fill('117149');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('ksdjfjh3j422');
      await page.getByRole('textbox', { name: 'Kode Validasi' }).click();
      await page.getByRole('textbox', { name: 'Kode Validasi' }).fill('ADAM');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: 'auth/maker.json' });
});

setup('Authenticate Checker Kanwil', async ({ page }) => {
  await page.goto(`${BASE_URL}/bss/public/login`);
      await page.getByRole('textbox', { name: 'PN' }).click();
      await page.getByRole('textbox', { name: 'PN' }).fill('1693');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('ksdjfjh3j422');
      await page.getByRole('textbox', { name: 'Kode Validasi' }).click();
      await page.getByRole('textbox', { name: 'Kode Validasi' }).fill('ADAM');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: 'auth/checker.json' });
});

setup('Authenticate Signer Kanwil', async ({ page }) => {
  await page.goto(`${BASE_URL}/bss/public/login`);
      await page.getByRole('textbox', { name: 'PN' }).click();
      await page.getByRole('textbox', { name: 'PN' }).fill('2651');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('ksdjfjh3j422');
      await page.getByRole('textbox', { name: 'Kode Validasi' }).click();
      await page.getByRole('textbox', { name: 'Kode Validasi' }).fill('ADAM');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: 'auth/signer.json' });
});

setup('Authenticate Signer Kanpus', async ({ page }) => {
  await page.goto(`${BASE_URL_STAG}/bss/public/login`);
      await page.getByRole('textbox', { name: 'PN' }).click();
      await page.getByRole('textbox', { name: 'PN' }).fill('90173374');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('ksdjfjh3j422');
      await page.getByRole('textbox', { name: 'Kode Validasi' }).click();
      await page.getByRole('textbox', { name: 'Kode Validasi' }).fill('ADAM');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: 'auth/signer_kanpus.json' });
});

setup('Authenticate Maker Kanwil', async ({ page }) => {
  await page.goto(`${BASE_URL}/bss/public/login`,{timeout: 60000});
      await page.getByRole('textbox', { name: 'PN' }).click();
      await page.getByRole('textbox', { name: 'PN' }).fill('51030');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('ksdjfjh3j422');
      await page.getByRole('textbox', { name: 'Kode Validasi' }).click();
      await page.getByRole('textbox', { name: 'Kode Validasi' }).fill('ADAM');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: 'auth/maker_kanwil.json' });
});
