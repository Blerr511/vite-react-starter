# :fire::rocket::zap: Vite + React + Redux(@reduxjs/toolkit) + Typescript

A starter for React with Typescript with the fast Vite and all static code testing with Eslint and formatting with Prettier.

## Installation

Clone the repo and run `yarn install`

## Start

After the successfull installation of the packages: `yarn start`

## Included technologies

You can find any info about used technologies on it's official site.

- [Vite ⚡](https://github.com/vitejs/vite) -Next Generation Frontend Tooling

- [React](https://ru.reactjs.org/) - A JavaScript library for building user interfaces

- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development

- [Typescript](https://www.typescriptlang.org/) - Javascript with types

## File structure

- Components should be in file with same name in folder with same name , and should contain **index.ts** file that exports content of component file , and import component direct from folder.

```md
components
|
└─── BeautifulButton
    | BeautifulButton.tsx
    | index.ts
```

index.ts

```js
export { default } from './BeautifulButton';
```

- Add file type at the of filename . ex.

  - auth.**service**.ts
  - auth.**reducer**.ts
  - auth.**utils**.ts

- For each part of your application create folder in **modules** directory and keep all related utils inside your module folder , if your util can be reused in other modules you can add your util in **shared** folder. ex.

```md
    modules
    |
    └─── login-page
        | LoginPage.view.tsx
        | LoginPage.styles.tsx
        | LoginPage.services.ts
        | LoginPage.actions.ts
        | LoginPage.reducer.ts
        | index.ts
        └─── helpers
             | ...
```

- Add your configs in _config/Config.ts_ file
- Sensative configs need to be added into **.env** file and mapped to _config/Config.ts_ file (to access env use `import.meta.env`) , also add env variables into **env.d.ts** `interface ImportMetaEnv`.

\*note: **Do not nest your files to much**

:x: WRONG

```md
modules
|
└─── users-list
    | UsersList.tsx
    | index.ts
    └─── components
        |
        └─── UsersTable
            | UsersTable.tsx
            | index.ts
            └─── components
                |
                └─── UsersTableBody
                    | UsersTableBody.tsx
                    | index.ts
                    └─── components
                        | Row.tsx
                        | RowHeader.tsx
```

:white_check_mark: Right

```md
modules
|
└─── users-list
    | UsersList.tsx
    | index.ts
    └─── components
        |
        | UsersTable
        | UsersTableBody
        | RowHeader
```

- Keep assets in **assets** folder, export all assets from *index.ts* file.

## Coding style

**:loudspeaker: !! Important !!**

Configure your IDE you work with eslint and prettier.

- Use **camelCase** in most cases.
- Use **kebab-case** for module folders names.
- Always format document before commit and check for eslint warnings.
- For styling you can use anything u want for project , but if you use **CSS in JS**` **JSS** , keep stylings in separate file.
- Use React functional components and hooks.
- Eslint fully configured , so just follow eslint notations to keep good coding style :slightly_smiling_face:.
