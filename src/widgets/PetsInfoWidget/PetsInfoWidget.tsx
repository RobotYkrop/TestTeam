import { Collapse } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import 'antd/dist/antd.css';
import styles from './PetsInfoWidget.module.scss';

const { Panel } = Collapse;

const info = [
  {
    header: 'Подробная информация',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
  {
    header: 'Медосмотры',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
  {
    header: 'Вакцины против бешенства',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
  {
    header: 'Другие вакцинации',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
  {
    header: 'Дегельминтизация',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
  {
    header: 'Обработка от внешних паразитов',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
  {
    header: 'Записи о репродукции',
    text: 'Здесь будет подробная информация о питомце: вид животного, кличка, цвет, дата рождения, хозяин и пр пр пр',
  },
];

export function PetsInfoWidget(): JSX.Element {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse className={styles.wrapper} onChange={onChange}>
      {info.map((el) => (
        <Panel
          className={styles.panel}
          header={<div className={styles.title}>{el.header}</div>}
          key={uuidv4()}
          showArrow={false}
        >
          <p>{el.text}</p>
        </Panel>
      ))}

    </Collapse>
  );
}
