import { Link } from 'react-router-dom';
import {
  CalendarOutlined,
  CommentOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Popover } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { Block } from '../../shared';
import { Animation } from '../../layout';

import css from './ForumWidget.module.scss';

/* import type { Topic } from '../../types/TopicDTO'; */

export function ForumWidget(): JSX.Element {
  /** @temp dummy data */
  const topicList: any[] = new Array(10).fill(null).map((_, i) => ({
    id: uuidv4(),
    title: `Topic #${i + 1}`,
    content: 'Lorem ipsum dolor sit amet',
    creationDate: new Date(),
    lastUpdateDate: new Date(),
    /* avatar: 'https://avatarko.ru/img/kartinka/31/film_Avatar_30471.jpg', */
    topicStarter: {
      id: uuidv4(),
      email: '',
      firstname: 'John',
      lastname: 'Doe',
    },
    /* comment: 300 */
  }));

  const date = Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

  const datePopover = Intl.DateTimeFormat('ru', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

  const popoverContent = (
    <>
      <div>
        <CalendarOutlined />
        <span>{datePopover}</span>
      </div>
      <div>
        <EditOutlined />
        <span>{datePopover}</span>
      </div>
    </>
  );

  /* duration = base * (i * factor + 1)
    base: 500ms
    factor: 0.25 [1, 1.25, 1.5, 1.75, 2, ...]
    duration: 500, 625, 750, 875, 1000, ... */
  const topicRender = topicList.map((topic, i) => (
    <Animation
      mount="drawUp"
      duration={500 * (i * 0.25 + 1)}
      fn="ease-out"
      key={topic.id}
    >
      <div className={css.topic}>
        <div>
          <Link to="/onetopic">
            <h3 className={css.title}>{topic.title}</h3>
          </Link>
          <div>{topic.content}</div>
        </div>
        <div className={css.author}>
          {/* <img className={css.avatar} src={topic.avatar} alt="avatar" /> */}
          <img
            className={css.avatar}
            src="https://avatarko.ru/img/kartinka/31/film_Avatar_30471.jpg"
            alt="avatar"
          />
          <div className={css.username}>
            {`${topic.topicStarter.firstname} ${topic.topicStarter.lastname}`}
          </div>
        </div>
        <Popover content={popoverContent}>
          <div className={css.date}>
            <CalendarOutlined />
            <span>{date}</span>
          </div>
        </Popover>
        <div className={css.comment}>
          <CommentOutlined />
          <span>0</span>
        </div>
      </div>
    </Animation>
  ));

  return (
    <Block>
      <Block.Headline>Форум</Block.Headline>
      <div className={css.topic_list}>{topicRender}</div>
    </Block>
  );
}
