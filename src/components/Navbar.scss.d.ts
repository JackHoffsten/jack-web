declare namespace NavbarScssNamespace {
  export interface INavbarScss {
    list: string;
    listItem: string;
    navbar: string;
  }
}

declare const NavbarScssModule: NavbarScssNamespace.INavbarScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavbarScssNamespace.INavbarScss;
};

export = NavbarScssModule;
