import React from "react";
import './GoalList.css';


// goal is each item in the array goals. It is an item on each iteration when map function perform on each item in goals array.
const GoalList = props => {
    return (
        <ul className='goal-list'> {
            props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>;
            })
        }</ul>
    );
};

export default GoalList;