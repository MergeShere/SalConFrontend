// src/App.tsx
import { Provider } from 'react-redux';
import { store } from './store/store';
import Footer from './components/Footer'; // Import the Footer component
import SalonDetails from './pages/SalonDetails';

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        {/* Your other app components would go here */}
        <main className="flex-grow">
          <SalonDetails />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
