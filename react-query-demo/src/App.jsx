import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // create this component in the next step

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
