import React from "react";
import "./App.css";
import shortid from "shortid";

// import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
// import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import listJ from "./list.json";
import s from "./components/Filter/Filte.module.css";
import Form from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
class App extends React.Component {
  state = {
    contacts: listJ,
    filter: "",
  };
  listId = nanoid();

  addList = (number) => {
    console.log(number);
    const list = {
      id: this.nameId,
      number: number.number,
      name: number.name,
    };
    this.setState((prevState) => ({
      contacts: [list, ...prevState.contacts],
    }));
  };
  onDeleteList = (deleteId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== deleteId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  nameId = shortid.generate();
  componentDidMount() {
    const contacts = localStorage.getItem("contacts"); //получили строку
    const parseContacts = JSON.parse(contacts); //получили массив
    if (parseContacts) {
      //выполняем проверку
      this.setState({ contacts: parseContacts }); //перезаписали contacts , добавили parseContacts
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("app componentDidUpdate");
    // console.log(prevState); //предыдущие состояние
    // console.log(this.state); //текущее состояние
    if (this.state.contacts !== prevState.contacts) {
      // console.log("okk");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const totalContacts = contacts.length;
    const visibleFilter = this.state.filter.toLowerCase();
    const visibleList = this.state.contacts.filter((lis) =>
      lis.name.toLowerCase().includes(visibleFilter)
    );

    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form onSubmit={this.addList} />
        <h2>Contacts</h2>
        <span className={s.filterSubTitle}>
          FInd contacts by name: {totalContacts}
        </span>
        <Filter value={filter} changeFilter={this.changeFilter} />

        <ContactList contacts={visibleList} onDeleteList={this.onDeleteList} />
      </div>
    );
  }
}

export default App;
