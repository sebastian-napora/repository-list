import '@testing-library/jest-dom/extend-expect';
import { cleanup, act, renderHook } from '@testing-library/react';

import { useTheme } from './useTheme';
import { THEMES } from './schema';

import { TSingleTheme } from './types';

afterEach(cleanup);

describe('useTheme test', () => {
  describe('1. checked custom hook useTheme changed theme', () => {
    const allThemes = THEMES;

    const { result } = renderHook(() => useTheme());

    const actResultExpectTabs = (themeSelected: TSingleTheme, expectedResult: TSingleTheme): void => {
      act(() => result.current.setMode(themeSelected));
      expect(themeSelected).toBe(expectedResult);
    };

    it('1.1. result be a main theme', () => {
      actResultExpectTabs(allThemes.data.main, allThemes.data.main);
    });

    it('1.2. result be a other theme', () => {
      actResultExpectTabs(allThemes.data.otherTheme, allThemes.data.otherTheme);
    });

    it('1.3. useEffect should set main theme in first render', () => {
      act(() => result.current.handleSetTheme(THEMES));
      expect(result.current.theme).toBe(allThemes.data.main);
      expect(result.current.themeLoaded).toBe(true);
    });
  });
});
