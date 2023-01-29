import { useState } from "react";
import { useEffect } from "react";
import User from "../User";
import s from './style.module.css'


function App() {

  // const default_users = [
  //   {
  //     id: 1,
  //     firstname: 'Иван',
  //     lastname: 'Лиходей',
  //     email: 'test1@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     firstname: 'Генадий',
  //     lastname: 'Зацепов',
  //     email: 'https://www.google.com/'
  //   },
  //   {
  //     id: 3,
  //     firstname: 'Людмила',
  //     lastname: 'Солодкина',
  //     email: 'https://www.youtube.com/'
  //   },
  // ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://fakestoreapi.com/users');
      const data = await resp.json();
      setUsers(data.map(({id, name, email }) => ({id, name, email })));
    })();
  }, []);


  return (
    <div className={s.container}>
      {
        users.map(user => <User key={user.id}{...user} />)
      }
    </div>
  );
}

export default App;
