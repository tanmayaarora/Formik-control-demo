import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
    const initialValues = {email:''};
    const validationSchema = Yup.object({
        email:Yup.string().required("Email is required")
    });
    const onSubmit = values => console.log("Form data ", values);
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form style={{'margin': '4rem auto'}}>
                        <FormikControl control='input' type='email' label='email' name='email'/>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer