import { History } from 'history';

export const goToLoginPage = (history: History): void => {
  history.push('/');
};

export const goToUserList = (history: History): void => {
  history.push('/user-list/0');
};
export const nextPage = (history: History, offset: number): void => {
  history.push(`/user-list/${offset + 10}`);
};
export const previousPage = (history: History, offset: number): void => {
  history.push(`/user-list/${offset - 10}`);
};
