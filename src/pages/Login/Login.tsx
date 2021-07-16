import React from 'react'
import { Link } from 'react-router-dom'

import "./Login.scss"

import maleUser from "../../assets/undraw_male_avatar.svg"

function Login() {
    return (
        <div className="login">
            <header>
                <p>Windows live message</p>

                <div className="windowCommands">
                    <button>_</button>
                    <button>□</button>
                    <button>x</button>
                </div>
            </header>


            <main>
                <h1>Login</h1>
                <form>
                    <img src={maleUser} alt="user" height="80px" width="80px"/>
                    <fieldset>
                        <input type="text" placeholder="Email"/>
                        <br/>
                        <input type="text" placeholder="Password"/>
                        <p>Status: Online</p>

                        <p>Esqueceu a senha?</p>
                        <p>Lembrar senha</p>
                        <p>Entrar automaticamente</p>
                    </fieldset>

                    <Link to="/Home">Entrar</Link>
                    <button>Cancelar</button>
                </form>
            </main>


        </div>
    )
}

export default Login