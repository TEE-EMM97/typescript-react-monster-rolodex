import React from 'react'
import { Monster } from '../../../@types/rolodex.types'
type Props = {
	monster: Monster
}

const Card = ({monster: { id, name, email }}: Props) => {
  return (
    <div key={id} className='card-container'>
		  <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
		  <h3>{name}</h3>
		  <p>{email}</p>
    </div>
  );
}

export { Card }
