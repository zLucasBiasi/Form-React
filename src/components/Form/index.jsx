import { useState } from "react";
import { Button } from "../Button";

import { Input } from "../Input";
import { Radio } from "../Radio";
import { Select } from "../Select";

import * as S from "./style";

export const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [game, setGame] = useState("");
  const [error, setError] = useState(null);
  const [cor, setCor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados enviados!");
  };

  const empty = ({ target }) =>
    target.value === ""
      ? setError("Digite pelo menos um nome")
      : setError(null);

  return (
    <S.Width>
      <S.Form onSubmit={handleSubmit}>
        <S.Fieldset>
          <legend>FORMULÁRIO</legend>

          <Input
            type="text"
            id="nome"
            label="NOME"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            onBlur={empty}
            required
          />
          {error && <S.Error>{error}</S.Error>}

          <Input
            type="email"
            id="email"
            label="EMAIL"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />

          <Input
            type="number"
            id="number"
            label="IDADE"
            value={number}
            onChange={({ target }) => setNumber(target.value)}
            required
          />
          <Select
            label="SELECIONE UM JOGO "
            options={[
              "League of Legends",
              "God of War",
              "Tibia",
              "Call of Duty",
            ]}
            value={game}
            setValue={setGame}
          />

          <Radio
            label="Escolha sua cor preferida"
            options={["azul", "verde", "amarelo"]}
            value={cor}
            setValue={setCor}
          />

          <S.Wrapper>
            <Button status="error" type="submit">
              ENVIAR
            </Button>
          </S.Wrapper>
        </S.Fieldset>
      </S.Form>
    </S.Width>
  );
};
