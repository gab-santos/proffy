import React from "react";

import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import "./styles.css";
import Select from "../../components/Select";

const TeacherList: React.FC = () => {
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

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select name="subject" label="Máteria" options={subjectOptions} />
          <Select
            name="week_day"
            label="Dia da semana"
            options={weekDayOptions}
          />
          <Input type="time" name="tima" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
