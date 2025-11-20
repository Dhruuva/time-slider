import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');

 let em= await expect(page.locator('p'));
 console.log("em", em);
  await expect(page.locator('p')).toHaveText('Viewbox width');

  await expect.element(
    page.getByRole('text', { name: '06:00' })
  ).toBeVisible()

  test.afterAll(async () => {
    console.log('Done with tests');
    // ...
  });

})
