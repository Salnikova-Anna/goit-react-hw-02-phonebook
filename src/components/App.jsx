import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = evt => {
    const name = evt.target.name;
    this.setState({ [name]: evt.target.value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <PhonebookForm
            handleFormSubmit={this.handleFormSubmit}
            name={this.state.name}
            number={this.state.number}
            handleChange={this.handleChange}
          />
        </Section>
        {this.state.contacts.length >= 1 && (
          <Section title="Contacts">
            <Contacts contacts={this.state.contacts} />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
