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

test('chatbot can answer a question', async ({ page }) => {
  // Mock the API response
  await page.route('/api/v1/chat/query', async route => {
    const json = {
      answer: 'This is a test answer.',
      references: ['ref1', 'ref2'],
    };
    await route.fulfill({ json });
  });

  // Navigate to the Docusaurus site
  await page.goto('http://localhost:3000');

  // Open the chatbot
  const toggleButton = page.getByRole('button', { name: 'Open Chat' });
  await toggleButton.click();

  // Type a question and send
  await page.getByPlaceholder('Ask a question...').fill('What is AI?');
  await page.getByRole('button', { name: 'Send' }).click();

  // Expect the answer to be visible
  const answer = page.getByText('This is a test answer.');
  await expect(answer).toBeVisible();
});