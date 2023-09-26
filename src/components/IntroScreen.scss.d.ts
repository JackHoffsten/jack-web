declare namespace IntroScreenScssNamespace {
  export interface IIntroScreenScss {
    hide: string;
    introScreen: string;
  }
}

declare const IntroScreenScssModule: IntroScreenScssNamespace.IIntroScreenScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IntroScreenScssNamespace.IIntroScreenScss;
};

export = IntroScreenScssModule;
