import { useState } from 'react'
import './forms.css'

const MyForms = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleChange = (event) => {
        const eventName = event.target.value
        const eventEmail = event.target.value
        
       setName(event.target.value)
       setEmail(eventEmail)

       console.log(name)
       console.log(email)
    }

    return (
        <>
            <div className="container">
                <form className='form'>
                    <div className='div-name'>
                        <label>
                            <span className='sg'>Name</span>
                            <input
                                type="text"
                                placeholder="Digite seu name" 
                                required 
                                onChange={handleChange}
                                />
                        </label>
                    </div>
                    <div className='div-email'>
                        <label>
                            <span className='sg'>E-mail</span>
                            <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className='div-btn-enviar'>
                        <button className='btn-enviar'>Envair</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MyForms