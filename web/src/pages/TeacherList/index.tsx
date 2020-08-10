import React, { useState, ChangeEvent, FormEvent } from "react";

import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import "./styles.css";
import api from "../../services/api";

type FieldChangeTypes = HTMLSelectElement | HTMLInputElement;

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

  const [filters, setFilters] = useState({
    subject: "",
    week_day: "",
    time: "",
  });

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  function handleFieldChange(event: ChangeEvent<FieldChangeTypes>) {
    const { name, value } = event.target;

    setFilters({ ...filters, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.get("/classes", {
        params: {
          ...filters,
        },
      });
      if (response.status === 200) setTeachers(response.data);
    } catch (err) {
      console.log(err);
      setTeachers([]);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form onSubmit={handleSubmit} id="search-teachers">
          <Select
            name="subject"
            label="Máteria"
            options={subjectOptions}
            value={filters.subject}
            onChange={handleFieldChange}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={weekDayOptions}
            value={filters.week_day}
            onChange={handleFieldChange}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={filters.time}
            onChange={handleFieldChange}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
