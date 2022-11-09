import { useState, useEffect, cloneElement } from 'react';
import type { FunctionComponentElement, CSSProperties } from 'react';

import keyframes from './keyframes.module.scss';

type AnimationProps = {
  children: JSX.Element;
  duration: number;
  delay?: number;
  fn?: string;
  visible?: boolean;
} & ({ mount: string; unmount?: string } | { unmount: string; mount?: string });
// должен быть указан либо 'mount', либо 'unmount', либо оба

type AnimationSpinProps =
  & Pick<AnimationProps, 'children' | 'fn' | 'visible'>
  & { speed?: number; };

function useDelayedUnmount(isMounted: boolean, delayTime: number): boolean {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

/** Анимация появления/исчезновения для вложенного компонента.
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 1.0.1 (26.09.2022)
 * @param {string} props.mount
 * название анимации из `keyframes.module.scss`, без префикса `_` и постфиксов `In/Out` (когда компонент вмонтирован);
 * без анимации, когда не указан
 * @param {string} props.unmount
 * название анимации из `keyframes.module.scss`, без префикса `_` и постфиксов `In/Out` (когда компонент размонтируется);
 * без анимации, когда не указан
 * @param {number} props.duration
 * длительность анимации, мс
 * @param {number} [props.delay=0]
 * задержка начала анимации, мс
 * @param {string} [props.fn='linear']
 * значение, аналогичное [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
 * @param {boolean} [props.visible=true]
 * используется для внешнего управления отображением компонента
 * @example
 * ```
 * <Animation duration={750} mount='fade' fn='ease-in-out'>
 *   <span>Плавное появление текста</span>
 * </Animation>
 * ```
 */
export function Animation({
  children, mount, unmount, duration, delay = 0, fn = 'linear', visible = true
}: AnimationProps): FunctionComponentElement<JSX.Element> | null {
  if (window.matchMedia('(prefers-reduced-motion)').matches) { duration = 0; delay = 0; }
  const shouldRenderChild = useDelayedUnmount(visible, (unmount && delay + duration) || 0);
  if (!duration && !delay) return shouldRenderChild && children || null;

  const mountedStyle: CSSProperties = mount && {
    animation: `${keyframes[`_${mount}In`]} ${duration}ms ${fn} ${delay}ms forwards`
  } || {};
  const unmountedStyle: CSSProperties = unmount && {
    animation: `${keyframes[`_${unmount}Out`]} ${duration}ms ${fn} ${delay}ms forwards`
  } || {};

  return shouldRenderChild && (
    /* { className: `${children.props.className} ${css.provider}` } */
    cloneElement(children, { style: visible ? mountedStyle : unmountedStyle })
  ) || null;
}

/** Бесконечная анимация вращения элемента.
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 1.0.0 (26.09.2022)
 * @param {number} props.speed скорость вращения, об./мин (отрицательное значение для реверса)
 * @param {string} props.fn
 * @param {boolean} props.visible
 * @example
 * ```
 * <Animation.Spin speed={-30} fn='cubic-bezier(0.68, -0.55, 0.27, 1.55)' visible={isLoading}>
 *   <IconGear />
 * </Animation.Spin>
 * ```
 */
Animation.Spin = function Spin({
  children, speed = 60, fn = 'linear', visible = true
}: AnimationSpinProps): FunctionComponentElement<JSX.Element> | null {
  const reverse = speed < 0;
  const duration = 60 / Math.abs(speed) * 1000;

  return visible && cloneElement(children, {
    style: { animation: `${keyframes[reverse ? '_flipReverseIn' : '_flipIn']} ${duration}ms ${fn} infinite` }
  }) || null;
};

/* function Keyframes(props: { name: string, [key: string]: React.CSSProperties | string }): JSX.Element {
  const toCss = (cssObject: React.CSSProperties | string) =>
    typeof cssObject == 'string'
      ? cssObject
      : Object.keys(cssObject).reduce((accumulator, key) => {
        const cssKey: string = key.replace(/[A-Z]/g, v => `-${v.toLowerCase()}`);
        const cssValue: string = (cssObject as Record<string, string>)[key].toString().replace("'", '');
        return `${accumulator}${cssKey}:${cssValue};`;
      }, '');

  return (
    <style>
        {`@keyframes ${props.name} {
        ${Object.keys(props)
          .map(key => {
              return ['from', 'to'].includes(key)
                ? `${key} { ${toCss(props[key])} }`
                : /^_[0-9]+$/.test(key)
                ? `${key.replace('_', '')}% { ${toCss(props[key])} }`
                : '';
          })
          .join(' ')}
        }`}
    </style>
  );
} */

// {mount && <Keyframes name={mount} _0={{ opacity: 0 }} /* _60={{ opacity: 1 }} */ _100={{ opacity: 1 }} />}
// {unmount && <Keyframes name={unmount} _0={{ opacity: 1 }} /* _60={{ opacity: 1 }} */ _100={{ opacity: 0 }} />}
