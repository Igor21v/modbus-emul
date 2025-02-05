import { memo, useCallback, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import cls from './FullScreen.module.css';

interface FullScreenProps {}

export const FullScreen = memo((props: FullScreenProps) => {
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    window.onresize = function () {
      const maxHeight = window.screen.height,
        maxWidth = window.screen.width,
        curHeight = window.innerHeight,
        curWidth = window.innerWidth;
      const docHasFullScreen = document.fullscreenEnabled && document.fullscreenElement !== null;
      if ((maxWidth == curWidth && maxHeight == curHeight) || docHasFullScreen) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }
    };
  }, []);
  const buttonContent = fullScreen ? 'Выйти из полноэкранного' : 'Полноэкранный режим';
  const buttonHandler = useCallback(() => {
    if (!fullScreen) document.body.requestFullscreen();
    else {
      const docHasFullScreen = document.fullscreenEnabled && document.fullscreenElement !== null;
      if (docHasFullScreen) document.exitFullscreen();
    }
  }, [fullScreen]);

  return (
    <Button onClick={buttonHandler} className={cls.FullScreen}>
      {buttonContent}
    </Button>
  );
});
