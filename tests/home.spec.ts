import { test, expect } from "@playwright/test";

test.describe("Home", () => {
    test("Open HomePage and verify title", async ({ page }) => {
        // open url
        await page.goto("https://practice.automationbro.com");
    
        // verify title
        await expect(page).toHaveTitle(
          "Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
        );
      });
      test("Click get started button using CSS selector", async ({ page }) => {
        // open url
        await page.goto("https://practice.automationbro.com");
    
        // click the button
        await page.locator("#get-started").click();

        // verify url
        await expect(page).toHaveURL(
          /.*#get-started/
        );
      });
      test("Verify heading text is visible using text selector", async ({ page }) => {
        // open url
        await page.goto("https://practice.automationbro.com");
    
        // click the button
        const headingText = await page.locator('text="Think different. Make different."');

        // verify visibility of heading text
        await expect(headingText).toBeVisible();
      });
      test("Verify home link is enabled using text and css selector", async ({ page }) => {
        // open url
        await page.goto("https://practice.automationbro.com");
    
        // find home text
        const homeText = await page.locator('#zak-primary-menu >> text="Home"');

        // verify visibility of heading text
        await expect(homeText).toBeEnabled();
      });
    });
