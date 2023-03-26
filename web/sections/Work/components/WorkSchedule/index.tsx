import { FC } from "react";
import { Location } from "sections/Work/query";
import { ScheduleContainer, Virtual } from "./style";
import WEEKDAYS, { WeekDayKey } from "constants/weekdays";

const WorkSchedule: FC<{ location: Location }> = ({ location }) => (
  <ScheduleContainer>
    {Object.entries(WEEKDAYS).map(([key, value]) => {
      if (location.daysVirtual.includes(key as WeekDayKey)) {
		return (<li>{value.full}s <Virtual>Virtually</Virtual></li>)
      } else if (location.days.includes(key as WeekDayKey)) {
		return (<li>{value.full}s</li>)
	  }
      return null;
    })}
  </ScheduleContainer>
);

export default WorkSchedule;
