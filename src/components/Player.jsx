import { useState } from "react";

export default function Player(props) {
  const [playerName, setPlayerName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
    // The ! operator inverts the value of isEditing
    // to act as a toggle function
    // If isEditing is true, it becomes false
    // If isEditing is false, it becomes true
    // This is a common pattern in React for toggling state
    // It is very important to know that you should pass a function
    // when the new state depends on the previous state
    // This is because React batches state updates for performance reasons
    // and the new state may not be immediately available
    // So, by passing a function, you ensure that you are
    //  always using the latest state.
    // If your new state depends on your previous state value,
    //  you should not update the state like this:
    // setIsEditing(!isEditing)
    // React uses the previous state value to calculate the new state (i)
  }

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(() => event.target.value);
    // setPlayerName is used to update the state of playerName
    // The event.target.value is the value of the input field.
    // This works as the event object is passed handleChange
    // when the onChange event is triggered
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" value={playerName} onChange={handleChange} />
          // The onChange event is triggered when keystrokes are
          // made in the input field. This is then passed to the handleChange function.
          //Using value={playerName} ensures that the input field's value is always in sync with the playerName state.
          // This is a controlled component, meaning that the component's value is controlled by React.
          // This is important for form elements in React
          // as it allows you to manage the state of the input field
          // and perform actions based on the input value.
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
