import { MainLayout } from 'shared/layouts/MainLayout';
import { Leftbar } from 'widgets/Leftbar';
import { Rightbar } from 'widgets/Rightbar';
import { Logbar } from 'widgets/Logbar';
import { AppRouter } from './providers/router';
import { AppState } from 'entities/AppState';
import { Log } from 'entities/Log';

function App() {
  return (
    <div className="app">
      <MainLayout
        state={<AppState />}
        content={<AppRouter />}
        leftbar={<Leftbar />}
        rightbar={<Rightbar />}
        logbar={<Logbar />}
        log={<Log />}
        expandedLog={false}
      />
    </div>
  );
}

export default App;
