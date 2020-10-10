import * as React from 'react';
import ButtonPrimary from '../../../layout/buttons/ButtonPrimary';
import { useHistory } from 'react-router-dom';
import Spacer from '../../../layout/misc/Spacer';

interface IMyTemplatesEmptyProps {
}

const MyTemplatesEmpty: React.FunctionComponent<IMyTemplatesEmptyProps> = (props) => {
  const history = useHistory();
  
  const toCreateForms = () => {
    history.push('/app/templates/create');
  }

  return (
    <div>
      <p>You have no created templates yet.</p>
      <Spacer />
      <ButtonPrimary style={{marginTop: '16px'}} onClick={toCreateForms} title={"+ Create"}></ButtonPrimary>
    </div>
  );
};

export default MyTemplatesEmpty;
