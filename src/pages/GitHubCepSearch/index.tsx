import './styles.css';

import { useState } from 'react';
import axios from 'axios';
import ResultComponent from 'components/ResultComponent';
import { User } from 'types/user';
import MyLoader from 'pages/MyLoader';


type FormData = {
  login: string;
};

const GitHubCep = () => {
  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        setUser(undefined);
      }).finally(() => {
        setIsLoading(false);
      });
    console.log(formData);
  };

  return (
    <>
      <div className="user-search-container">
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>

              <input
                type="text"
                name="login"
                value={formData.login}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>      
      {
        isLoading ? 
        ( <MyLoader />)
       : 
       ( user && <ResultComponent user={user} /> )}
       </div>
    </>
  );
};

export default GitHubCep;
