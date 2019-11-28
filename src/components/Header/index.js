import React from 'react';
import PropType from 'prop-types';
import './Header.scss';

const Header = ({
  searchText, searchHandler, searchList, userSelect,
}) => (
  <header className="main-header">
    <div className="container">
      <input
        type="search"
        className="search"
        onChange={searchHandler}
        value={searchText}
        placeholder="Search a Torre user ..."
      />

      <div className="search-list">
        {
        searchList.map(
          (user) => (
            <button
              type="button"
              key={user.publicId}
              onClick={() => userSelect(user)}
            >
              {user.name}
            </button>
          ),
        )
        }
      </div>
    </div>
  </header>
);

Header.propTypes = {
  searchText: PropType.string.isRequired,
  searchHandler: PropType.func.isRequired,
  searchList: PropType.array.isRequired,
  userSelect: PropType.func.isRequired,
};

export default Header;
