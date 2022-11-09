import { v4 } from 'uuid';
import css from './Pagination.module.scss';
import { usePagination } from './usePagination';

interface PaginationProps {
  total: number;
  current: number;
  siblingCount: number;
  onChange: (n: number | string) => number | string;
}
// onChange возвращает num страницы, на которую необходимо выполнить переход
// Необходимо дополнительное условие: если num < 1, то выполнить переход на 1
// Если num > последней страницы, то выполнить переход на последнюю
const Pagination = (props: PaginationProps): JSX.Element | null => {
  const { total, current, onChange, siblingCount } = props;

  const paginationRange = usePagination({
    current,
    total,
    siblingCount,
  });

  if (current === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onChange(current + 1);
  };

  const onPrevious = () => {
    onChange(current - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  const createPaginationElem = (elem: number | string) => {
    if (elem === 'prev') {
      return (
        <li
          key={v4()}
          className={css.dots}
          onClick={() => onChange(current - 5)}
          role="presentation"
        />
      );
    }

    if (elem === 'next') {
      return (
        <li
          key={v4()}
          className={css.dots}
          onClick={() => onChange(current + 5)}
          role="presentation"
        />
      );
    }

    if (elem === current) {
      return (
        <li key={v4()} className={css.current}>
          {elem}
        </li>
      );
    }

    return (
      <li
        key={v4()}
        className={css.elem}
        onClick={() => onChange(elem)}
        role="presentation"
      >
        {elem}
      </li>
    );
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.pagination}>
        <li
          className={current === 1 ? css.disabled : css.prev}
          onClick={onPrevious}
          role="presentation"
        >
          {'<'}
        </li>
        {paginationRange.map((elem) => createPaginationElem(elem))}
        <li
          className={current === lastPage ? css.disabled : css.next}
          onClick={onNext}
          role="presentation"
        >
          {'>'}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
