import React, { useState } from 'react';
import './newsletter.css';
import Alert from 'react-bootstrap/Alert';
const axios = require('axios');


function Newsletter() {
  const [email, setEmail] = useState('');
  const url = 'https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php';
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const alert = () => {
    if (success) {
      return(
        <Alert variant="success">
          <Alert.Heading>{success}</Alert.Heading>
        </Alert>
      );
    }
    if (error) {
      return(
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      );
    }
  }

  const postEmail = (email) => {
    if (email) {
      axios.post(url, { email: email })
      .then((response) => setSuccess(response.data.Mensagem))
      .catch((error) => setError(error.data.Mensagem));
    }
  }

  return(
    <div className="newsletter">
      {alert()}
      <h5>NEWSLETTER FOREVER BABY</h5>
      <p>Cadastre-se agora para não perder nenhuma informação</p>
      <div>
      <input 
        type="text"
        className="input"
        placeholder="        Digite aqui o seu melhor e-mail"
        onChange={ ( { target }) => setEmail(target.value)}
        />
        <button
        type="button"
        className="button"
        onClick={() => postEmail(email)}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
