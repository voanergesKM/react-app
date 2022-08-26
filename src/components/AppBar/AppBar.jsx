import {
  SidebarContainer,
  UserMenu,
  Avatar,
} from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <SidebarContainer>
      <UserMenu>
        <Avatar />
      </UserMenu>
    </SidebarContainer>
  );
};
