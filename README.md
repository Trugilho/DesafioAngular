# Spaangular

Este Projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Servidor de Desenvolvimento

Rode o comando`ng serve` para um servidor dev. Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Novo componente

Rode o comando `ng generate component component-name` para gerar um novo componente. Você também pode usar o comando `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Criando um projeto

Rode o comando `ng build` para criar um projeto. Os artefatos de construção serão armazenados no `dist/` directorio.

## Executando testes unitarios

Rode o comando `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Executando testes end-to-end

Rode o comando `ng e2e` para executar os testes end-to-end através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente os testes end-to-end.

## Help

Para ter ou ver a ajuda do Angular CLI use o comando `ng help` ou verifique no guia[Angular CLI Visão geral e referência de comandos](https://angular.io/cli).

## Desafio SPA com Angular

Abaixo a solicitação do Desafio SPA com Angular e as soluções apresentadas:

1 - Crie uma aplicação Angular (não esqueça que todo o código precisa estar no GitHub).

Foi implementado o aplicativo SPAAngular cujo código foi inserido na plataforma GitHub conforme solicitado.

2 - Crie no mínimo 3 componentes que deverão estar interagindo na mesma página(Não esqueça as rotas).

Utilizando o comando abaixo foram criados:
ng g c home(nome do componente)
1 Componente Home
2 Componente About
3 Componente Spahome
4 Componente Footer

3 - Escolha no mínimo 4 componentes do Angular Material e incorpore em sua aplicação.
1 - Componente mat-icon:
  <!--Incluido este ícone na toolbar-->
  <mat-icon> sentiment_satisfied_alt</mat-icon>

2 - Componente mat-tab-group:
  <!-- Incluido estas Abas -->
  <h2>Informações sobre o Angular</h2>
  <p>Escolha o que você quer ler sobre o Angular:</p>
  <mat-tab-group>
    <mat-tab label="Primeiro"> História do Angular </mat-tab>
    <mat-tab label="Segundo"> Desenvolvimento usando Angular </mat-tab>
    <mat-tab label=" Terceiro"> Angular 8 </mat-tab>
  </mat-tab-group>

3 - Componente mat-form-field:
  <!-- Incluido este formulário -->
  <h2>Artigos sobre Angular sob medida para você:</h2>

  <p>Informe seu nome</p>
  <mat-form-field appearance="legacy">
    <mat-label>Legacy form field</mat-label>
    <input matInput placeholder="Digite seu nome">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>

  <p>Informe seu hobby</p>
  <mat-form-field appearance="standard">
    <mat-label>Standard form field</mat-label>
    <input matInput placeholder="Digite seu Hobby">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>

4 - Componente Button:
<!-- Incluido este Botão -->
  <button mat-flat-button color="primary"> Gravar </button>

5 - Componente Copyright:
  <!--Incluido este texto de copyright-->
  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>


4 - Crie em uma das páginas uma interação através da interpolação e/ou utilizando Property Binding:

 A interpolação {{ count }} foi criada no arquivo: spahome.component.ts
 

  e utilizada no arquivo: spahome.component.html
 <h2 class="text-center">Preencha em 20 segundos: {{ count }}</h2>


5 - Crie uma explicação sobre o que foi feito, esta explicação será inserida na plataforma junto com o link para o código no GitHub.
A explicação está neste arquivo README.MD
