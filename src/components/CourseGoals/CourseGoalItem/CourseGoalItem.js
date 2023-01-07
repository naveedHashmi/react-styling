import React from 'react';
import styled from 'styled-components';
// import './CourseGoalItem.css';

const ListItem = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  // return (
  //   <li className="goal-item" onClick={deleteHandler}>
  //     {props.children}
  //   </li>
  // );

  return (
    <ListItem className="goal-item" onClick={deleteHandler}>
      {props.children}
    </ListItem>
  );
};

export default CourseGoalItem;
