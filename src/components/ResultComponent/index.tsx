import ResultCard from 'components/ResultCard';
import { User } from 'types/user';
import './styles.css';

type Props = {
  user: User;
};

const ResultComponent = ({ user }: Props) => {
  return (
    <>
      <div className="component-container">
        <div className="container container-dados-usuario">
          <div className="informacoes-dados-img">
            <img src={user?.avatar_url} alt="Avatar"></img>
          </div>
          <div className="informacoes-card-user">
            <h2>Informações</h2>
            <div className="dados-card-user">
              <ResultCard title="Perfil" description={user?.url} />
              <ResultCard
                title="Seguidores"
                description={String(user?.followers)}
              />
              <ResultCard title="Localidade" description={user?.location} />
              <ResultCard title="Nome" description={user?.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultComponent;
