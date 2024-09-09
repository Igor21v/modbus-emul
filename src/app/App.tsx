import { MainLayout } from 'shared/layouts/MainLayout';
import { MainPage } from '../pages/MainPage';
import { Leftbar } from 'widgets/Leftbar';
import { Rightbar } from 'widgets/Rightbar';
import { Logbar } from 'widgets/Logbar';

function App() {
  return (
    <div className="app">
      <MainLayout
        content={<>Content</>}
        leftbar={<Leftbar />}
        rightbar={<Rightbar />}
        logbar={<Logbar />}
      />
    </div>
  );
}

export default App;
