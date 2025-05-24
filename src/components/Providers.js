// app/providers.jsx or components/Providers.jsx
'use client';

import { Provider } from 'react-redux';
import { store } from '../store';

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
