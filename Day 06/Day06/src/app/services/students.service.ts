import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly APIURL = 'http://localhost:3000/students';
  constructor(private readonly client: HttpClient) {}

  GetAll() {
    return this.client.get(this.APIURL);
  }

  GetById(id: any) {
    return this.client.get(this.APIURL + '/' + id);
  }

  Create(student: any) {
    return this.client.post(this.APIURL, student);
  }
  Update(student: any) {
    return this.client.put(this.APIURL+'/' + student.id, student );
  }
  Delete(id: any) {
    return this.client.delete(this.APIURL + '/' + id);
  }
}
