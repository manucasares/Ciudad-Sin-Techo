import React from 'react';
import { useDispatch } from 'react-redux';

import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'ciudadsintechofirebase@gmail.com',
        password: 'hola123'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        // VERIFICACION MOMENTANEA 
        if( !email.trim() || !password.trim() ){
            return;
        }


        dispatch(
            startLoginEmailPassword(email, password)
        );
    } 

    return (
        <div className="login__container animate__animated animate__fadeIn">

            <form onSubmit={handleLogin}>
                <input 
                    type='text'
                    placeholder='email'
                    name='email'  
                    autoComplete='off'
                    className="login__input focus input"  
                    value={ email }
                    onChange={handleInputChange}
                />

                <input 
                    type='password'
                    placeholder='password'
                    name='password' 
                    className="login__input focus input"  
                    value={ password } 
                    onChange={ handleInputChange }
                />
                
                <button 
                    type='submit'
                    // disabled={ loading }
                    className='login__btn btn'
                >
                    Login
                </button>

            </form>
        </div>
    )
}
