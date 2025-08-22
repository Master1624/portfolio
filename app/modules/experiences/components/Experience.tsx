import type { ExperienceType } from "../types";
import {
  Card,
  Chip,
} from "@mui/material";
import { formatStartEndDate } from "../utils";

export function Experience({ experience }: { experience: ExperienceType }) {
  const { startDate, endDate } = experience;
  const newDate = formatStartEndDate(startDate, endDate);
  return (
    <div className="items-center justify-center w-96 rounded-xl not-dark:hover:shadow-xl/50 not-dark:hover:shadow-slate-800/50 dark:hover:inset-ring dark:hover:inset-ring-slate-200/20 dark:hover:shadow-xl/50 dark:hover:shadow-slate-200/50">
      <a
        className="grid grid-rows-2 items-center justify-items-center p-4"
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="flex items-center p-3 w-52 h-20">
          <img src={experience.logo} alt={`${experience.company} logo`} />
        </Card>
        <div className="">
          <h1 className="text-3xl font-bold">{experience.company}</h1>
          <p className="text-xl font-semibold dark:text-slate-400 dark:font-semibold">
            {experience.position}
          </p>
          <p>{newDate}</p>
          <div className="flex flex-row flex-wrap items-center justify-center mt-2 space-x-2 gap-2">
            {experience.technologies.map((technology, index) => (
              <Chip
                className="dark:text-slate-200! dark:font-semibold"
                variant="outlined"
                key={index}
                label={technology}
              />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
