import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

import AppContext from './context/AppContext.jsx'; // Import AppContext

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

        <AppContext> {/* Đảm bảo AuthContext.Provider được cung cấp */}
          <ShopContextProvider>
            <App />
          </ShopContextProvider>
        </AppContext>
    
    </BrowserRouter>
  </StrictMode>
);
