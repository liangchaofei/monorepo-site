import { useState, useMemo } from 'react';

export interface ReturnValue {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean) => void;
}

export default (initialValue?: boolean): ReturnValue => {
    const [state, setState] = useState(Boolean(initialValue));

    const stateMethods = useMemo(() => {
        const setTrue = (): void => {
            setState(true);
        };
        const setFalse = (): void => {
            setState(false);
        };
        const toggle = (val?: boolean): void => {
            setState(prevState => typeof val === 'boolean' ? val : !prevState);
        };
        return {
            state,
            setTrue,
            setFalse,
            toggle,
        };
    }, [state]);

    return stateMethods;
};