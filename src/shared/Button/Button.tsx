import type { ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react';

import css from './Button.module.scss';

type ButtonAttrs = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'name' | 'type' | 'value' | 'disabled'>;

type ButtonBaseProps = ButtonAttrs & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shape?: 'default' | 'circle' | 'round';
  style?: CSSProperties;
} & (
  | { children: ReactNode; icon?: JSX.Element | undefined; }
  | { icon: JSX.Element | undefined; children?: ReactNode; }
);

type ButtonProps = ButtonBaseProps & {
  appearance?: 'default' | 'filled' | 'outlined';
};

type RestType = Required<ButtonBaseProps> & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 2.0.2 (28.09.2022)
 * @example
 * ```
 * <Button.Filled type='submit' onClick={submitForm}>Submit</Button>
 * <Button.Outlined shape='circle' icon={<IconPlus />} disabled>Add</Button.Outlined>
 * ```
 * @example Изменение размера кнопки (иконка, `padding` и `border-radius` изменяются пропорционально)
 * ```
 * <Button.Outlined icon={<IconHeart />} shape='round' style={{ fontSize: 24 }} />
 * ```
 * @example [`Button`] Нестандартный стиль кнопки (эффект наведения и нажатия универсальны для любого стиля)
 * ```
 * <Button style={{ background: 'lightblue', border: '1px solid lightseagreen' }}>Click me!</Button>
 * ```
 */

export function Button({
  children,
  type = 'button',
  appearance = 'default',
  shape = 'default',
  disabled = false,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${css.generic} ${css[appearance]} ${css[shape]}`}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {rest.icon}
      {(typeof children === 'string') && <span>{children}</span> || children}
    </button>
  );
}

function FilledButton({ children, ...rest }: ButtonBaseProps): JSX.Element {
  return (
    <Button appearance='filled' {...rest as RestType}>
      {children}
    </Button>
  );
}

function OutlinedButton({ children, ...rest }: ButtonBaseProps): JSX.Element {
  return (
    <Button appearance='outlined' {...rest as RestType}>
      {children}
    </Button>
  );
}

Button.Filled = FilledButton;
Button.Outlined = OutlinedButton;
