import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokensAPI from '../services/tokensAPI';
import { walletAction } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Table from '../components/Table';
import './styles/wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCoins: [],
      totalExpenses: 0,
      expenses: {
        id: -1,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {},
      },
    };

    this.list = this.list.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addDespesa = this.addDespesa.bind(this);
  }

  // Aqui eu pego os nomes das moedas
  async componentDidMount() {
    const api = await tokensAPI();
    const coins = Object.keys(api);
    this.list(coins);
  }

  // Aqui eu faço a exclusão do nome 'USDT'
  list(coins) {
    const coinsfiltered = coins.filter((coin) => coin !== 'USDT');
    this.setState({ listCoins: coinsfiltered });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((prevState) => (
      { ...prevState, expenses: { ...prevState.expenses, [name]: value } }));
  }

  async addDespesa() {
    const { dispatchAdd } = this.props;

    const api = await tokensAPI();
    delete api.USDT;

    this.setState((prevState) => (
      { ...prevState,
        expenses: {
          ...prevState.expenses, exchangeRates: api, id: prevState.expenses.id + 1 },
      }
    ));
    const { expenses: { value, currency }, expenses, totalExpenses } = this.state;

    const tokenValue = Object.values(api).filter((token) => token.code === currency);
    let total = value * tokenValue[0].ask;
    total = Math.round((total + totalExpenses) * 100) / 100;

    this.setState({ totalExpenses: total });
    dispatchAdd(expenses, total);
  }

  render() {
    const { listCoins, expenses: { value, description } } = this.state;
    const { handleChange, addDespesa } = this;
    return (
      <div>
        <Header />
        <form>
          <Input id="valor" name="value" value={ value } handleChange={ handleChange } />
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="currency" onChange={ handleChange }>
              { listCoins.map((token) => (
                <option value={ token } key={ token }>
                  { token }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo-pagamento">
            Método de pagamento
            <select id="metodo-pagamento" onChange={ handleChange } name="method">
              <option selected value="Dinheiro"> Dinheiro </option>
              <option value="Cartão de crédito"> Cartão de crédito </option>
              <option value="Cartão de débito"> Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" onChange={ handleChange } name="tag">
              <option value="Alimentação" selected> Alimentação </option>
              <option value="Lazer"> Lazer </option>
              <option value="Trabalho"> Trabalho </option>
              <option value="Transporte"> Transporte </option>
              <option value="Saude"> Saúde </option>
            </select>
          </label>
          <Input
            id="Descrição"
            name="description"
            value={ description }
            handleChange={ handleChange }
          />
          <button type="button" onClick={ addDespesa }>
            Adicionar despesa
          </button>
        </form>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAdd: (currentExpenses, total) => dispatch(walletAction(currentExpenses, total)),
});

Wallet.propTypes = {
  dispatchAdd: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
