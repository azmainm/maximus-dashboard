// app/layout.tsx
import './globals.css';
import ClientWrapper from './components/ClientWrapper';

export const metadata = {
  title: 'Maximus Dashboard',
  description: 'Admin dashboard for Maximus application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
