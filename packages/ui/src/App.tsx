import './App.css';
import { View } from './views';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App" style={{ padding: 10 }}>
        <View></View>
      </div>
    </QueryClientProvider>
  );
}

export default App;
