import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;