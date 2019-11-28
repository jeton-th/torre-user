import React from 'react';
import PropType from 'prop-types';

const Header = ({
  searchText, searchHandler, searchList, userSelect,
}) => (
  <header className="main-header">
    <input
      type="search"
      onChange={searchHandler}
      value={searchText}
      placeholder="Search a user ..."
    />

    <div className="search-list">
      {searchList.map((user) => <a key={user.name} onClick={() => userSelect(user)}>{user.name}</a>)}
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
