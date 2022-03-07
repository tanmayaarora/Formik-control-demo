import React from "react";
import {Field, ErrorMessage} from "formik";

function Textarea(props) {
    const {label, name, ...rest} = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} style={{'padding':'1px 5px'}}/>
            <ErrorMessage name={name}/>
        </div>
    )
}

export default Textarea