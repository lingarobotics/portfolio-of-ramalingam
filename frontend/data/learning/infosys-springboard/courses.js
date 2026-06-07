import coursesData from './courses-data.json';

const courses = coursesData;

export const getCourseById = (courseId) =>
  courses.find((course) => course.id === courseId);

export const getCoursesByDomain = (domain) =>
  courses.filter((course) => course.domain === domain);

export const getCoursesByIds = (courseIds) =>
  courses.filter((course) => courseIds.includes(course.id));

export const getAllDomains = () =>
  [...new Set(courses.map((course) => course.domain))];

export default courses;
