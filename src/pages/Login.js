import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { loginAction } from '../actions';
import './styles/login.css';
import logo from '../images/logo.png';
// https://qastack.com.br/programming/30187781/how-to-disable-a-button-when-an-input-is-empty

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      errors: {
        email: '',
        password: '',
      },
    };
    this.changeForWallet = this.changeForWallet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }
  /* https://pt.stackoverflow.com/questions/369892/como-redirecionar-para-uma-rota-usando-onclick-e-react-router
   funcao pra redirecionar pra outra pagina ao clicar no botão */

  changeForWallet() {
    this.setState({
      redirect: true,
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  validate() {
    const { dispatchUser } = this.props;
    const { email, password, errors } = this.state;
    const rulePassword = 6;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Por favor, insira o email no formato válido.';
      return errors.email;
    }
    if (password.length < rulePassword) {
      errors.password = 'Senha deve contar mais de 6 caracteres';
      return errors.password;
    }
    dispatchUser(email, password);
    this.changeForWallet();
  }

  render() {
    const { redirect, email, password } = this.state;
    const numberMin = 6;
    const enabled = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    && (password.length >= numberMin);
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div className="container">
        <div className="form">
          <div className="form-header">
            <img src={ logo } width="70%" alt="logo-trybe" />
          </div>
          <form>
            <input
              placeholder="Digite seu email"
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
              name="email"
            />
            <input
              placeholder="Digite sua senha"
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ password }
              name="password"
            />
            <button
              className={ enabled ? 'login_btn' : 'login_btn_disabled' }
              type="button"
              disabled={ !enabled }
              onClick={ () => this.validate() }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (email, password) => dispatch(loginAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
