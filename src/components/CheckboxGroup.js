import React from "react";
import { Field, ErrorMessage } from "formik";

function CheckboxGroup(props) {
    const {label, name, options, ...rest} = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input type='checkbox' id={option.value}
                                    {...field} value={option.value}
                                    checked={field.value.includes(option.value)}/>
                                    <label htmlFor={option.value} style={{'display':'inline-block'}}>
                                        {option.key}
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name}/>
        </div>
    )
}

export default CheckboxGroup