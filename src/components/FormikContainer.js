import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
    const initialValues = {
        email:'',description:'', selectOption:'', radioOption:'', checkboxOption:[], meetingDate:null
    };
    const dropdownOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value:'option1'},
        {key: 'Option 2', value:'option2'},
        {key: 'Option 3', value:'option3'}
    ];
    const radioOptions = [
        {key: 'Option 1', value:'rOption1'},
        {key: 'Option 2', value:'rOption2'},
        {key: 'Option 3', value:'rOption3'}
    ]
    const checkboxOptions = [
        {key: 'Automation', value:'cOption1'},
        {key: 'CI/CD', value:'cOption2'},
        {key: 'DevOps', value:'cOption3'},
        {key: 'QA', value:'cOption4'},
        {key: 'React', value:'cOption5'}
    ]
    const validationSchema = Yup.object({
        email:Yup.string().required("Email is required"),
        description:Yup.string().required("Description is required"),
        selectOption:Yup.string().required("Option must be selected"),
        radioOption:Yup.string().required("Option must be selected"),
        checkboxOption:Yup.array().required("Preference must be selected"),
        meetingDate:Yup.date().required().nullable()
    });
    const onSubmit = values => alert("Form data ", values); // Will change it to console.log possibly for all branches
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form style={{'margin': '4rem auto'}}>
                        <FormikControl control='input' type='email' label='Email' name='email'/>
                        <FormikControl control='textarea' label='Description' name='description'/>
                        <FormikControl control='select' label='Select primary topic' name='selectOption' options={dropdownOptions}/>
                        <FormikControl control='radio' label='Select secondary topic' name='radioOption' options={radioOptions}/>
                        <FormikControl control='checkbox' label='Select your interest(s)' name='checkboxOption' options={checkboxOptions}/>
                        <FormikControl control='date' label='Pick a date' name='meetingDate'/>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer