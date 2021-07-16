import { History } from 'history';

export const goToLoginPage = (history: History) => {
  history.push('/');
};

export const goToBlankPage = (history: History) => {
  history.push('/blank');
};
