import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                RevUp
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/faq"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-blue-600"
            >
              FAQ
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
