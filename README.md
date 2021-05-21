# Lab8_Starter
Tyler Ng

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, the message feature would be far too complex for a unit test as it involves interacting between the client UIs and the backend. Too many moving parts

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, it is simple to check whether the message length before it is sent.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

It would probably not open a browser and would run tests on the cmd line only (no UI)

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

You would want to navigate to the settings page manually like so:
Code:
```jsx

...
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);

    await page.$eval('body', body => {
        body.classList.add('settings');
        history.pushState({ page: 'settings' }, '', './#settings');
    });
    await page.$eval('header > h1', headerText => {
        headerText.innerHTML = 'Settings';
    });
  });
...
```