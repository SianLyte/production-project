// import Translati


declare module '*.scss'

declare module "*.svg" {
    const content: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"

declare const __IS_DEV__: boolean;


// declare module 'react-i18next' {
//     interface CustomTypeOptions {
//       // Здесь указываем тип наших ключей переводов
//       resources: TranslationKeys;
//     }
//   }