import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { useCallback, useMemo } from 'react';

const Cell = styled(Grid)`
  aspect-ratio: 1/1;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(5) {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
  &:nth-child(3),
  &:nth-child(6) {
    border-bottom: 1px solid black;
  }
  &:nth-child(7),
  &:nth-child(8) {
    border-right: 1px solid black;
  }
`;

export type OnCellClickedEvent = {
  position: number;
};

export type PlayGridCellProps = {
  position: number;
  content: 'x' | 'o' | null;
  onClick: (event: OnCellClickedEvent) => void;
};

export function PlayGridCell(props: PlayGridCellProps) {
  const { position, content, onClick } = props;

  const icon = useMemo(
    function () {
      if (content === 'x') {
        return <CloseIcon sx={{ width: '100%', height: '100%' }} />;
      } else if (content === 'o') {
        return <RadioButtonUnchecked sx={{ width: '100%', height: '100%' }} />;
      }
      return <Icon sx={{ width: '100%', height: '100%' }} />;
    },
    [content]
  );

  const onGridClicked = useCallback(
    function () {
      onClick({ position: position });
    },
    [position, onClick]
  );

  return (
    <Cell item xs={1} onClick={!content ? onGridClicked : undefined}>
      {icon}
    </Cell>
  );
}
