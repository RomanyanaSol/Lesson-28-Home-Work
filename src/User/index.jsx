import React from 'react';
import s from './style.module.css';

export default function User({name, email}) {
  return (
    <div className={s.card}>
      <p>{name.firstname} {name.lastname}</p>
      <a href="true">{email}</a>
    </div>
  )
}
