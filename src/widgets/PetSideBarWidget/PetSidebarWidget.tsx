import { useState } from 'react';
import {
  DeleteFilled,
  EditFilled,
  MenuUnfoldOutlined,
  RightOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { Button, Block } from '../../shared';

import css from './PetSidebarWidget.module.scss';
import { MatchMediaWrapper } from '../../layout';

interface Pets {
  id: number;
  name: string;
  checked: boolean;
}

const petListItem = (pet: Pets, cb: (id: number) => void): JSX.Element => (
  <li key={pet.id}>
    <div
      className={pet.checked ? css['pet-checked'] : css.pet}
      onClick={() => cb(pet.id)}
      aria-hidden="true"
    >
      <div className={css['pet-avatar']}>
        <span>0</span>
      </div>
      <span className={css['pet-name']}>{pet.name}</span>
      <RightOutlined className={pet.checked ? css.open : css.closed} />
    </div>
    {pet.checked && (
      <div className={css.buttons}>
        <Button.Filled icon={<EditFilled />}>Редактировать</Button.Filled>
        <Button.Filled
          icon={<DeleteFilled />}
          style={{ background: 'var(--error-color)', marginLeft: 10 }}
        >
          Удалить
        </Button.Filled>
      </div>
    )}
  </li>
);

export function PetSidebarWidget(): JSX.Element {
  const [petsData, setPetsData] = useState([
    {
      id: 1,
      name: 'Привет как дела че делаешь когда в армию?',
      checked: false,
    },
    { id: 2, name: 'Клубничка', checked: false },
    { id: 3, name: 'Вредина', checked: false },
    { id: 4, name: 'Кекич', checked: false },
  ]);

  const updatePetsData = (id: number) => {
    const newPetsData = petsData.map((pet) => (pet.id === id ? { ...pet, checked: !pet.checked } : { ...pet, checked: false }));
    setPetsData(newPetsData);
  };

  return (
    <aside className={css.petsidebar}>
      <Block constraints={{ w: 300 }} style={{ padding: 0 }}>
        <header className={css.header}>
          <MatchMediaWrapper query="(max-width: 768px)">
            <MenuUnfoldOutlined onClick={() => {}} />
            <>
              <span className={css.title}>Ваши питомцы</span>
              <Button.Outlined
                shape="circle"
                icon={<PlusOutlined />}
                style={{
                  justifySelf: 'end',
                  width: 22,
                  height: 22,
                  background: 'var(--block-bg)',
                  borderColor: 'var(--theme-color-highlight)',
                  color: 'var(--text-color)',
                }}
                aria-label="Add pet"
              />
            </>
          </MatchMediaWrapper>
        </header>
        <ul className={css.petlist}>
          {petsData.map((pet) => petListItem(pet, updatePetsData))}
        </ul>
      </Block>
    </aside>
  );
}
