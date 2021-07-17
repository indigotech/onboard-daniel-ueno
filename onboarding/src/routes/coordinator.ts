import { History } from 'history';

export const goToLoginPage = (history: History): void => {
  history.push('/');
};

export const goToUserList = (history: History): void => {
  history.push('/userlist');
};
