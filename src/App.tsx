import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import UserComponent from './UserComponent';
import { Button } from './Button';
import { Heading } from './Heading';
import { ButtonColor } from './enums';
import { DisplayOrderStatus } from './Order';
import { Counter } from './Counter';
import { Home } from './TodoChallenge/Home';
import UserCardExample from './TSpractice/UserCardExample';
import { UserCard } from './TSpractice/UserCard';
import { UserList } from './TSpractice/UserList';
import { HomeTSPractice } from './TSpractice/HomeTSPractice';

function App() {

  // 1) TYPE ANNOTATIONS
  const name: string = 'guido'
  const age: number = 30

  // 2) INTERFACES AND TYPES
  interface Person {
    name: string;
    age: number;
    email?: string; // optional property
  }

  interface Dog {
    favouriteFood: string;
    age: number;
    music?: { name: string, bpm: number }
    parks: string[];
    friend: [number, string]; // Tuple, new ts concept
    cats: any;
  }

  interface Point {
    x: number;
    y: number;
  }

  // 3) FUNCTION TYPES
   function add(x: number, y: number): number {
    return x + y
   }

   type AddFunction = (a: number, b: number) => number;

   // 4) TYPE ALIASES
   type Country = {
    name: string,
    population: number
   }

   type Backpacker = {
    name: string,
    places: Country[]
   }

   // 5) ENUMS are a way to define a set of named constants, 
   //    giving more semantic meaning to values
   enum Color {
    Red,
    Green,
    Blue = "blue"
   }

   // 6 TYPE ASSERTION to tell the TypeScript compiler 
   // that we know the actual type of a value better than it does.
   let message: any = "Hello TS"
   let messageLength: number = (message as string).length

   const primaryColor: Color = Color.Blue

   // *** Advanced Types 

   // Union types
   type myType = string | number | boolean

   // Intersection types 
   type Human = {
    name: string,
    age: number
   }

   type Employee = {
    employeeId: string
   }

   type EmployeeWithDetails = Person & Employee

   // Type guards
   function StudentId(x: string | number) {
    if (typeof x == 'string') {
        console.log('Student');
    }
    if (typeof x === 'number') {
        console.log('Id');
    }
}

// Type alias 
    type CarYear = number;
    type CarType = string;
    type CarModel = string;

    type Car = {
      year: CarYear,
      type: CarType,
      model: CarModel
    }

  // Mapped types
  type MyObject = {
    name: string,
    age: number 
  }

  type ModifiedObject = {
    [Key in keyof MyObject]: MyObject[Key] | null;
  };

  // Conditional Mapped Types
  type ConditionalMappedTypes<T> = {
    [Key in keyof T]: T[Key] extends number ? "Number" : "Not a number"
  }

  type MyObject2 = {
    name: string,
    age: number
  }

  type PropertyType = ConditionalMappedTypes<MyObject2>

  // PropertyType will be:
  // {
  //   name: "Not a Number";
  //   age: "Number";
  //   city: "Not a Number";
  // }


  // Partial: makes all properties of a type optional
  type MyObject3 = {
    name: string,
    age: number
  }
  type PartialObject = Partial<MyObject>
    
  // PartialObject will be:
     // {
     //   name?: string;
     //   age?: number;
     // }

     // Readonly 
     type MyObject4 = {
      name: string;
      age: number;
    };
    
    type ReadonlyObject = Readonly<MyObject4>;


    const user = {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      street: 'My street 123',
      city: 'Ancona'
    };

    interface User {
      id: number,
      name: string,
      email: string,
      age: number,
      isAdmin: boolean
  }

  const userCard = {
    id: 1,
    name: 'Guido',
    email: 'email@gmail.com',
    age: 30,
    isAdmin: false
  }


  return (
    <div>
      <Home/>
     <HomeTSPractice/> 
    
 
       {/* <Counter /> */}

       
    </div>
  );
}

export default App;
