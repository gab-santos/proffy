import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
  const url =
    "https://media1.popsugar-assets.com/files/thumbor/BpzkP-JXS-ewX_9IaesNC5CUWTc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/24/833/n/1922398/3bb6df53599f224fe59635.58951946_edit_img_image_43931680_1503600332/i/Jared-Padalecki-Shirtless-Pictures.jpg";
  return (
    <article className="teacher-item">
      <header>
        <img src={url} alt="Sam Winchester" />
        <div>
          <strong>Sam Winchester</strong>
          <span>Caça</span>
        </div>
      </header>

      <p>
        Salvar pessoas, caçar coisas o negócio da família.
        <br />
        <br />
        Sou o receptáculo oficial de Lucifer, já perdi minha alma e recentemente
        me tornei um dos inimigos pessoais de Deus, que eu chamo de Chuck (já
        somos íntimos a esse ponto).
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
