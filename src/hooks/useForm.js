import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [formValues, setFormValues] = useState(initialState)

    const reset = (state = initialState) => {
        setFormValues(state);
    }


    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        });
    };

    return [formValues, handleInputChange, reset];
}
