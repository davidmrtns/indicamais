# <img src="/IndicaMais/ClientApp/public/icons/icone_app.ico" width="30px" /> Indica+

![CSharp](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white&style=for-the-badge)
![DotNet](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=for-the-badge)

## Descrição do projeto
**Indica+** é uma plataforma web desenvolvida com o objetivo de funcionar como uma **carteira digital de indicações**. Empresas podem utilizá-la para incentivar seus próprios clientes fidelizados a indicarem novos clientes, oferecendo recompensas em troca de indicações que resultem em serviços ou contratos fechados.

Cada empresa possui sua própria instância personalizada do sistema (multi-tenant), podendo administrar suas indicações, clientes, recompensas e — no caso de empresas jurídicas — também o andamento de processos jurídicos vinculados ao cliente.

## Funcionalidades
- 🤝 Indicação de novos clientes por usuários cadastrados;
- 💰 Acúmulo de saldo a cada indicação convertida em contrato;
- 🎁 Resgate de prêmios ou abatimento de boletos usando o saldo acumulado;
- 🧩 Suporte a múltiplas empresas (multi-tenant), com customização individual;
- 👥 Gestão de clientes e carteira de indicações pelas empresas;
- ⚖️ Módulo de acompanhamento de processos jurídicos (para empresas do setor jurídico).

## Caso de uso real
A primeira empresa a adotar a plataforma foi o escritório [LMR Advogados Associados](https://lmradvogados.com.br), que utiliza o sistema com o nome **Indica LMR**.

🔗 Acesse a instância personalizada da LMR [aqui](https://lmradvogados.lmradvogados.com.br).

### Demonstração
<img src="Screenshots/demo.gif" alt="Demonstração" width=250px>

<details>
<summary>📷 Capturas de tela</summary>

#### Página inicial
<img src="Screenshots/homepage.png" alt="Página inicial" width=250px>

#### Lista de indicações aberta
<img src="Screenshots/lista-indicacoes-aberta.png" alt="Lista de indicações aberta" width=250px>

#### Modal de indicação aberto
<img src="Screenshots/modal-indicar-aberto.png" alt="Modal de indicação aberto" width=250px>

#### Modal de resgate de prêmio aberto
<img src="Screenshots/modal-resgatar-aberto.png" alt="Modal de resgate de prêmio aberto" width=250px>

#### Modal de abate de parcelas aberto
<img src="Screenshots/modal-abater-aberto.png" alt="Modal de abate de parcelas aberto" width=250px>
</details>

## Desenvolvimento
### Tecnologias utilizadas
- **Backend**: ASP.NET Core 8;
- **Frontend**: React;
- **Banco de dados**: MySQL, Entity Framework;

### Produção
A aplicação está disponível no endereço [https://indicamais.azurewebsites.net/](https://indicamais.azurewebsites.net/).

## Licença
Este projeto é de propriedade privada e não está disponível para modificação ou distribuição.

## Autor
- David Martins - [@davidmrtns](https://github.com/davidmrtns/)
