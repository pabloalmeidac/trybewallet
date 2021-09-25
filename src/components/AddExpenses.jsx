import React from 'react';

class AddExpenses extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            <option value="USD" selected> USD</option>
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento:
          <select id="metodo-pagamento">
            <option selected value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="Alimentação" selected> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saude"> Saude </option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
      </form>
    );
  }
}

export default AddExpenses;
