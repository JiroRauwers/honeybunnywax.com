import { base, dark, light } from 'styles/theme';

type Dark = typeof dark;
type Light = typeof light;
type BaseTheme = typeof base;

type Colors = {
  [MajorKey in keyof Dark | keyof Light]: {
    [MinorKey in keyof Dark[MajorKey] | keyof Light[MajorKey]]:
      | Light[MajorKey][MinorKey]
      | Dark[MajorKey][MinorKey];
  };
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Colors, BaseTheme {}
}
