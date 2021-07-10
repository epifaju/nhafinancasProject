import React, { Component } from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { withRouter } from "react-router-dom";

export class cadastroUsuario extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state);
  };

  cancelar = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Card title="Cadastro do Usuario">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Nome :*" htmlFor="inputNome">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  name="nome"
                  value={this.state.nome}
                  onChange={(e) => {
                    this.setState({ nome: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup label="Email :*" htmlF="inputEmail">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup label="Senha :*" htmlFor="inputSenha">
                <input
                  type="password"
                  className="form-control"
                  id="inputSenha"
                  name="senha"
                  value={this.state.senha}
                  onChange={(e) => {
                    this.setState({ senha: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup label="Repita a Senha :*" htmlFor="inputRepitaSenha">
                <input
                  type="password"
                  className="form-control"
                  id="inputRepitaSenha"
                  name="repitaSenha"
                  value={this.state.senhaRepeticao}
                  onChange={(e) => {
                    this.setState({ senhaRepeticao: e.target.value });
                  }}
                />
              </FormGroup>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.cadastrar}
              >
                Salvar
              </button>
              <button
                onClick={this.cancelar}
                type="button"
                className="btn btn-danger"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(cadastroUsuario);
