import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import { FilterChildren } from 'utils/BuildComponents/FilterChildren';

import * as S from './styles';
import { ContainerImage } from './styles';

type Props = PropsWithChildren &
  S.WrapperColor &
  S.ImageWrapperProps &
  typeof S.Container.defaultProps;

const Container: FC<Props> & {
  Image: typeof ContainerImage;
} = ({
  children,
  $bg,
  className,
  clip,
  clipX,
  clipY,
  key,
  ref,
  ...PropsContainer
}) => {
  const [FilteredChildren, setFilter] = useState(FilterChildren(children)),
        [img, setImg] = useState(FilteredChildren.SelectChild(ContainerImage)),
        [rest, setRest] = useState(
          FilteredChildren.children.filter((child) => child.type !== ContainerImage)
        );

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) return;

    const Filter = FilterChildren(children);

    setFilter(Filter);
  }, [children]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    setRest(
      FilteredChildren.children.filter((child) => child.type !== ContainerImage)
    );
    setImg(FilteredChildren.SelectChild(ContainerImage));
  }, [FilteredChildren]);

  return (
    <S.Container
      ref={ref}
      key={key}
      className={className}
      {...{ ...PropsContainer }}
    >
      <S.ContainerBg {...{ $bg }}>
        <S.ImageWrapper {...{ clip, clipX, clipY }}>{img}</S.ImageWrapper>
      </S.ContainerBg>
      {rest}
    </S.Container>
  );
};

Container.Image = ContainerImage;

export default Container;
