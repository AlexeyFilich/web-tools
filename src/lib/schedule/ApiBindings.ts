/// From responce data of https://iis.bsuir.by/api/v1/schedule

export namespace ApiBindings {
    export type ClassType = 'ЛК' | 'ПЗ' | 'ЛР';

    export const dayOfTheWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] as const;

    export type DayOfTheWeek = typeof dayOfTheWeek[number];

    export type Professor = {
        id: number,
        firstName: string,
        middleName: string,
        lastName: string,
        photoLink: string,
        degree: string,
        degreeAbbrev: string,
        rank: string,
        email: string | null,
        department: string | null,
        urlId: string,
        calendarId: string,
        jobPositions: null
    };

    export type StudentGroup = {
        specialityName: string,
        specialityCode: string,
        numberOfStudents: number,
        name: string,
        educationDegree: number
    };

    export type StudentGroupDto = {
        id: number,
        name: string,
        facultyId: number,
        facultyAbbrev: string,
        specialityDepartmentEducationFormId: number,
        specialityAbbrev: string,
        specialityName: string,
        course: number,
        educationDegree: number,
        calendarId: string
    };

    export type ClassData = {
        lessonTypeAbbrev: ClassType,
        subject: string,
        subjectFullName: string,
        auditories: string[],
        startLessonTime: string,
        endLessonTime: string,
        note: null,
        numSubgroup: number,
        studentGroups: StudentGroup[],
        weekNumber: number[],
        employees: Professor[],
        dateLesson: null,
        startLessonDate: string,
        endLessonDate: string,
        announcementStart: null,
        announcementEnd: null,
        announcement: boolean
    };

    export type WeekSchedule = {
        [key in DayOfTheWeek]: ClassData[];
    };

    export type Schedule = {
        startDate: string,
        endDate: string,
        startExamsDate: string | null,
        endExamsDate: string | null,
        employeeDto: null,
        studentGroupDto: StudentGroupDto,
        schedules: WeekSchedule,
        exams: any[]
    };
};
