import type { CSSProperties } from 'react';
import type { Property } from 'csstype';

import css from './Separator.module.scss';

interface SeparatorProps {
  type: 'horizontal' | 'vertical';
  lineWidth?: number;
  lineStyle?: Property.BorderStyle;
  style?: CSSProperties;
}

/**
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 1.0.2 (28.09.2022)
 * @example Изменение толщины (в `px`) и стиля разделительной линии:
 * ```
 * <Separator type='vertical' lineWidth={4} lineStyle='double' />
 * ```
 * @example Изменение цвета и отступов разделителя:
 * ```
 * <Separator type='vertical' style={{ marginInline: 15, color: 'black' }} />
 * <Separator type='horizontal' style={{ marginBlock: 20, color: '#FEFEFE' }} />
 * ```
 * [Для справки]
 *
 * Элемент `hr` неявно имеет роль `separator`.
 * Элементы с ролью `separator` неявно имеют атрибут `aria-orientation` со значением `horizontal`.
 */
export function Separator({
  type, lineWidth = 1, lineStyle = 'solid', style = {}
}: SeparatorProps): JSX.Element {
  const composedStyle: CSSProperties = {
    ...style,
    ...{ '--width': `${lineWidth}px`, '--style': lineStyle }
  };

  return (
    <div
      className={`${css.generic} ${css[type]}`}
      role='separator'
      aria-orientation={type}
      style={composedStyle}
    />
  );
}
