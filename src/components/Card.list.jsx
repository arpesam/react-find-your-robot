import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  if (true)
    throw new Error('noooooo')
  const cardArray = robots.map(user => {
    return <Card key={user.id} id={user.id} name={user.name} email={user.email} username={user.username} />
  });
  return (
    <div>
      {cardArray}
    </div>
  )
}

export default CardList;