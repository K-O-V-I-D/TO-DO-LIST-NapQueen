/**
 * Returns a greeting based on the current time.
 * @returns {string} The appropriate greeting.
 */
export const displayGreeting = (): string => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting: string;
  if (currentHour < 12 && currentHour >= 5) {
    greeting = "TO-DO";
  } else if (currentHour < 18 && currentHour > 12) {
    greeting = "TO-DO";
  } else {
    greeting = "TO-DO";
  }

  return greeting;
};
