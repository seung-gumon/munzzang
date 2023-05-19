import Link from 'next/link';

function MapNavs() {
  return (
    <nav className="w-320px relative h-full bg-amber-400 flex flex-col">
      <Link href="/map">
        Happy
      </Link>
    </nav>
  );
}

export default MapNavs;
