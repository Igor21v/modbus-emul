import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutePaths } from 'shared/const/router';
import { Card } from 'shared/ui/Card';
import { VStack } from 'shared/ui/Stack';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { Text } from 'shared/ui/Text';
import { FullScreen } from './FullScreen/FullScreen';
import cls from './Leftbar.module.css';
import { ThemeSelect } from './ThemeSelect';

interface LeftbarProps {
  className?: string;
}

export const Leftbar = memo((props: LeftbarProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navFn = (path: TabItem<AppRoutePaths>) => {
    navigate(path.value);
  };
  const tabs: TabItem<AppRoutePaths>[] = [
    {
      value: '/',
      content: <Text text="Режим Мастер" align="center" />,
    },
    {
      value: '/slave',
      content: <Text text="Режим Слейв" align="center" />,
    },
    {
      value: '/listen',
      content: <Text text="Прослушка порта" align="center" />,
    },
  ];
  return (
    <VStack align="center" justify="center" className={cls.Leftbar}>
      <Card max>
        <VStack align="center" justify="center" gap="20">
          <Text text="Выбор режима" size="size_l" />
          <Tabs tabs={tabs} value={pathname} onTabClick={navFn} />
        </VStack>
      </Card>
      <VStack align="center" justify="center" gap="20" max>
        <FullScreen />
        <ThemeSelect />
      </VStack>
    </VStack>
  );
});
