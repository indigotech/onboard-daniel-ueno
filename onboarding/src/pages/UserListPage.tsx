import React from 'react';
interface User {
  id: number;
  username: string;
  email: string;
}
export const UserListPage: React.FC = () => {
  const mockedUserList: User[] = [
    { id: 1, username: 'daniel1', email: 'ueno2005@gmail.com' },
    { id: 2, username: 'daniel2', email: 'ueno2006@gmail.com' },
    { id: 3, username: 'daniel3', email: 'ueno2007@gmail.com' },
  ];
  const mappedUserlist = mockedUserList.map((user) => {
    const { id, username, email } = user;
    return (
      <p key={id}>
        username: {username} | email: {email}
      </p>
    );
  });
  return (
    <>
      <div>UserListPage</div>
      <div>{mappedUserlist}</div>
    </>
  );
};
