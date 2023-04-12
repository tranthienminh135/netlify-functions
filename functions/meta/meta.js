const puppeteer = require("puppeteer");

exports.handler = async (event, context) => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://www.facebook.com");

  await page.type("#email", "my email");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is what will be returned!",
    }),
  };
};
