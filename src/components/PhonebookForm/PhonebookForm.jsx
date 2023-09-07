export const PhonebookForm = ({
  handleFormSubmit,
  name,
  number,
  handleChange,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="form-control"
          id="exampleInputName1"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className="form-control"
            id="exampleInputNumber1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  );
};
