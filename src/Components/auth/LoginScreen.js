import React from 'react'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({email:'', password:''});
    const {email, password} = formValues;

    return (
        <div className=" login__container">
            <h3 className='login__titulo'>Login</h3>
            <form>

                <input 
                    type='text'
                    placeholder='email'
                    name='email'  
                    autoComplete='off'
                    className="login__input focus input"  
                    value={ email }
                    onChange={ handleInputChange }
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
