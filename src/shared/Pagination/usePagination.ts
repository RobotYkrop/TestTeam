import { useMemo } from 'react';

interface PaginationHookValues {
  total: number;
  current: number;
  siblingCount: number;
}

type UsePaginationHook = (string | number)[];

const range = (start: number, end: number): number[] => {
  const length: number = end - start + 1;

  return Array.from({ length }, (value, idx) => idx + start);
};

export const usePagination = ({
  total,
  siblingCount = 1,
  current,
}: PaginationHookValues) => {
  const paginationRange = useMemo(():UsePaginationHook => {
    const totalPageNumbers = siblingCount + 5;

    if (total <= totalPageNumbers) {
      return range(1, total);
    }

    const leftSiblingIndex = Math.max(current - siblingCount, 1);
    const rightSiblingIndex = Math.min(current + siblingCount, total);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < total - 2;
    const firstPageIndex = 1;
    const lastPageIndex = total;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, 'next', total];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(total - rightItemCount + 1, total);

      return [firstPageIndex, 'prev', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, 'prev', ...middleRange, 'next', lastPageIndex];
    }

    return [];
  }, [total, siblingCount, current]);

  return paginationRange;
};
