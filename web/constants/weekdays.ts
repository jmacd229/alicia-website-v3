const WEEKDAYS = {
  mon: { full: "Monday", shortenedLetters: 3 },
  tue: { full: "Tuesday", shortenedLetters: 4 },
  wed: { full: "Wednesday", shortenedLetters: 3 },
  thu: { full: "Thursday", shortenedLetters: 5 },
  fri: { full: "Friday", shortenedLetters: 3 },
  sat: { full: "Saturday", shortenedLetters: 3 },
  sun: { full: "Sunday", shortenedLetters: 3 },
};

export type WeekDayKey = keyof typeof WEEKDAYS;

export default WEEKDAYS;
