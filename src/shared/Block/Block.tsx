import type { CSSProperties, ReactNode } from 'react';

import css from './Block.module.scss';

interface BlockProps {
  children: ReactNode;
  constraints?: { w: number, h?: number } | { h: number, w?: number };
  fitContent?: boolean;
  style?: CSSProperties;
}

type BlockBaseProps = Pick<BlockProps, 'children'>;

/** (@experimental)
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 0.3.1 (29.09.2022)
 * @param {{w: number, h: number}} props.constraints ограничение ширины и высоты блока
 */
export function Block({
  /* eslint-disable id-length */
  children, constraints = { w: 0, h: 0 }, fitContent = false, style = {}
}: BlockProps): JSX.Element {
  const composedStyle: CSSProperties = {};
  constraints.w && Object.assign(composedStyle, { maxWidth: constraints.w });
  constraints.h && Object.assign(composedStyle, { maxHeight: constraints.h });
  fitContent && Object.assign(composedStyle, { height: 'fit-content' });
  Object.assign(composedStyle, style);

  return (
    <section className={css.box} style={composedStyle}>
      {children}
    </section>
  );
}

Block.Headline = function Headline({ children }: BlockBaseProps): JSX.Element {
  return <h2 className={css.headline}>{children}</h2>;
};
