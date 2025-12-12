import { test, expect } from '@playwright/test';

test('chatbot is visible and can be toggled', async ({ page }) => {
  // Navigate to the Docusaurus site
  await page.goto('http://localhost:3000'); // Assuming Docusaurus is running on port 3000

  // Expect the toggle button to be visible
  const toggleButton = page.getByRole('button', { name: 'Open Chat' });
  await expect(toggleButton).toBeVisible();

  // Click the toggle button to open the chatbot
  await toggleButton.click();

  // Expect the chatbot container to be visible
  const chatbotContainer = page.getByText('AI Assistant');
  await expect(chatbotContainer).toBeVisible();

  // Click the close button to close the chatbot
  const closeButton = page.getByRole('button', { name: 'X' });
  await closeButton.click();

  // Expect the chatbot container to be hidden again
  await expect(chatbotContainer).toBeHidden();
});
