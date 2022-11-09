import { useState, useEffect } from 'react';

interface MatchMediaWrapperProps {
  query: string;
  children: [JSX.Element | JSX.Element[], JSX.Element | JSX.Element[]];
}

/** Отрисовывает `children[0]`, если указанный media-запрос удовлетворён; иначе — `children[1]`.
 * @author Amagyzenér <dmitry-phs535@ya.ru>
 * @version 1.1.0 (29.09.2022)
 * @example
 * ```
 * <MatchMediaWrapper query='(max-width: 1024px)'>
 *   {mobileContent}
 *   {desktopContent}
 * </MatchMediaWrapper>
 * ```
 */
export function MatchMediaWrapper({ query, children }: MatchMediaWrapperProps): JSX.Element {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia(query);
    setMatches(mediaWatcher.matches);

    const changeState = (e: MediaQueryListEvent) => setMatches(e.matches);

    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', changeState);

      return () => {
        mediaWatcher.removeEventListener('change', changeState);
      };
    }
    // @deprecated: legacy support (IE & old Safari)
    mediaWatcher.addListener(changeState);

    return () => {
      mediaWatcher.removeListener(changeState);
    };
  }, []);

  /* eslint-disable react/jsx-no-useless-fragment */
  return matches ? <>{children[0]}</> : <>{children[1]}</>;
}
