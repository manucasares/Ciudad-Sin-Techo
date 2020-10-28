import React from 'react'

export const LoginScreen = () => {
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
                    // value={ email }
                    // onChange={ handleInputChange }
                />

                <input 
                    type='password'
                    placeholder='password'
                    name='password' 
                    className="login__input focus input"  
                    // value={ password } 
                    // onChange={ handleInputChange }
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
