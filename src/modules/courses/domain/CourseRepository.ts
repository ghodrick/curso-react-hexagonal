import { Course } from "./Course";

export interface CourseRepository {
    save: (course: Course) => Promise<void>;
    get: (courseId: string) => Promise<Course | null>;
    getAll: () => Promise<Course[]>;
}