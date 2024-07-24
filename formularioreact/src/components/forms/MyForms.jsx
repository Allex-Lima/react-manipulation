import { useState } from 'react'
import './forms.css'

const MyForms = ({ user }) => {

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const handleChange = (event) => {
       setName(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email);
    }
    
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className='form'>
                    <div className='div-name'>
                        <label>
                            <span className='sg'>Name</span>
                            <input
                                type="text"
                                placeholder="Digite seu name" 
                                autoFocus
                                onChange={handleChange}
                                value={name}
                                />
                        </label>
                    </div>
                    <div className='div-email'>
                        <label>
                            <span className='sg'>E-mail</span>
                            <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
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