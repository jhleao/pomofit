import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from 'react';
import ModalContext from '@contexts/ModalContext';
import { Container, MobileText } from './style';

const SidebarItem = ({ path, Icon, text }) => {
  const Router = useRouter();
  const pathname = Router.asPath;
  const selected = pathname === path;

  const { toggleMobileMenu } = useContext(ModalContext);

  return (
    <Link href={path}>
      <Container selected={selected} onClick={ toggleMobileMenu }>
        <Icon />
        <MobileText>{text}</MobileText>
      </Container>
    </Link>
  );
};

export default SidebarItem;
