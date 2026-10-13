// Founded 3 August 2011 (month is 0-based)
export const FOUNDED = new Date(2011, 7, 3);

/** Completed years in operation; ticks over on each 3 August anniversary. */
export const yearsInBusiness = (now = new Date()) => {
  const years = now.getFullYear() - FOUNDED.getFullYear();
  const anniversary = new Date(now.getFullYear(), FOUNDED.getMonth(), FOUNDED.getDate());
  return now < anniversary ? years - 1 : years;
};
