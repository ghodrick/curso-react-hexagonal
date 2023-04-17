import React, { useEffect, useState } from "react";
import { isCourseImageUrlValid } from "../../modules/courses/domain/CourseImageUrl";
import {
	isCourseTitleValid,
	TITLE_MAX_LENGTH,
	TITLE_MIN_LENGTH,
} from "../../modules/courses/domain/CourseTitle";
import { Spinner } from "../shared/Spinner";
import { FormStatus, useCourseForm } from "./useCourseForm";
import { useCourseFormData } from "./useCourseFormData";
import { useValidationCourse } from "./useValidationCourse";

const initialState = {
	title: "",
	imageUrl: "",
};

export function CreateCourseForm() {
	const { formData, updateForm, resetForm } = useCourseFormData(initialState);
	const { formStatus, submitForm, resetFormStatus } = useCourseForm();
	const {errors} = useValidationCourse(initialState, formData);

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();

		submitForm(formData);
	};

	switch (formStatus) {
		case FormStatus.Loading:
			return <Spinner />;
		case FormStatus.Success:
			return (
				<SuccessNotification
					resetForm={() => {
						resetForm();
						resetFormStatus();
					}}
				/>
			);
		case FormStatus.Error:
			return <ErrorNotification resetForm={resetFormStatus} />;
		case FormStatus.Initial:
			return (
				<section id="order" className="">
					<h2 className="text-left text-lg text-slate-900 font-bold mb-6">🧑‍🏫 Create new course</h2>

					<form
						onSubmit={(ev) => {
							handleSubmit(ev);
						}}
						className="flex flex-col gap-4"
					>
						<div className="flex flex-col gap-2">
							<label htmlFor="title">Course title</label>
							<input
								id="title"
								name="title"
								type="text"
								value={formData.title}
								onChange={(ev) => {
									updateForm({ title: ev.target.value });
								}}
								className="bg-gray-100 p-1 rounded-md w-full"
							/>
							{formData.title && errors.title && (
								<div className="text-xs text-red-500 tracking-wider">{errors.title}</div>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="imageUrl">Image URL</label>
							<input
								id="imageUrl"
								name="imageUrl"
								type="text"
								value={formData.imageUrl}
								onChange={(ev) => {
									updateForm({ imageUrl: ev.target.value });
								}}
								className="bg-gray-100 p-1 rounded-md w-full"
							/>
							{formData.imageUrl && errors.imageUrl && (
								<div className="text-xs text-red-500 tracking-wider">{errors.imageUrl}</div>
							)}
						</div>
								
						<button className="bg-blue-500 px-5 py-1 text-white font-regular rounded-md mt-5 hover:bg-blue-600 transition-all active:bg-blue-700" type="submit">
							Create course
						</button>
					</form>
				</section>
			);
		default:
			assertUnreachable(formStatus);
	}
}

function SuccessNotification({ resetForm }: { resetForm: () => void }) {
	return (
		<section>
			<h2>🚀 Course created</h2>
			<button className="bg-blue-500 px-5 py-1 text-white font-regular rounded-md mt-5 hover:bg-blue-600 transition-all active:bg-blue-700" onClick={resetForm}>Create a new course</button>
		</section>
	);
}

function ErrorNotification({ resetForm }: { resetForm: () => void }) {
	return (
		<section role="alert" className="error">
			<h2>🌋 You have an error in your form</h2>
			<button onClick={resetForm}>Ok, let me try again</button>
		</section>
	);
}

function assertUnreachable(_x: never): never {
	throw new Error("Didn't expect to get here");
}