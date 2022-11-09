import { CSSProperties, ReactNode } from 'react';

import css from './Align.module.scss';

interface AlignProps {
  children: ReactNode;
  style?: CSSProperties;
  to: /* eslint-disable @typescript-eslint/indent */
    | 'top-left' | 'top-center' | 'top-right'
    | 'center-left' | 'center' | 'center-right'
    | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

type AlignBaseProps = Pick<AlignProps, 'children' | 'style'>;

/** (@experimental)
 * Выравнивание вложенного компонента по двум осям.
 * Занимает всё свободное пространство родительского элемента.
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 0.1.3 (28.09.2022)
 * @example
 * ```
 * <Align.BottomCenter style={{ marginBlock: 10 }}>
 *   <span>По центру снизу, с отступом 10px сверху и снизу</span>
 * </Align>
 * ```
 */
export function Align({ children, to, style }: AlignProps): JSX.Element {
  /* eslint-disable id-length */
  const [v, h] = to.split('-');

  return (
    <div className={`${css.wrap} ${css[`wrap_${v}` + (h ? `-${h}` : '')]}`} {...{ style }}>
      {children}
    </div>
  );
}

Align.TopLeft = function AlignTopLeft({ children }: AlignBaseProps): JSX.Element {
  return <Align to='top-left'>{children}</Align>;
};
Align.TopCenter = function AlignTopCenter({ children }: AlignBaseProps): JSX.Element {
  return <Align to='top-center'>{children}</Align>;
};
Align.TopRight = function AlignTopRight({ children }: AlignBaseProps): JSX.Element {
  return <Align to='top-right'>{children}</Align>;
};
Align.CenterLeft = function AlignCenterLeft({ children }: AlignBaseProps): JSX.Element {
  return <Align to='center-left'>{children}</Align>;
};
Align.Center = function AlignCenter({ children }: AlignBaseProps): JSX.Element {
  return <Align to='center'>{children}</Align>;
};
Align.CenterRight = function AlignCenterRight({ children }: AlignBaseProps): JSX.Element {
  return <Align to='center-right'>{children}</Align>;
};
Align.BottomLeft = function AlignBottomLeft({ children }: AlignBaseProps): JSX.Element {
  return <Align to='bottom-left'>{children}</Align>;
};
Align.BottomCenter = function AlignBottomCenter({ children }: AlignBaseProps): JSX.Element {
  return <Align to='bottom-center'>{children}</Align>;
};
Align.BottomRight = function AlignBottomRight({ children }: AlignBaseProps): JSX.Element {
  return <Align to='bottom-right'>{children}</Align>;
};

/* type TestType = typeof Align & {
   //new ({ to, children }: AlignProps ): JSX.Element;
   [key: string]: ({ children }: AlignBaseProps) => JSX.Element;
}
['top-left', 'top-center', 'top-right',
  'center-left', 'center', 'center-right',
  'bottom-left', 'bottom-center', 'bottom-right'].forEach(
   (elem) => {
      const camelCase = elem.replace(/-./g, (c) => c[1].toUpperCase());
      (Align as TestType)[camelCase] = function AlignWrap({ children }: AlignBaseProps): JSX.Element {
         return <Align to={elem as AlignProps['to']}>{children}</Align>;
      };
   }
); */
