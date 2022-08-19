import { ApiBindings } from './ApiBindings';

export const WEEK_COUNT = 4;
export const WEEK_LENGTH = ApiBindings.dayOfTheWeek.length;
export const MAX_CLASSES_PER_DAY = 4;

export type Professor = {
    lastName: string,
    firstName: string,
    patronymic: string
};

export type ClassData = {
    classType: ApiBindings.ClassType
    className: string,
    fullClassName: string,
    startTime: string,
    endTime: string,
    auditory: string,
    professor?: Professor
};

export type WeekSchedule = {
    [key in ApiBindings.DayOfTheWeek]?: ClassData[];
};

export type Schedule = WeekSchedule[];
