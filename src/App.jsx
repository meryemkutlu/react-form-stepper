import { Form, Formik, Field } from "formik";
function App() {
  return (
    <div>
      <Formik
        initialValues={{
          step: 1,
          LastStep: 3,
          //step 1
          name: "",
          surname: "",
          //step 2
          age: "",
          job: "",
          //step 3
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };

          return (
            <Form className="w-[500px] py-5 mx-auto">
              <header className="mb-4">
                <h3 className="text-lg font-medium text-zinc-700">
                  Adim {values.step}
                </h3>
              </header>

              {values.step === 1 && (
                <div className="grid gap-2.5">
                  <Field name="name" className="input" placeholder="Name" />
                  <Field
                    name="Surname"
                    className="input"
                    placeholder="Surname"
                  />
                </div>
              )}

              {values.step === 2 && (
                <div className="grid gap-2.5">
                  <Field name="age" className="input" placeholder="Age" />
                  <Field name="job" className="input" placeholder="Job" />
                </div>
              )}

              {values.step === 3 && (
                <div className="grid gap-2.5">
                  <Field
                    name="about"
                    component="textarea"
                    className="textarea"
                    placeholder="About"
                  />
                </div>
              )}
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {(values.step > 1 && (
                  <button onClick={prevHandle} type="button" className="button">
                    Prev
                  </button>
                )) || <div />}
                {(values.step === values.LastStep && (
                  <button className="button" type="submit">
                    Submit
                  </button>
                )) || (
                  <button onClick={nextHandle} type="button" className="button">
                    Next
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
