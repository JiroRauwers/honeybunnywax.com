import { Children, FC, isValidElement, ReactNode } from 'react';

export const FilterChildren = (children: ReactNode) => {
  const filtered = Children.toArray(children).filter((child) => {
    return isValidElement(child);
  }) as React.ReactElement[];

  const SelectChild = <T>(selected: FC<T>) =>
    filtered.filter((child) => child.type === selected) || null;

  return {
    SelectChild,
    children: filtered
  };
};
