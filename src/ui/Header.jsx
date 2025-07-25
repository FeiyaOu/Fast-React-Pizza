import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <>
      <header className="flex items-center justify-between border-b-8 border-stone-400 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>
        <SearchOrder />
        <Username />
      </header>
    </>
  );
}

export default Header;
