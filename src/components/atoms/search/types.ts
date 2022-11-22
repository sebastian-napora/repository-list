import { ChangeEvent, FC } from 'react';

export type TSearchBarProps = FC<{
  label: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}>;
