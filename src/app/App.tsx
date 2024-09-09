import { MainLayout } from 'shared/layouts/MainLayout';
import { Leftbar } from 'widgets/Leftbar';
import { Rightbar } from 'widgets/Rightbar';
import { Logbar } from 'widgets/Logbar';
import { AppRouter } from './providers/router';

function App() {
  return (
    <div className="app">
      <MainLayout
        content={<AppRouter />}
        leftbar={<Leftbar />}
        rightbar={<Rightbar />}
        logbar={<Logbar />}
      />
    </div>
  );
}

export default App;
