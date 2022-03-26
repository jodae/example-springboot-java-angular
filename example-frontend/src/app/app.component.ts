import { Component } from '@angular/core';
import { first, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-springboot-java-angular';
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:8080/message')
      .pipe(
        tap((result) =>
          console.log(
            'Message received from the server: ',
            (result as any).message
          )
        ),
        map((result) => (this.message = (result as any).message))
      )
      .subscribe();
  }
}
