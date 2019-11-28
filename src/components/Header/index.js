import React from 'react';
import PropType from 'prop-types';

const Header = ({ searchText, searchHandler }) => (
  <header className="main-header">
    <form>
      <input type="search" onChange={searchHandler} value={searchText} placeholder="Search a user ..." autoFocus="autofocus" />
      {/* <input type="submit" onSubmit={submitSearch} value="Search" /> */}
    </form>
  </header>
);

Header.propTypes = {
  searchText: PropType.string.isRequired,
  searchHandler: PropType.func.isRequired,
  // submitSearch: PropType.func.isRequired,
};

export default Header;
