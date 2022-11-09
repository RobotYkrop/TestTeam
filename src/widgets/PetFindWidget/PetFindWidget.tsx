import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Formik, Form, Field } from 'formik';
import { Collapse } from 'antd';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './PetFindWidget.module.scss';
import { initialValues, validationSchema } from './schema';
import { Button } from '../../shared';

const { Panel } = Collapse;

const PetFind = ():JSX.Element => {
  const mapState = { center: [55.75, 37.57], zoom: 16 };
  const [coords, setCoords] = useState([0, 0]);

  return (
    <div className={styles.wrapper}>
      <h3>Информация о питомце</h3>
      <div className={styles.petinfo}>
        Блок информации о питомце, как на основной странице клиента
      </div>
      <h3>Отправить информацию о находке питомца</h3>
      <Formik
        onSubmit={(values) => console.log({ ...values, coordinates: coords })}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >

        {({ errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={styles.petform}>
            <label>
              <div>Сообщение владельцу</div>
              <Field
                className={errors.message && touched.message ? styles.negative : styles.message}
                name="message"
                as={TextArea}
                placeholder="Введите сообщение"
                type="text"
                id="message"
              />
            </label>
            {errors.message && touched.message && <p className={styles.errors}>{errors.message}</p>}
            <Collapse>
              <Panel header="Добавить геопозицию" key={1}>
                <YMaps>
                  <Map
                    defaultState={mapState}
                    width="100%"
                    onCLick={(event: any) => setCoords(event.get('coords'))}
                    name="coordinates"
                    id="coordinates"
                  >
                    <Placemark
                      geometry={[coords[0], coords[1]]}
                    />
                  </Map>
                </YMaps>
              </Panel>
            </Collapse>
            <Button type="submit" style={{ marginTop: '20px' }}>Отправить</Button>
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default PetFind;
