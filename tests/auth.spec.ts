// import { test, expect } from './fixtures/testFixtures';

// test.describe('Authentication & User Account Tests (Test Cases 1-5)', () => {
//   const dynamicTimestamp = Date.now();
//   const validName = 'QA Tester';
//   const validEmail = `tester_${dynamicTimestamp}@testmail.com`;
//   const validPassword = 'SecurePassword123!';

//   test.beforeEach(async ({ authPage, page }) => {
//     await authPage.navigateTo('/');
//     await expect(page).toHaveTitle(/Automation Exercise/);
//     await authPage.navSignupLogin.click();
//     await authPage.dismissAdsIfPresent();
//   });

//   test('Test Case 1: Register User', async ({ authPage, registerPage, accountStatusPage, page }) => {
//     // 1. Verifikasi header 'New User Signup!'
//     await expect(authPage.signupHeader).toBeVisible();

//     // 2. Masukkan nama dan dynamic email
//     await authPage.initiateSignup(validName, validEmail);

//     // 3. Verifikasi halaman 'Enter Account Information'
//     await expect(registerPage.accountInfoHeader).toBeVisible();

//     // 4. Isi form registrasi lengkap
//     await registerPage.fillRegistrationForm({
//       title: 'Mr',
//       password: validPassword,
//       dobDay: '5',
//       dobMonth: '12',
//       dobYear: '1999',
//       newsletter: true,
//       specialOffers: true,
//       firstName: 'Inwan',
//       lastName: 'Anwar',
//       company: 'Tech Corp',
//       address: 'Jalan Raya No. 123',
//       country: 'Singapore',
//       state: 'Central',
//       city: 'Singapore',
//       zipcode: '123456',
//       mobileNumber: '+628123456789',
//     });

//     // 5. Verifikasi 'Account Created!' & klik Continue
//     await expect(accountStatusPage.accountCreatedHeader).toBeVisible();
//     await accountStatusPage.clickContinue();

//     // 6. Verifikasi 'Logged in as username' terlihat
//     await expect(authPage.loggedInUserText).toContainText(validName);

//     // 7. Hapus akun & verifikasi 'Account Deleted!'
//     await authPage.navDeleteAccount.click();
//     await expect(accountStatusPage.accountDeletedHeader).toBeVisible();
//     await accountStatusPage.clickContinue();
//   });

//   test('Test Case 2: Login User with correct email and password', async ({ authPage, accountStatusPage, registerPage }) => {
//     // Setup: Buat akun terlebih dahulu agar kredensial valid
//     const userEmail = `login_valid_${Date.now()}@testmail.com`;
//     await authPage.initiateSignup(validName, userEmail);
//     await registerPage.fillRegistrationForm({
//       password: validPassword,
//       firstName: 'Tester',
//       lastName: 'User',
//       address: 'Street 1',
//       country: 'India',
//       state: 'State',
//       city: 'City',
//       zipcode: '11111',
//       mobileNumber: '08123456789',
//     });
//     await accountStatusPage.clickContinue();
//     await authPage.navLogout.click();

//     // Eksekusi Test Case 2
//     await expect(authPage.loginHeader).toBeVisible();
//     await authPage.login(userEmail, validPassword);

//     // Assertion
//     await expect(authPage.loggedInUserText).toContainText(validName);

//     // Teardown: Bersihkan akun
//     await authPage.navDeleteAccount.click();
//     await expect(accountStatusPage.accountDeletedHeader).toBeVisible();
//   });

//   test('Test Case 3: Login User with incorrect email and password', async ({ authPage }) => {
//     await expect(authPage.loginHeader).toBeVisible();

//     // Login dengan kredensial salah
//     await authPage.login('invalid_account_999@testmail.com', 'WrongPasswordXYZ');

//     // Verifikasi pesan error
//     await expect(authPage.loginErrorMessage).toHaveText('Your email or password is incorrect.');
//   });

//   test('Test Case 4: Logout User', async ({ authPage, registerPage, accountStatusPage, page }) => {
//     // Setup: Buat akun untuk login
//     const userEmail = `logout_test_${Date.now()}@testmail.com`;
//     await authPage.initiateSignup(validName, userEmail);
//     await registerPage.fillRegistrationForm({
//       password: validPassword,
//       firstName: 'Tester',
//       lastName: 'Logout',
//       address: 'Street 2',
//       country: 'Canada',
//       state: 'State',
//       city: 'City',
//       zipcode: '22222',
//       mobileNumber: '08123456789',
//     });
//     await accountStatusPage.clickContinue();

//     // Eksekusi Logout
//     await authPage.navLogout.click();

//     // Verifikasi user diarahkan kembali ke halaman login
//     await expect(authPage.loginHeader).toBeVisible();
//     await expect(page).toHaveURL(/.*login/);
//   });

//   test('Test Case 5: Register User with existing email', async ({ authPage, registerPage, accountStatusPage }) => {
//     const existingEmail = `existing_${Date.now()}@testmail.com`;

//     // 1. Buat user pertama kali
//     await authPage.initiateSignup(validName, existingEmail);
//     await registerPage.fillRegistrationForm({
//       password: validPassword,
//       firstName: 'Tester',
//       lastName: 'Exist',
//       address: 'Street 3',
//       country: 'Australia',
//       state: 'State',
//       city: 'City',
//       zipcode: '33333',
//       mobileNumber: '08123456789',
//     });
//     await accountStatusPage.clickContinue();
//     await authPage.navLogout.click();

//     // 2. Coba register ulang menggunakan email yang sama
//     await authPage.initiateSignup(validName, existingEmail);

//     // 3. Verifikasi error 'Email Address already exist!'
//     await expect(authPage.signupErrorMessage).toHaveText('Email Address already exist!');
//   });
// });