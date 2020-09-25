# SpoteNuFront

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS; e como gerenciador de pacotes do NodeJS o npm.
Sobre as divisões dos arquivos, foi criada quatro pastas, elas são: 

1. components - responsáveis por components que vão em mais de uma page, e é colocada a parte para uso geral delas;
2. customHooks - responsável por otimizar tarefas evitando a repetição da mesma linha de comando;
3. pages - responsável por dividir as paginas do site e seus componentes com suas estilizações em arquivos separados;
4. images - todas as imagens da aplicação se encontram nessa pasta;

## Sobre
Este projeto é um dos ultimos projetos que criei no curso de desenvolvimento web fullstack oferecido pela labenu!
A idéia era criar um projeto web fullstack usando como base o spotify.

## Guia
No desenvolvimento do Frontend, foi criado algumas paginas para cadastro de usuários, os usuários foram dividos em três tipos, eles são: administradores, ouvintes e bandas(interessados em divulgar seu trabalho como artistas, solo ou não, criam uma conta do tipo banda).
Como criar uma aplicação completa demoraria muito mais que duas semanas, a aplicação foi focada no desenvolvimento de algumas funcionalidades que o administrador poderia ter(qualquer usuário tem acesso a aplicação, porém o unico usuário no momento que possuí algo para fazer na aplicação é o administrador). Algumas das apliacações do usuário administrador são:

1. Criar novas contas do tipo administrador;
2. Ter um local onde ele possa ter acesso a todos os usuários do tipo banda e possa aprovar esses usuários a divulgar seu trabalho no nosso sistema;
3. Existe mais uma funcionalidade que é gerenciamento de generos musicais, mas não foi implementada;

Conta para se fazer login como administrador: 

```
nickname: admin nickname
email: admin@gmail.com
senha: 0123456789
```

Conta para se fazer login como ouvinte(como o ouvinte e a banda não possui aplicação a pagina mostrada para esta conta seria a mesma que logar com uma conta do tipo banda):

```
nickname: eduardinho
email: eduardo@gmail.com
senha: 0123456789
```

A aplicação do backend foi feita a parte e você pode encontra-la [aqui](https://github.com/NilsonKuroki/SpoteNuFront), para que consiga ver todas as paginas do frontend, é necessário que esteja rodando a do backend ao mesmo tempo!