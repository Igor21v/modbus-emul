import { MainLayout } from 'shared/layouts/MainLayout';
import { Leftbar } from 'widgets/Leftbar';
import { Rightbar } from 'widgets/Rightbar';
import { Logbar } from 'widgets/Logbar';
import { AppRouter } from './providers/router';
import { AppState } from 'entities/AppState';
import { Log } from 'entities/Log';
import { useAppSelector } from 'shared/hooks/useAppSelector';

function App() {
  const expandedLog = useAppSelector((state) => state.appState.expandedLog);
  window.portWorker = new Worker(new URL('./workers/port.ts', import.meta.url));
  return (
    <div className="app">
      <MainLayout
        state={<AppState />}
        content={<AppRouter />}
        leftbar={<Leftbar />}
        rightbar={<Rightbar />}
        logbar={<Logbar />}
        log={<Log />}
        expandedLog={expandedLog}
      />
    </div>
  );
}

export default App;
