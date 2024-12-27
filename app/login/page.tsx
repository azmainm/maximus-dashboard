// app/login/page.tsx
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const error = searchParams.error;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-black border border-gray-300 p-8 rounded-md shadow-lg w-full max-w-md">
      <div className="flex justify-center mb-6">
          <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
        </div>
        <h2 className="text-center text-2xl font-medium text-white mb-4">Login</h2>
        {error && (
          <div className="text-red-500 mb-4 text-center">{error}</div>
        )}
        <form action="/api/login" method="post" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-100 mb-1">
              Username
            </label>
            <Input
              id="username"
              name="username"
              placeholder="Enter Admin Username"
              className="text-white w-full p-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-100 mb-1">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              className="text-white w-full p-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 bg-gray-200 text-gray-900 font-medium rounded-md hover:bg-cyan-600 hover:text-white transition duration-200"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
