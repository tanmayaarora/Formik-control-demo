import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
    const initialValues = {email:'',description:''};
    const validationSchema = Yup.object({
        email:Yup.string().required("Email is required"),
        description:Yup.string().required("Description is required")
    });
    const onSubmit = values => alert("Form data ", values);
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form style={{'margin': '4rem auto'}}>
                        <FormikControl control='input' type='email' label='Email' name='email'/>
                        <FormikControl control='textarea' label='Description' name='description'/>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer