import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

export default function layout() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
