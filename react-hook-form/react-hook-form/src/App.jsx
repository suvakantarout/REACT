import './App.css';
import { useForm } from "react-hook-form";

function App() {
  // React-Hook-Form
  const {
    register,
    handleSubmit, 
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // Handle the Submit button
  async function onSubmit(data){
    // API call ko simulate krte hai
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }

  return (
    // Create form
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Minimum 3 characters required" },
            maxLength: { value: 10, message: "Maximum 10 characters allowed" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First name is not as per the rules"
            }
          })}
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
      </div>

      <br />

      <div>
        <label>Middle Name: </label>
        <input type="text" {...register("MiddleName", {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Middle name is not as per the rules"
          }
          })} />
          {errors.MiddleName && <p style={{ color: "red" }}>{errors.MiddleName.message}</p>}
      </div>

      <br />

      <div>
        <label>Last Name: </label>
        <input type="text" {...register("lastName", {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Last name is not as per the rules"
          }
          })} />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
      </div>

      <br />

      <input type="submit" disabled= {isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>  {/* Dissable the submit button while the form is submitting */}
      {/* <button disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/> <button/> */}

    </form>
  );
}

export default App;



// React-Hook-Form Documentation
// Visit URL => https://react-hook-form.com/get-started

/*

Installation
Installing React Hook Form only takes a single command and you're ready to roll.

npm install react-hook-form

Example
The following code excerpt demonstrates a basic usage example:

*/


/*
import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   )
// }

