import React from 'react';

const UserForm = ({ userData, onChange, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...userData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Para receber seus resultados completos</h2>
      
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email || ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">WhatsApp</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={userData.phone || ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit" className="submit-button">
        Ver Meus Resultados
      </button>
      
      <p className="privacy-notice">
        Seus dados estão seguros e não serão compartilhados com terceiros.
      </p>
    </form>
  );
};

export default UserForm;