import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction } from '../actions';
import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';

class Table extends React.Component {
  constructor() {
    super();

    this.getExpensesFromState = this.getExpensesFromState.bind(this);
  }

  /* logica que peguei do Rafael Victor https://github.com/tryber/sd-013-a-project-trybewallet/pull/24/files?authenticity_token=aHHN7aQg73lwH4raYTTDt7ZDbu1wCeSvO4R8c7cMbtuRk2eP9Nrad%2B1fT%2BAIYzwWndC1NT2L7VtCP7nRE3giqg%3D%3D&file-filters%5B%5D=.js
  que me ajudou em call */

  /* Função que faz um map pra percorrer em expenses e pegar os valores de cada posição e em seguida jogar esses valores na tabela */

  getExpensesFromState() {
    const { expenses, dispatchDelete } = this.props;
    return expenses.map((expense) => {
      const { description, tag, currency, method, value, exchangeRates } = expense;
      const cambio = exchangeRates[currency].ask;
      const totalInBrl = Math.round((value * cambio) * 100) / 100;
      const token = exchangeRates[currency];
      const cambioUsed = Math.round((token.ask) * 100) / 100; // cambio usado
      return (
        <tr className="body-table" key={ expense.id } id={ expense.id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ token.name }</td>
        <td>{ cambioUsed }</td>
        <td>{ totalInBrl }</td>
        <td>Real</td>
        <td>
          <button
            className='btn-edit'
            type="button"
            data-testid="delete-btn"
            onClick={ () => dispatchDelete(expense.id) }
          >'
            <AiTwotoneEdit className='edit-icon'/>
          </button>
          <button className='btn-delete' type="button"><AiFillDelete className='delete-icon'/></button>
        </td>
        </tr>
      );
    });
  }

  render() {
    const { getExpensesFromState } = this;
    return (
      <div className="container-body">
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { getExpensesFromState() }
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses, totalExpenses } }) => ({
  expenses,
  totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (currentExpenses) => dispatch(deleteAction(currentExpenses)),
});

Table.propTypes = {
  expenses: PropTypes.objectOf().isRequired,
  dispatchDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
