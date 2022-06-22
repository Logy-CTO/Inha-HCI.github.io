declare const __PATH_PREFIX__: string
declare module "*.module.css" {
  const styles: { [className: string]: string }
  export = styles
}
declare module "*.png"
