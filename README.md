# news-JS

Run application:  
- Copy and rename `.env.example` to `.env` and set variables with your data  
- Install dependencies by running command `npm install` in your terminal
- Run command in your terminal `npm start`  


1. установка TypeScript для среды выполнения node: npm install typescript @types/node --save-dev
2. содание файла концигурации: npx tsc --init (tsconfig.json)

3. устанавливаем зависимости: 
    npm install @typescript-eslint/parser --save-dev   - синтаксический анализатор, который использует TypeScript ESTree для передачи исходного кода TypeScript от клиента к клиенту.
    npm install @typescript-eslint/eslint-plugin        - расширения для поддержки eslint в typescript
    npm install ts-loader  --save-dev                   - нужен для  Webpack чтобы запускать проект на typescript

4. Настройка .eslintrc.json
   меняем конфигурацию

5. Перенастройка сборщика Webpack

6. Переименовываем все файлы в src c js в ts: index.js, appView.js, sources.js, news.js, папка controller, app.js

7. Необходимо все файлы ts перенастроить под ts (типы данных)

8. Создание необходимых интерфейсов для обмена данными с News API .
    1) в папке src создаем папку types
    2) файл interfaces.ts - описавваем все интерфейсы
    Интерфесы мпомогают защитить приложение, проверяют типы данных, которые приходят с сервера

9. Файл enums.ts
