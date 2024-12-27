// app/components/ClientWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login' || pathname === '/';

  return (
    <div className="flex">
      {!isLoginPage && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ClientWrapper;
