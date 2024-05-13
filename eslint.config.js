//eslint配置文件
// module.exports = {
//   "root": true,
//   "env": {
//     "browser": true,
//     "node": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react/recommended"
//   ],
//   "overrides": [
//     {
//       "env": {
//         "node": true
//       },
//       "files": [
//         ".eslintrc.{js,cjs}"
//       ],
//       "parserOptions": {
//         "sourceType": "script"
//       }
//     },
//     {
//       "env": {
//         "node": true
//       },
//       "files": [
//         "*.{tsx,ts}"
//       ],
//       "rules": {
//         "no-undef": "error",
//         //对于console语句报错处理
//         "@typescript-eslint/no-console": "off",
//         "@typescript-eslint/no-explicit-any": "off",
//         "no-console": "off",
//       }
//     }
//   ],
//   //表示 Eslint 在解析我们的代码时使用到的解析器。Espress(默认，不支持 typescript 语法的检查)、 Esprima、@typescript-eslint/parser
//   //Parser 选项简单来说就是表示我们以何种解析器来转译我们的代码。本质上，所有的解析器最终都需要讲代码转化为 espree 格式从而交给 Eslint 来检测
//   "parser": "@typescript-eslint/parser",
//   //ParserOptions 选项表示 EsLint 对于不同的 Parser（解析器）配置的语言检查规则
//   "parserOptions": {
//     // 指定 EsLint 支持 ECMAScript 的语法检测 
//     "ecmaVersion": "latest",
//     //应用代码中支持的模块规范 script | module
//     "sourceType": "module",
//     "ecmaFeatures": {
//       // 允许 js 代码中使用 jsx
//       "jsx": true,
//       // 允许顶层 return
//       "globalReturn": true
//     }
//   },
//   //在ts中可以声明*.d.ts文件，eslint用globals
//   "globals": {
//     windows: true
//   },
//   "plugins": [
//     "@typescript-eslint",
//     "react"
//   ],
//   "rules": {
//     "indent": [
//       "warn",
//       2
//     ],
//     // "linebreak-style": [
//     //   "error",
//     //   "linux"
//     // ],
//     "quotes": [
//       "off",
//       "double",
//       {
//         "allowTemplateLiterals": true
//       }
//     ],
//     // "semi": [
//     //   "error",
//     //   "never"
//     // ],
//     //禁止声明变量不使用
//     "@typescript-eslint/no-unused-vars": "off",
//     // 禁止使用未声明的字段
//     "no-undef": "error",
//     //对于console语句报错处理
//     "@typescript-eslint/no-console": "off",
//     "no-console": "off",
//     "no-debugger":"off"
//   },
//   "ignorePatterns": [
//     "node_modules",
//     "dist",
//   ]
// }
