import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "Api",
    baseQuery: fetchBaseQuery({
        baseUrl: 
        "https://fitnes-pro-df342-default-rtdb.europe-west1.firebasedatabase.app/",
    }),
    endpoint: (builder) => ({
        getAllCourses: builder.query({
            query: () => `courses.json`,
        }),
        getCourseByName: builder.query({
            query: (id) => `courses/${id}.json`,
        }),
        getWorkoutById: builder.query({
            query: (id) =>  ({
                url: `workouts/${id}.json`,
            }),
        }),
        getExercisesById: builder.query({
            query: () =>  `workouts/Exercises.json`,
        }),
        getExercises: builder.query({
            query: (id) =>  `workouts/${id}/Exercises/${id}.json`,
        }),
        getUser: builder.query({
            query: (id) =>  ({
                url: `users/${id}.json`,
            }),
        }),
        addNewUser: builder.mutation({
            query: (body) => ({
                url: `users/${body.id}.json`,
                method: "PUT",
                body: body.data,
            }),
        }),
        getWorkout: builder.query({
            query: (body) =>
            `users/${body.name}/courses/${body.name}/workouts/${body.workout}/url.json`,
        }),
        getUserProgress: builder.query({
            query: (id) => `users/${id}/usersCourse/trenings/Exercises/${id}/progress.json`,
        }),
        addUserProgress: builder.query({
            query: (id, body) => ({
                url: `users/${id}/usersCourse/trinings/Exercises/${id}/progress.json`,
                method: "POST",
                body: body.progress,
            }),
        }),
        setUserWorkoutCompleted: builder.mutation ({
            query: (body) => ({
                url: `users/${body.id}/courses/${body.name}/workouts/${body.workout}.json`,
                method: "PATCH",
                body:body.completed,
            }),
        }),
        addNewCourse: builder.mutation({
            query: (body) => ({
                url: `user/${body.id}/courses/${body.name}.json`,
                method: "PUT",
                body: body.data,
            })
        })
    }),
})

export const { useGetAllCoursesQuery, useGetCourseByNameQuery, useGetWorkoutByIdQuery, useGetUserQuery,
    useAddNewUserMutation, useGetUserProgressQuery, useSetUserWorkoutCompletedMutation, useAddNewCourseMutation,
   useAddUserProgressMutation, useGetExercisesByIdQuery, useGetExercisesQuery } = Api;