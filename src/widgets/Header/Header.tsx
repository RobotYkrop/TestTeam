import { Link } from 'react-router-dom';
import { MenuOutlined, DownOutlined, BellOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown, Layout } from 'antd';

import { Button, Separator } from '../../shared/index';
import { MatchMediaWrapper } from '../../layout';
import Avatar from '../../assets/icons/Avatar.png';

import styles from './Header.module.scss';

export default function Header(): JSX.Element {
  type Header = { label: string; path: string }[];

  const links: Header = [
    { label: 'Список докторов', path: '/doctors' },
    { label: 'Список процедур', path: '/procedures' },
    { label: 'Список того', path: '/список того' },
    { label: 'Ещё что-то', path: '/о чем-нибудь' },
    { label: 'Список сосисок', path: '/список сосисок' },
    { label: 'Контакты', path: '/contact' },
    { label: 'О нас', path: '/about' },
    { label: 'Форум', path: '/forum' },
  ];

  const linksRender = links.map((el) => (
    <Link to={`${el.path}`} key={uuidv4()} className={styles.link}>
      {el.label}
    </Link>
  ));

  const Bool = false;

  return (
    <header className={styles.wrapper}>
      <div className={styles.ws} />
      <MatchMediaWrapper query="(max-width: 1365px)">
        <div className={styles.nav}>
          <Dropdown
            overlayStyle={{ pointerEvents: 'auto', width: '150px' }}
            overlay={<div className={styles.menu}>{linksRender}</div>}
          >
            <MenuOutlined />
          </Dropdown>
          <Separator type="vertical" style={{ marginLeft: 0 }} />
        </div>
        <div className={styles.nav}>
          <Separator type="vertical" style={{ marginLeft: 0 }} />
          {linksRender}
        </div>
      </MatchMediaWrapper>
      {Bool ? (
        <div className={styles.controls}>
          <Button.Filled style={{ marginLeft: 10 }}>
            <Link to="/sign-in">Вход</Link>
          </Button.Filled>
          <Button.Outlined style={{ marginLeft: 20 }}>
            <Link to="/sign-up">Регистрация</Link>
          </Button.Outlined>
        </div>
      ) : (
        <div className={styles.controls}>
          <BellOutlined />
          <Separator type="vertical" />
          <div className={styles.user}>
            <div className={styles.username}>
              <span>ThePetOwner</span>
              <span className={styles.role}>Клиент</span>
            </div>
            <DownOutlined />
            <img className={styles.avatar} src={Avatar} alt="Avatar" />
          </div>
        </div>
      )}
    </header>
  );
}
