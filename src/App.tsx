import { CoursesContextProvider } from "./sections/courses/CoursesContext";
import { CoursesList } from "./sections/courses/CourseList";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";
import { createLocalStorageCourseRepository } from "./modules/courses/infrastructure/LocalStorageCourseRepository";

export function App() {

  const repository = createLocalStorageCourseRepository();

	return (
		<CoursesContextProvider repository={repository}>
			<div className="App bg-gray-50">
        <div className="min-h-screen max-w-5xl flex flex-col justify-center items-center mx-auto">
          <div className="w-full">
            <h1 className="text-slate-600 text-center font-bold text-2xl mb-8">Curso Hexagonal React</h1>
            <div className="bg-white rounded-lg px-8 py-8 shadow-md">
              <CoursesList />
              <CreateCourseForm />
            </div>
          </div>
        </div>
			</div>
		</CoursesContextProvider>
	);
}