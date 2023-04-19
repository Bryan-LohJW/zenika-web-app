import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link className="p-2 hover:underline" href={"/collections/men"}>
            Men
          </Link>
          <Link className="p-2 hover:underline" href={"/collections/women"}>
            Women
          </Link>
          <Link className="p-2 hover:underline" href={"/collections/unisex"}>
            Unisex
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
