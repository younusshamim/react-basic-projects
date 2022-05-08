import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import Question from "./Question";
function App() {
  return (
    <div className="container">
      <h3>question and answers about login</h3>
      <section className="info">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}

export default App;
