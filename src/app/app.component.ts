import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-let-var-const-examples';

  ngOnInit(): void {
    this.test();
  }

  test() {
    // Session examples

    let a = 15;
    if (true) {
      let a = 10;
      console.log("1", a);
    }
    console.log("2", a);

    var b = 15;
    if (true) {
      var b = 10;
      console.log("1", b);
    }
    console.log("2", b);

    const person = { name: "Jacob", age: "20" };
    console.log("1", person);

    person.name = "John";
    person.age = "25";

    console.log("2", person);

    var variable1 = "Hello";
    let variable2 = "World";
    const variable3 = "Welcome";

    if(true) {
      var variable1 = "Goodbye";
      let variable2 = "Universe";
      console.log("a", variable1);
      console.log("b", variable2);
      console.log("c", variable3);
    }

    console.log("d", variable1);
    console.log("e", variable2);
    console.log("f", variable3);

    // My examples

    // let 
    let d: number = 5;
    let e: number = 3;
    let sum = d + e;
    console.log("Sum:", sum);

    // var
    var num: number = 7;
    var num: number = 2;
    var sum2: number = num + num;
    console.log("Sum:", sum2);

    // const

    const num1: number = 10;
    const num2: number = 4;
    const sum3: number = num1 + num2;
    console.log("Sum:", sum3);


  }
}
