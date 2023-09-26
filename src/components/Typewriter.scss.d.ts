declare namespace TypewriterScssNamespace {
  export interface ITypewriterScss {
    'blink-animation': string;
    terminalCursor: string;
    typewriter: string;
  }
}

declare const TypewriterScssModule: TypewriterScssNamespace.ITypewriterScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TypewriterScssNamespace.ITypewriterScss;
};

export = TypewriterScssModule;
