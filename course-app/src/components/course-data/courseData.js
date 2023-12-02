import { useEffect, useState } from 'react'
import { useGetAllCoursesQuery } from '../../helpers/store/server'



// информация о всех курсах, Надо реолизовать для подключения 

export const useCourseInfo = () => {
  const { data: courseData, error, isLoading } = useGetAllCoursesQuery()

  const [CourseInfo, SetCourseInfo] = useState([])

  useEffect(() => {
    if (!courseData) {
      return
    }
    const courseId = Object.keys(courseData)

    const Courses = [
      {
        id: courseId[0],
        name: 'Йога',
        data: isLoading ? [] : courseData[courseId[0]] || [],
      },
      {
        id: courseId[1],
        name: 'Cтретчинг',
        data: isLoading ? [] : courseData[courseId[1]] || [],
      },
      {
        id: courseId[2],
        name: 'Бодифлекс',
        data: isLoading ? [] : courseData[courseId[2]] || [],
      },
      {
        id: courseId[3],
        name: 'Танцевальный фитнес',
        data: isLoading ? [] : courseData[courseId[3]] || [],
      },
      {
        id: courseId[4],
        name: 'Степ-аэробика',
        data: isLoading ? [] : courseData[courseId[4]] || [],
      },
    ]
    SetCourseInfo(Courses)
  }, [courseData])

  return { courseData, error, CourseInfo, isLoading }
}
