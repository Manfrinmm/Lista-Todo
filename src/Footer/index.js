import React from "react";

import { connect } from "react-redux";

const Footer = ({ count }) => <p> Voce têm {count} todos</p>;

const mapStateToProps = state => ({
  count: state.todos.length
});
export default connect(mapStateToProps)(Footer);
