import { ApiBindings } from './ApiBindings';

export const WEEK_COUNT = 4;
export const WEEK_LENGTH = ApiBindings.dayOfTheWeek.length;

export type Professor = {
    lastName: string,
    firstName: string,
    patronymic: string
};

export type ClassData = {
    classType: ApiBindings.ClassType
    className: string,
    startTime: string,
    endTime: string,
    auditory: string,
    professor?: Professor
};

export type WeekSchedule = {
    [key in ApiBindings.DayOfTheWeek]?: ClassData[];
};

export type Schedule = WeekSchedule[];
