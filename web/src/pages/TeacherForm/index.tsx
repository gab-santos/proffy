import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import warningIcon from "../../assets/images/icons/warning.svg";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import "./styles.css";
import api from "../../services/api";

type FieldChangeTypes =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

type ScheduleChangeTypes = HTMLSelectElement | HTMLInputElement;

const TeacherForm: React.FC = () => {
  const subjectOptions = [
    { value: "Artes", label: "Artes" },
    { value: "Biologia", label: "Biologia" },
    { value: "Ciências", label: "Ciências" },
    { value: "Educação Física", label: "Educação Física" },
    { value: "Física", label: "Física" },
    { value: "Geografia", label: "Geografia" },
    { value: "História", label: "História" },
    { value: "Matemática", label: "Matemática" },
    { value: "Português", label: "Português" },
    { value: "Química", label: "Química" },
    { value: "Inglês", label: "Inglês" },
  ];

  const weekDayOptions = [
    { value: "0", label: "Domingo" },
    { value: "1", label: "Segunda-feira" },
    { value: "2", label: "Terça-feira" },
    { value: "3", label: "Quarta-feira" },
    { value: "4", label: "Quinta-feira" },
    { value: "5", label: "Sexta-feira" },
    { value: "6", label: "Sábado" },
  ];

  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    whatsapp: "",
    bio: "",
    subject: "",
    cost: "",
  });

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: "", from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: "", from: "", to: "" }]);
  }

  function handleFieldChange(event: ChangeEvent<FieldChangeTypes>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleScheduleChange(
    event: ChangeEvent<ScheduleChangeTypes>,
    position: number
  ) {
    const { name: field, value } = event.target;
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) return { ...scheduleItem, [field]: value };
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, avatar, whatsapp, bio, subject, cost } = formData;

    try {
      const response = await api.post("/classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      });

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        history.push("/");
      }
    } catch (err) {
      console.error(err);
      alert("Erro no cadastro!");
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário."
      />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={formData.name}
              onChange={handleFieldChange}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={formData.avatar}
              onChange={handleFieldChange}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={formData.whatsapp}
              onChange={handleFieldChange}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={formData.bio}
              onChange={handleFieldChange}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Máteria"
              options={subjectOptions}
              value={formData.subject}
              onChange={handleFieldChange}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={formData.cost}
              onChange={handleFieldChange}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={weekDayOptions}
                  value={scheduleItem.week_day}
                  onChange={(event) => handleScheduleChange(event, index)}
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(event) => handleScheduleChange(event, index)}
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(event) => handleScheduleChange(event, index)}
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso" />
              Importante!
              <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
