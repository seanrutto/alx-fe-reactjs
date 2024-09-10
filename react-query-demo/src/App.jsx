<<<<<<< HEAD
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
=======
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // create this component in the next step
>>>>>>> 1f5924fef326914e289ae6a71589347d8360f0f8

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
