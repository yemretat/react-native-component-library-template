import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import * as React from 'react';
import theme from './theme';

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export interface RenderOptions {
  wrapper?: React.ComponentType<any>;
  createNodeMock?: (element: React.ReactElement<any>) => any;
}
const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options }) as any;

export { customRender as render };
