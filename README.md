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

### Project structure overview
- components : アプリケーション全体で使用されるすべての共有コンポーネント
- config     : アプリケーション構成ファイル
- features   : すべての機能ベースのモジュール
- layouts    : ページのさまざまなレイアウト
- lib        : アプリケーションで使用されるさまざまなライブラリの構成
- pages      : アプリケーションのページ
- providers  : すべてのアプリケーションプロバイダー
- stores     : アプリケーションで使用されるすべてのグローバル状態ストア
- testing    : テスト関連のモック、ヘルパー、ユーティリティ、および構成
- types      : アプリケーション全体で使用される基本の TypeScript 型定義
- utils      : すべての共有ユーティリティ関数

#### features example
```sh
.
└── features
    ├── api        : 特定の機能に関連する API リクエスト宣言と API フック
    ├── components : 特定の機能に限定されたすべてのコンポーネント
    ├── types      : 特定の機能の TypeScript タイプ定義
    └── index.ts   : アプリケーションの他の部分に対してパブリックにする必要があるもののみをエクスポート
```

### UI Components
```sh
$ yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion @chakra-ui/icons
$ yarn add react-hook-form
```

### Move libs
```sh
$ yarn remove eslint eslint-config-next typescript @types/node @types/react @types/react-dom
$ yarn add -D eslint eslint-config-next typescript @types/node @types/react @types/react-dom
```

### Storybook
```sh
$ npx storybook init
$ yarn add -D @chakra-ui/storybook-addon
```

### MSW
```sh
$ yarn add -D msw @mswjs/data msw-devtools
$ npx msw init public/ --save
```

### API-Client
```sh
$ yarn add axios @tanstack/react-query @tanstack/react-query-devtools react-error-boundary
```

### Store
```sh
$ yarn add zustand
```