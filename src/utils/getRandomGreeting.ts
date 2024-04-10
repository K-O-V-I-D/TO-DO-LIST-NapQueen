/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
let timeoutId: NodeJS.Timeout;

export const getRandomGreeting = (): string => {
  const greetingsText: string[] = [
    "KOVID TIWARI",
    "VIT-BHOPAL",
    "CSE(CYBER SECURITY)",
    "2025 BATCH"
  ];

  const randomIndex = Math.floor(Math.random() * greetingsText.length);
  const greeting = greetingsText[randomIndex];

  // Clear any existing timeout
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Set a new timeout to clear the greeting after 15 seconds
  timeoutId = setTimeout(() => {
    clearGreeting();
  }, 15000); // 15 seconds in milliseconds

  return greeting;
};

// Function to clear the greeting
const clearGreeting = (): void => {
  clearTimeout(timeoutId);
};

