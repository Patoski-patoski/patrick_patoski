export const CAREER_START_YEAR = 2021;
export const ANNIVERSARY_MONTH = 1; // February (0-indexed)
export const ANNIVERSARY_DAY = 14;

/**
 * Years of experience, bumping every February 14.
 * Pass `now` explicitly in tests instead of relying on the live clock.
 */
export const getYearsOfExperience = (now?: Date): number => {
  const ref = now ?? new Date();
  let years = ref.getFullYear() - CAREER_START_YEAR;
  const hasHadAnniversaryThisYear =
    ref.getMonth() > ANNIVERSARY_MONTH ||
    (ref.getMonth() === ANNIVERSARY_MONTH &&
      ref.getDate() >= ANNIVERSARY_DAY);
  if (!hasHadAnniversaryThisYear) years -= 1;
  return Math.max(years, 0);
};
