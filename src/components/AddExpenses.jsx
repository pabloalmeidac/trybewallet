import React from 'react';
import tokensAPI from '../services/tokensAPI';

class AddExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listCoins: [] };

    this.list = this.list.bind(this);
  }

  async componentDidMount() {
    const api = await tokensAPI();
    const coins = Object.keys(api);
    this.list(coins);
  }

  list(coins) {
    const coinsfiltered = coins.filter((coin) => coin !== 'USDT');
    this.setState({ listCoins: coinsfiltered });
  }

  render() {
    const { listCoins } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { listCoins.map((token) => (
              <option value={ token } key={ token }>
                { token }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select id="metodo-pagamento">
            <option selected value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="Alimentação" selected> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saude"> Saúde </option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <button type="button">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default AddExpenses;
