import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://i.pravatar.cc/300" alt="random"/>
        <div>
          <strong>Name</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis. 
        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
        <br /><br />
        Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, 
        vitae iaculis nisl. Mé faiz elementum girarzis, nisi eros vermeio. 
        Quem num gosta di mé, boa gentis num é.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;