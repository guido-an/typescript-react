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


  return (
    <div>
      <Home/>
      {/* <Heading title="Welcome TS" subtitle="We are getting there" />
      <Button text="I am a button" color={ButtonColor.Green} margin="10px" />
      <DisplayOrderStatus />
      <Counter /> */}
    </div>
  );
}

export default App;
