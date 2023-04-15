import { Course } from "./Course";

export interface CourseRepository {
    save: (course: Course) => void;
    get: (courseId: string) => Course | null;
    getAll: () => Course[];
}