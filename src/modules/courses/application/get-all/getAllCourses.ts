import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export async function getAllCourses(courseRepository: CourseRepository) {
    return await courseRepository.getAll();
}