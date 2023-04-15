import { CourseIdNotValidError, isCourseIdValid } from "./CourseId";
import { CourseImageUrlNotValidError, isCourseImageUrlValid } from "./CourseImageUrl";
import { CourseTitleNotValidError, isCourseTitleValid } from "./CourseTitle";

//create interface for course.ts
export interface Course {
	id: string;
	title: string;
	imageUrl: string;
}

export function ensureCourseIsValid({ id, title, imageUrl }: Course) {

	if (!isCourseIdValid(id)) 
	{
		throw CourseIdNotValidError(id);
	}

	if (!isCourseTitleValid(title))
	{
		throw CourseTitleNotValidError(title);
	}

	if (!isCourseImageUrlValid(imageUrl)) 
	{
		throw CourseImageUrlNotValidError(imageUrl);
	}

}