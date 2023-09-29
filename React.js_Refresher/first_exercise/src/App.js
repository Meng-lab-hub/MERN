import './App.css';
import React, { useState }from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

// using function
function App() {
  // return <h1 title='This works'>Hi, <span>this</span> is React simpler!</h1>; // => React createElement()

  // useState(); tells react to keep track of an item under its supervision and rerender when there is any change on this item
  // useState(); return array of two elements (a snapshot of latest state(in this case is our array of course goal) and a function that is allowed to make any modification on this state) 
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Understand Basic and necessary things of each module'},
    {id: 'cg3', text: 'Work on Personal Project'},
  ]);


  const addNewGoalHandler = NewGoal => {
    // courseGoals.push(NewGoal);
    // console.log(courseGoals);

    // setCourseGoals want a brand new array so we use concat(), since push() only modify the old array
    // setCourseGoals(courseGoals.concat(NewGoal));
    // we pass a function in setCourseGoals to prevent multiple action and a later action happens before the earlier action. This is to ensure that all action happen in the correct order.
    setCourseGoals((preCourseGoals) => {
      return preCourseGoals.concat(NewGoal);
    });
  }

  return (
    <div className='course-goal'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals} />
    </div>
  );
}
export default App;
