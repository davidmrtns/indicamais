import React, { Component, useEffect, useState } from "react";
import Recursos from "../classes/Recursos";
import style from "./Login.module.scss";
import Fetch from "../classes/Fetch";
import InputMask from "react-input-mask";
import { faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTenant } from '../TenantContext';

function Login() {
    const recursos = new Recursos();
    const fetch = new Fetch();
    const tenant = useTenant();
    const EnviandoIcone = recursos.getEnviando();

    const [mensagem, setMensagem] = useState(null);
    const [enviado, setEnviado] = useState(null);
    const [cpf, setCpf] = useState('');
    const [exibirSenha, setExibirSenha] = useState(false);
    const [logo, setLogo] = useState(null);

    function enviar(e) {
        if (e.keyCode === 13) {
            enviarSolicitacao();
        }
    }

    async function enviarSolicitacao() {
        setEnviado(true);

        var cpfFormatado = cpf.replace(/[.\-_]/g, '');
        var senha = document.getElementById("senha").value;

        if (cpfFormatado.length === 11 && senha) {
            var resultado = await fetch.conectar(cpfFormatado, senha);

            if (resultado.status === 200) {
                window.location.href = "/";
            } else if (resultado.status === 401) {
                setMensagem('O usuário ou senha inseridos não existem');
                setEnviado(false);
            }
        } else {
            setMensagem('Digite um CPF e senha válidos!');
            setEnviado(false);
        }
    }

    useEffect(() => {
        const logoBase64 = `data:${tenant.logoMimeType};base64,${tenant.logo}`;
        setLogo(logoBase64);
    }, [tenant]);

    return (
        <div className={style.login}>
            <div className={style.logincard}>
                <img src={logo} alt="Logo da Empresa" className={style.logo} />
                <div className={style.formulario}>
                    <h1>Login</h1>
                    <form autoComplete="on">
                        <div className={style.campo}>
                            <InputMask name="cpf" mask="999.999.999-99" placeholder="CPF" id="cpf" type="text" onChange={(e) => setCpf(e.target.value)} />
                        </div>
                        <div className={style.campo}>
                            <input name="senha" placeholder="Senha" id="senha" type={exibirSenha === false ? "password" : "text"} onKeyDown={(e) => enviar(e)} />
                            <p className={style.exibirsenha}><FontAwesomeIcon icon={exibirSenha === false ? faEye : faEyeSlash} onClick={() => setExibirSenha(!exibirSenha)} /></p>
                        </div>
                        <div>
                            <a className={style.link} href="/recuperar"><FontAwesomeIcon icon={faKey} /> Esqueci minha senha</a>
                        </div>
                        {mensagem ? <p className={style.mensagem}>{mensagem}</p> : ""}
                        <div className={style.botao}>
                            <button className={enviado ? style.enviado : ""} id="btentrar" type="button" disabled={enviado} onClick={() => enviarSolicitacao()}>
                                {enviado ? <EnviandoIcone className={style.enviando} />
                                    : "Entrar"}
                            </button>
                        </div>
                    </form>
                </div>
                <a className={style.link} href="/cadastro">Acessando pela primeira vez? Clique aqui</a>
            </div>
        </div>
    );
}

export default Login;