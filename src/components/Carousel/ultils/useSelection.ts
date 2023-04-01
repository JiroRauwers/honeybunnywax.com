import { useEffect, useState } from 'react';

export const useSelection = (
  items: Element[]
): [number, (i: number) => void] => {
  const [selected, setSelected] = useState([0, 0]);

  const changeSelected = (i: number) => {
    setSelected([i, selected[0]]);
  };
  const updateSelected = () => {
    if (!items.length) return;
    const previusSelected = items[selected[1]],
          previusSelectedPrev = items[selected[1] - 1],
          previusSelectedNext = items[selected[1] + 1],
          current = items[selected[0]],
          prev = items[selected[0] - 1],
          next = items[selected[0] + 1];

    previusSelected && previusSelected.classList.remove('selected');
    previusSelectedPrev && previusSelectedPrev.classList.remove('prev');
    previusSelectedNext && previusSelectedNext.classList.remove('next');
    current && current.classList.add('selected');
    prev && prev.classList.add('prev');
    next && next.classList.add('next');
  };

  useEffect(updateSelected, [items, selected]);

  return [selected[0], changeSelected];
};
