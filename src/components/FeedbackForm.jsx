import React, { useState } from "react";
import Review from "./ReviewForm.jsx";

// don't change the Component name "App"
export default function FeedbackForm() {
  const [formData, setFormData] = useState({ feedback: "", student: "" });

  function handleFeedback(event) {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }
  /* The event.target object represents the DOM element
    (e.g., the <textarea> or <input>) that triggered the attached onChange event.
    It contains properties like name and value.

    Destructuring name and value:
    name: The name attribute of the input field (e.g., "feedback" or "student").
    value: The current value of the input field.

    Updating State with setFormData:
    setFormData is used to update the formData state.
    The formData represents the previous state of the form data.
    The function takes the previous state (formData) and returns a new state object.

    Spread Operator (...formData):
    The spread operator creates a copy of the previous state (prevData)
    to ensure that existing properties in the formData object are preserved.

    Dynamic Property Update:
    [name]: value dynamically updates the property in the formData
     object that matches the name of the input field.
    For example:
    If name is "feedback", it updates formData.feedback with the new value.
    If name is "student", it updates formData.student with the new value.
    name is a parameter that can be included in html elements
    <input name="student" type="text" onChange={handleFeedback} />
    <textarea name="feedback" onChange={handleFeedback} />

    Example Flow:
    User types "Great app!" in the textarea:
    event.target.name is "feedback".
    event.target.value is "Great app!".

    All this means you can have one useState using two way binding
    for two different inputs.
    The handleFeedback function will update the formData state
    with the new value for the corresponding input field.
    This is a common pattern in React for handling form inputs.
    It allows you to manage multiple form fields with a single state object.
 */

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea name="feedback" onChange={handleFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input name="student" type="text" onChange={handleFeedback} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={formData.feedback} student={formData.student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}
