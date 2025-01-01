import Link from 'next/link';

export default function Wishlist() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-black">Wishlist</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Ready to make a wish?
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Start adding items you love to your wishlist by tapping on the heart icon
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/create-wishlist"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Create new wishlist
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
