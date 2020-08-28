import React from 'react';
 import Section from './Section'
const initialList = [
  { id: 1, name: 'Learn React' },
  { id: 2, name: 'Learn Firebase'  },
  { id: 3, name: 'Learn GraphQL'  },
];
 
const ListWithAddItem = () => {
  const [list] = React.useState(initialList);
 
 
  return (
    <ul>
      {list.map(item ,index=> {
         <li key={item.id}>
      
            {item.name}
    
        </li>
})}
    </ul>
  );
};
 
export default ListWithAddItem;