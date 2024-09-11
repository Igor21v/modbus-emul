import { RootState } from 'app/providers/StoreProvider/config/store';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';

interface OpenPortButtonProps {
  className?: string;
}

export const OpenPortButton = memo((props: OpenPortButtonProps) => {
  const { dataBits, parity, port, baudRate, stopBits } = useSelector(
    (state: RootState) => state.port,
  );

  const openPort = async () => {
    // @ts-ignore
    if (navigator.serial) {
      try {
        // @ts-ignore
        const port = await navigator.serial.requestPort();
        await port.open({
          baudRate,
          dataBits,
          stopBits,
          parity,
        });
        console.log(port);
        while (port.readable) {
          const reader = port.readable.getReader();
          try {
            while (true) {
              const { value, done } = await reader.read();
              if (done) {
                // |reader| has been canceled.
                break;
              }
              console.log(value);
            }
          } catch (error) {
            // Handle |error|...
          } finally {
            reader.releaseLock();
          }
        }
        // Continue connecting to the device attached to |port|.
      } catch (e) {
        // The prompt has been dismissed without selecting a device.
      }
    } else {
      alert('Ваш браузер не поддерживает данное приложение');
    }
  };

  return <Button onClick={openPort}>Выбрать порт</Button>;
});
