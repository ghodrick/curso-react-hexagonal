import { CourseCard } from "./CourseCard";
import { useCoursesContext } from "./CoursesContext";
import styles from "./CoursesList.module.scss";

export function CoursesList() {
	const { courses } = useCoursesContext();

	console.log(courses);

	return (
		<section>
			<h2 className="text-left text-lg text-slate-900 font-bold mb-6">Current courses</h2>
			<div className={styles.list}>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</section>
	);
}