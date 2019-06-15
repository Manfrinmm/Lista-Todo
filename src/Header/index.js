import React from "react";

import { connect } from "react-redux";

const Header = ({ count }) => <p> Voce têm {count} todos</p>;

const mapStateToProps = state => ({
  count: state.todos.length
});
export default connect(mapStateToProps)(Header);
