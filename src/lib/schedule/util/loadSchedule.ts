import { ApiBindings } from '$lib/schedule/ApiBindings';
import { WEEK_COUNT, type ClassData, type Professor, type Schedule, type WeekSchedule } from '$lib/schedule/Schedule';

export const STUDENT_GROUP = '050702';

export async function loadSchedule(): Promise<Schedule> {
    let schedule: Schedule = Array.from({ length: WEEK_COUNT }, () => {
        let weekSchedule: { [key: string]: any } = {};
        ApiBindings.dayOfTheWeek.forEach(day => weekSchedule[day] = []);
        return weekSchedule as WeekSchedule;
    });

    const response = await fetch(`https://iis.bsuir.by/api/v1/schedule?studentGroup=${STUDENT_GROUP}`);
    const data = (await response.json()) as ApiBindings.Schedule;

    for (const [dayProperty, classes] of Object.entries(data.schedules)) {
        for (const classData of classes) {
            const day = dayProperty as ApiBindings.DayOfTheWeek;

            if (classData.auditories.length > 1 && classData.employees.length > 1)
                console.log('Something went wrong');

            const professor: Professor | undefined = classData.employees[0] ? {
                lastName: classData.employees[0].lastName,
                firstName: classData.employees[0].firstName,
                patronymic: classData.employees[0].middleName
            } : undefined;

            const scheduleClassData: ClassData = {
                classType: classData.lessonTypeAbbrev,
                className: classData.subject,
                fullClassName: classData.subjectFullName,
                startTime: classData.startLessonTime,
                endTime: classData.endLessonTime,
                auditory: classData.auditories[0] || '???',
                professor
            }


            for (const weekNumber of classData.weekNumber)
                schedule[weekNumber - 1][day]?.push(scheduleClassData);
        }
    }

    return schedule;
};
