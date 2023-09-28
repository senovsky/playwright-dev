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
    await expect(page).toHaveURL(/.*#get-started/);
  });
  test("Verify heading text is visible using text selector", async ({
    page,
  }) => {
    // open url
    await page.goto("https://practice.automationbro.com");

    // click the button
    const headingText = page.locator('text="Think different. Make different."');

    // verify visibility of heading text
    await expect(headingText).toBeVisible();
  });
  test("Verify home link is enabled using text and css selector", async ({
    page,
  }) => {
    // open url
    await page.goto("https://practice.automationbro.com");

    // find home text
    const homeText = page.locator('#zak-primary-menu >> text="Home"');

    // verify visibility of heading text
    await expect(homeText).toBeEnabled();
  });
  test("Verify text of all nav links", async ({ page }) => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // open url
    await page.goto("https://practice.automationbro.com");

    // find nav links
    const navLinks = page.locator("#zak-primary-menu li[id*=menu]");
    const blogLink = navLinks.nth(3);

    // print all nav links
    for (const el of await navLinks.elementHandles()) {
      console.log(await el.textContent());
    }

    // verify nav links texts
    expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    expect(await blogLink.textContent()).toEqual(expectedLinks[3]);
  });
});
