/**
 * @jest-environment jsdom
 */

import { validateUrl } from "./../src/client/js/validateUrl";

describe("validateUrl", () => {
  let warningElement;

  beforeEach(() => {
    // Create a mock element for the warning message
    warningElement = document.createElement("div");
    warningElement.className = "warning";
    document.body.appendChild(warningElement);
  });

  afterEach(() => {
    // Clean up the warning element after each test
    document.body.removeChild(warningElement);
  });

  test("returns false and displays warning message when URL is empty", () => {
    const emptyUrl = "";
    expect(validateUrl(emptyUrl)).toBe(false);
    expect(warningElement.innerHTML).toBe("Please Enter a Valid Webpage URL");
  });

  test("returns false and displays warning message when URL is invalid", () => {
    const invalidUrl = "invalid-url";
    expect(validateUrl(invalidUrl)).toBe(false);
    expect(warningElement.innerHTML).toBe("Please Enter a Valid Webpage URL");
  });

  test("returns true and does not display warning message when URL is valid", () => {
    const validUrl = "https://example.com";
    expect(validateUrl(validUrl)).toBe(true);
    expect(warningElement.innerHTML).toBe("");
  });
});
