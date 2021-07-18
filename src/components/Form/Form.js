import React from "react";
import shortid from "shortid";

class Form extends React.Component {
  state = {
    name: "",
    id: "",
    number: "",
  };

  handleChange = (evt) => {
    const name = evt.currentTarget.name;
    const value = evt.currentTarget.value;
    const id = shortid.generate();
    // this.setState({ [name]: [value], id: id });
    this.setState((prev) => {
      return { ...prev, [name]: value, id: id };
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.propOnSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({ name: "", id: "", number: "" });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              // value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Nuber
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default Form;
