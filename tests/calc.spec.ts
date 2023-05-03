import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
})

test.describe('Testing calc', () => {
    test('Should show the result', async ({ page }) => {
        await page.getByLabel('To').fill('USD');
        await page.getByLabel('From').fill('EUR');
        await page.getByLabel('amount').fill('156');

        await page.getByRole('button').click();

        const p = await page.getByTestId('success-message');

        await expect(p).toBeVisible({ timeout: 50000 });
    })
})