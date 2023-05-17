# React App Architecture
## Create Project
### Next.js
```sh
$ docker-compose run --rm app yarn create next-app react-app-architecture --ts\ && mv react-app-architecture/* . && mv react-app-architecture/.* . && rm -r react-app-architecture
```
### Lint
```sh
$ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-storybook husky lint-staged
$ npx husky install
$ npx husky add .husky/pre-commit "npx lint-staged"
```
