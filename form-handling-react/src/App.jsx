import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm.js";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration</h1>

      {/* Controlled Component Form */}
      <RegistrationForm />

      <hr />

      {/* Formik Form */}
      <formikForm />
    </div>
  );
}

export default App;
