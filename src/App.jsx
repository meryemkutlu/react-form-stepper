import { Form, Formik, Field, ErrorMessage } from "formik";
import { stepperValidation } from "./validations/stepper-validation";
import classNames from "classnames";

function App() {
  const steps = [
    { step: 1, title: "Kisisel Bilgiler" },
    { step: 2, title: "Yas ve Calisma" },
    { step: 3, title: "Hakkinda " },
    { step: 4, title: "WWW" },
  ];

  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          lastStep: 4,
          //step 1
          name: "",
          surname: "",
          //step 2
          age: "",
          job: "",
          //step 3
          about: "",
          //step 4
          blog: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue, isValid, dirty, errors }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };
          const stepHandle = (step) => {
            setFieldValue("step", step);
          };

          return (
            <Form className="w-[500px] py-5 mx-auto">
              {/* { {new Array(values.lastStep).fill("").map((_, key) => (
                  <button key={key}>{key + 1}</button>
                ))}
                .Adim  } */}
              <header className="grid grid-cols-4 gap-x-2.5 border border-zinc-400 rounded-md mb-4">
                {steps.map((step) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => stepHandle(step.step)}
                    disabled={values.step < step.step}
                    className="flex flex-col items-center justify-center py-2.5"
                  >
                    <div
                      className={classNames(
                        " w-10 h-10 mb-2.5 rounded-full flex items-center justify-center ",
                        {
                          "bg-blue-100 text-blue-600":
                            values.step === step.step,
                          "bg-green-100 text-green-600":
                            values.step > step.step,
                          "bg-zinc-100 text-zinc-700":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {values.step > step.step ? "✅" : step.step}
                    </div>

                    <div
                      className={classNames("text-sm ", {
                        " text-blue-600": values.step === step.step,

                        " text-green-600": values.step > step.step,
                        " text-zinc-700": values.step !== step.step,
                      })}
                    >
                      {step.title}
                    </div>
                  </button>
                ))}
              </header>

              <header className="mb-4">
                <h3 className="text-lg font-medium text-zinc-700">
                  Adim {values.step}
                </h3>
              </header>

              {values.step === 1 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field name="name" className="input" placeholder="Name" />
                    <ErrorMessage
                      name="name"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="surname"
                      className="input"
                      placeholder="Surname"
                    />
                    <ErrorMessage
                      name="surname"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step === 2 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field name="age" className="input" placeholder="Age" />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field name="job" className="input" placeholder="Job" />
                    <ErrorMessage
                      name="job"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step === 3 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field
                      name="about"
                      component="textarea"
                      className="textarea"
                      placeholder="About"
                    />
                    <ErrorMessage
                      name="about"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step === 4 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field
                      name="blog"
                      className="input"
                      placeholder="Blog URL"
                    />
                    <ErrorMessage
                      name="blog"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {(values.step > 1 && (
                  <button onClick={prevHandle} type="button" className="button">
                    Prev
                  </button>
                )) || <div />}
                {values.step !== values.lastStep && (
                  <button
                    onClick={nextHandle}
                    type="button"
                    className="button"
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </button>
                )}
                {values.step === values.lastStep && (
                  <button className="button" type="submit">
                    Submit
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
