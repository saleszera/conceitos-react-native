# ⚛️ Conceitos React Native

Este é o resultado do desafio 03 do bootcamp GoStack. A aplicação tem como objetivo consumir o back-end desenvolvido no primeiro desafio. A aplicação lista todos os repositórios cadastrados e é possível dar likes nos repositórios.

![conceitos-react-native](https://media.giphy.com/media/t165yyPt3wfn9Izk4m/giphy.gif)

## 🛠️ Ferramentas utilizadas
1. **React Hooks**
- *useState*, para manipulação do estado
- *useEffect*, para o carregamento das informações quando a tela for carregada
2. **StyleSheet**, para a estilização dos componentes
3. **axios**, para requisições a API

## 💡️ Como Utilizar
1. Faça o download do back-end [aqui](https://github.com/saleszera/conceitos-node/archive/master.zip)
2. Faça o download do projeto mobile [aqui](https://github.com/saleszera/conceitos-react-native/archive/master.zip)
3. Descompacte o back-end e mobile
4. Abra o Terminal e navegue até o diretório do back-end e execute o comando `yarn dev`
5. Abra um novo terminal e navegue até o diretório mobile e execute o comando `yarn react-native run-android` caso necessário, execute após o comando anterior `yarn react-native start`
6. Agora com o aplicativo aberto em seu celular ou emulador, é possivel ver todos os projetos cadastrados e é possível dar likes

# ⚠️ Observação
- Caso não saiba como testar pelo celular ou emulador, clique [aqui](https://react-native.rocketseat.dev/android/windows) e siga todos os passos.
- Caso não seja feito o download do back-end ou o back-end não seja executado a aplicação web não irá funcionar.
- Se o aplicativo exibir apenas uma tela roxa, será necessário cadastrar novos projetos. Utilize o insomnia como explicado na página do projeto do [back-end](https://github.com/saleszera/conceitos-node) aqui no GitHub
- Em caso de teste direto no celular, em `src/services/api.js` altere a string da linha 4 para `http://localhost:3333`. Testes pelo emulador, altere a string da linha 4 para `http://10.0.2.2:3333`. testes utilizando o emulador genymotion, altere a string da linha 4 para `http://10.0.3.3:3333`.

# Obrigado por testar o aplicativo! 😁️