import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cambio: 'BRL',
    };
  }

  render() {
    const { email, totalExpenses } = this.props;
    const { cambio } = this.state;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {email}
        </p>
        <p data-testid="total-field">
          Despesa Total:
          { totalExpenses }
        </p>
        <p data-testid="header-currency-field">
          { cambio }
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { totalExpenses } }) => ({
  email,
  totalExpenses,
});

export default connect(mapStateToProps)(Header);
