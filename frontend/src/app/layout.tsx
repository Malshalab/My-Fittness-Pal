import ThemeProviderWrapper from './theme-provider';

export const metadata = {
  title: 'My Fitness Pal',
  description: 'Your fitness companion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}