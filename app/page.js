import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Customer Management System</h1>
        <div className="space-y-4">
          <Link 
            href="/customer" 
            className="block p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <h2 className="text-2xl font-semibold">View All Customers</h2>
            <p className="mt-2">Manage your customer database</p>
          </Link>
        </div>
      </div>
    </div>
  );
}