import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import chainReactionImageUrl from '../../assets/chain-reaction.png';

const Header: FunctionComponent = () => {
  return (
    <header className="sticky top-0 w-full bg-gray-400" id="header">
      <div className="w-full">
        <div className="relative container mx-auto mt-0 px-5 py-4">
          <nav className="md:flex md:flex-row md:justify-between">
            <div className="flex flex-row justify-between align-middle">
              <Link
                className="flex flex-row justify-between align-middle"
                to="/"
              >
                <img
                  className="w-6 z-10 mr-2"
                  src={chainReactionImageUrl}
                  alt="MenuIcon"
                />
                <span className="tracking-wider font-semibold text-lg">
                  Chain Reaction
                </span>
              </Link>
            </div>

            <ul className="hidden md:flex md:flex-row">
              <li className="pr-5 tracking-wide">
                <Link to="/">
                  <span>About</span>
                </Link>
              </li>
              <li className="pr-5 tracking-wide">
                <Link to="/generate">
                  <span>Generate</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
