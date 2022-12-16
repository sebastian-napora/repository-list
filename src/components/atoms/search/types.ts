import { ChangeEvent, FC } from 'react';

export type TSearchBarProps = FC<{
  label: string;
  value: string | undefined;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}>;
