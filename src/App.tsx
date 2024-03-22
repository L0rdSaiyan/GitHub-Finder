import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import { List } from "./components/Title"
import { Outlet } from 'react-router-dom';
import { Lista } from './components/Title';
import styles from "./App.module.css"

function App() {


  // type personFunctionTypes = number | string


  // interface UserInterface<T> {
  //   name: string,
  //   age: number,
  //   data: T
  // }

  // const person : UserInterface<string[]> =
  // {
  //   name: "Victor",
  //   age: 18,
  //   data: ["joao", "victor", "teste"]
  // }

  // function personFunction<T extends personFunctionTypes = string>(data: T) {
  //   return data
  // }

  // const brabodosbrabo = personFunction("Victor")
  // console.log(typeof (brabodosbrabo))

  // console.log(brabodosbrabo)







  // const items = [
  //   {
  //     id: 1,
  //     name: "JOAO VICTOR"
  //   },
  //   {
  //     id: 2,
  //     name: "Diana"
  //   }
  // ]

  return (
    <div className={styles.App}>
        <h1>GitHub Finder</h1>
        <Outlet/>
    </div>
  );
}

export default App;
