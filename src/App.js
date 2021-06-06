import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'Maruf Hasnat',
    age: 21
  }
  var style = {
    color: '#7CB9E8',
    fontSize: 40
  }
  const students = ['Rakibul', 'Hasan'];
  const products = [
    {name: 'PhotoShop', price: '99.00$'},
    {name: 'Illustrator', price: '89.00$'},
    {name: 'InDesign', price: '79.00$'}
  ];
  const [students2, setStudent] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setStudent(data))
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person firstName = 'Maruf' lastName = 'Hasnat'></Person>
        <Person firstName = 'Ibrahim' lastName = 'Hossain'></Person>
        <Person firstName = 'Azim' lastName = 'Ahmed'></Person>
        <Person firstName={students[0]} lastName={students[1]}></Person>
        {/* <Person fullName={students}></Person> */}
        {
          students.map(student => <Person fullName={student}></Person>)
        }
        <p style={style}>Hello React! This is {person.name}</p>
        <Counter></Counter>
        <Users></Users>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <ul>
          {
            products.map(product => <li>{ product.name }</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product> */}
        {
          students2.map((student) => <Students name={student.name} key={student.id}></Students>)
        }
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: '2px solid #61dafb', color: '#61dafb', padding: '10px', margin: '10px' }}>
      <h2>Name: {props.firstName + ' ' + props.lastName}</h2>
      <p>Student of IUBAT {props.fullName}</p>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    width: '200px',
    height: '230px',
    marginBottom: '30px',
    border: '1px solid #61dafb',
    borderRadius: '5px',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      {/* <h3>{props.name}</h3> */}
      {/* <h5>{props.price}</h5> */}
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const decreaseHandler = () => setCount(count - 1);
  const increaseHandler = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
      <NumberCounter number={count}></NumberCounter>
    </div>
  )
}

function NumberCounter(props) {
  return (
    <h4>Number Counter: {props.number}</h4>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Students(props) {
  const name = props.name;
  return (
    <div style={{ border: '2px solid #61dafb', color: '#61dafb', padding: '10px', margin: '10px' }}>
      <h2>Name: {name}</h2>
      <p>Student of IUBAT</p>
    </div>
  )
}


export default App;
