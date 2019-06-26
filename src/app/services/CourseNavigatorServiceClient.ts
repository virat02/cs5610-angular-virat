import { Injectable } from '@angular/core';
@Injectable()
export class CourseNavigatorServiceClient {
  findAllCourses = () =>
    fetch
    ('https://dry-earth-81729.herokuapp.com/api/courses')
      .then(response => response.json())
}
