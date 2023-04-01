import {
  Children,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

export const useFilter = (
  _children: ReactNode,
  ...filterList: FC<unknown>[]
) => {
  const [children, setChildren] = useState(
      Children.toArray(_children) as ReactElement[]
  ),
        [filter] = useState<FC<unknown>[]>(filterList),
        [Filtered, setFiltered] = useState<ReactNode[][]>([]),
        firstRender = useRef(true);

  // Check For new Children
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setChildren(Children.toArray(_children) as ReactElement[]);
  }, [_children]);

  useEffect(() => {
    // clean the FilteredList
    setFiltered([]);

    const NewFiltered: ReactNode[][] = [];

    filter.map((f) => {
      // run throug the filters passed
      const tempList: ReactNode[] = [];
      children.filter((child) => {
        // run throug the children
        if (child.type == f) {
          tempList.push(child);
          return false;
        }
        return true;
      });
      NewFiltered.push(tempList);
    });

    setFiltered(NewFiltered);
  }, [children, filter]);

  return [children, ...Filtered];
};
