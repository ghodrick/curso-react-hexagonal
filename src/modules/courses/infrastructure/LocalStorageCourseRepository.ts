import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";

export function createLocalStorageCourseRepository(): CourseRepository {
    return {
        save,
        get,
        getAll
    };
}

function save(course: Course) {
    const courses = getAllFromLocalStorage();

    courses.set(course.id, course);

    localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));
}

function getAllFromLocalStorage(): Map<string, Course> {
    
    const courses = localStorage.getItem("courses");

    if (courses === null) 
    {
		return new Map();
	}

	const map = new Map(JSON.parse(courses) as Iterable<[string, Course]>);

	return map;
}

function get(courseId: string): Course | null {
    const courses = getAllFromLocalStorage();

    return courses.get(courseId) ?? null;
}

function getAll() {
	const courses = getAllFromLocalStorage();

	return Array.from(courses.values());
}
