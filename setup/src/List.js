import React from 'react';

const List = (props) => {
  return (
    <>
     {props.people.map((person)=>{
      const {age,image,id,name}=person;
      return(
        <article key={id} className='person'>
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <h3>{age}</h3>
        </div>


        </article>

      )

     })
     }
    </>
  );
};

export default List;
