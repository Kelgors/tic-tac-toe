import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import { Icon } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCallback, useMemo } from 'react';

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
    <Grid
      item
      xs={1}
      sx={{ aspectRatio: '1/1', background: props.content === 'x' ? 'red' : 'blue' }}
      onClick={!content ? onGridClicked : undefined}
    >
      {icon}
    </Grid>
  );
}
