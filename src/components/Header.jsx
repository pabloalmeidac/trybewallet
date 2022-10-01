import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../pages/styles/wallet.css';
import logo from '../images/logo.png';

class Header extends React.Component {
  // Função que atualiza a despesa total
  // Agradeço ao Murilo Rainho, brabo d+
  // https://github.com/tryber/sd-013-a-project-trybewallet/pull/5/files?authenticity_token=MYPU1Zbtogf0uerGxmDYiqliANYM%2B3zpZBE4H64wzEKJQFgp%2BJ9BshS6Oxb%2FpB8fFFiZKa9k5q85qb0M3m3MPg%3D%3D&file-filters%5B%5D=.css&file-filters%5B%5D=.gif&file-filters%5B%5D=.js&file-filters%5B%5D=.png
  totalExpense() {
    const { expenses } = this.props;
    if (!expenses.length) return 0;
    const totalValue = expenses.map(
      ({ value, currency, exchangeRates }) => value * exchangeRates[currency].ask,
    ).reduce((acc, curr) => acc + curr);
    return totalValue.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="img-header">
          <img src={ logo } width="70%" alt="logo-trybe" />
        </div>
        <div className="infos-header">
          <p data-testid="email-field">
            Email:
            &nbsp;
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total: R$
            &nbsp;
            { this.totalExpense() }
            &nbsp;
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf().isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps)(Header);
