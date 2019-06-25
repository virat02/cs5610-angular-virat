import { Injectable } from '@angular/core';
@Injectable()
export default class CourseNavigatorServiceClient {
  findAllCourses = () =>
    fetch
    ('http://localhost:8080/api/courses')
      .then(response => response.json())
}
