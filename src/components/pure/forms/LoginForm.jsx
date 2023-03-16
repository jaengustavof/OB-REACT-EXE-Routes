import React from 'react';
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="email" {...register("example")} />
            
            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder='password' {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" className='form-button'/>
        </form>
    );
}

export default LoginForm;
