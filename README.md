<span id="topo"></span>

# Cardápiou

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

<img src="../assets/capa.png" alt="exemplo imagem">

## 🚩 Informações do projeto

![Status do projeto](https://img.shields.io/badge/status-fazendo-green)

<!-- ![Status do projeto](https://img.shields.io/badge/status-pausado-yellow) -->
<!-- ![Status do projeto](https://img.shields.io/badge/status-finalizado-red) -->

**Cardápiou** é um sistema de cardápio online desenvolvido com **Next.js,
PostgreSQL e Docker**, ideal para restaurantes que desejam digitalizar seus
pedidos. O sistema permite o gerenciamento de pratos, categorias, mesas e
comandas, além de oferecer integração com pagamentos e geração de QR Codes para
acesso rápido. Com uma arquitetura multi-tenant, o **Cardápiou** é escalável,
seguro e fácil de usar, proporcionando uma experiência intuitiva tanto para
restaurantes quanto para clientes. 🚀

- ### Links úteis

  - [Link para a build](#)
  - [Link para o Drive](#)

- ### Ajustes e melhorias

  O projeto ainda está em desenvolvimento e as próximas atualizações serão
  voltadas nas seguintes tarefas:

  - [ ] Tela de menu

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do **Node.js@22.14.0** e **Docker**
- Você tem uma máquina **Windows / Linux / Mac**.

## 🚀 Instalando Cardápiou

Para instalar o **Cardápiou**, siga estas etapas:

### Clone o repositório

```bash
$ git clone https://github.com/HildodeJesus/service.git
$ cd cardapiou
```

### Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias. Se
preferir, utilize arquivo `.env.sample` como referência:

```env
NEXT_PUBLIC_BASE_URL=

BASE_URL=

NODE_ENV=development

NEXTAUTH_URL=
NEXTAUTH_SECRET=

ALLOWED_ORIGIN=

DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_URL=postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}

REDIS_PORT=
REDIS_HOST=

NEXT_PUBLIC_AWS_ACCESS_KEY=
NEXT_PUBLIC_AWS_SECRET_KEY=
NEXT_PUBLIC_AWS_BUCKET_NAME=
NEXT_PUBLIC_AWS_REGION=
```

### Linux, Windows e macOS:

```bash
$ NODE_ENV=<development/production> docker-compose up -d
```

## ☕ Usando Cardápiou

Para usar **Cardápiou**, acesse no navegador:

```bash
http://localhost:3000
```

### Comandos úteis:

Rodar migrações do banco de dados:

```bash
$ npx prisma migrate dev --schema=prisma/schema.prisma
```

## 🤝 Equipe

Membros da equipe de desenvolvimento do projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/HildodeJesus">
        <img src="https://github.com/HildodeJesus.png" width="100px;" alt="Foto do Hildo de jesus no GitHub"/><br>
        <b>Hildo de Jesus</b>
        <p>Desenvolvedor Fullstack</p>
      </a>
    </td>
   
  </tr>
</table>

[⬆ Voltar ao topo](#topo)<br>
