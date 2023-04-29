import { FC } from "react";
import { Location } from "sections/Work/query";
import { ScheduleContainer } from "./style";
import WEEKDAYS, { WeekDayKey } from "constants/weekdays";

const getFullDayString = (day: WeekDayKey) => WEEKDAYS[day].full;

const WorkSchedule: FC<{ location: Location }> = ({ location }) => {
  const daysOnLocation = location.days.length;
  const daysVirtually = location.daysVirtual.length;
  let scheduleString = "* Available ";

  if (daysOnLocation + daysVirtually === 1) {
    scheduleString +=
      getFullDayString(
        daysOnLocation ? location.days[0] : location.daysVirtual[0]
      ) + "s";
  }

  scheduleString += location.days
    .map((day, i) => {
      let dayString = " ";
      if (i === daysOnLocation - 1 && daysVirtually === 0) {
        dayString += "and ";
      }
      dayString += getFullDayString(day);
      if (i === daysOnLocation - 1) {
        dayString += " in person";
      }
      return dayString;
    })
    .concat(
      location.daysVirtual.map((day, i) => {
        let dayString = " ";
        if (i === daysVirtually - 1) {
          dayString += "and ";
        }
        return dayString + getFullDayString(day) + "s virtually";
      })
    );

  return <ScheduleContainer>{scheduleString}</ScheduleContainer>;
};

export default WorkSchedule;
