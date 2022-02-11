import React from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
class Form extends React.Component {
  state = { name: "boss", number: "111111" };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };
  //cleared the form
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  inputId = nanoid();
  inputIdNum = nanoid();

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId} className={s.label}>
          <span className={s.span}>Name</span>
        </label>
        <input
          id={this.inputId}
          className={s.input}
          type="text"
          onChange={this.handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />

        <label htmlFor={this.inputIdNum} className={s.label}>
          <span className={s.span}>Number</span>{" "}
        </label>
        <input
          id={this.inputIdNum}
          className={s.input}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />

        <button type="submit" className={s.form__btn}>
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
