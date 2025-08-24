import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration</h1>
      
      {/* Controlled Component Form */}
      <RegistrationForm />

      <hr />

      {/* Formik Form */}
      <FormikForm />
    </div>
  );
}

export default App;
