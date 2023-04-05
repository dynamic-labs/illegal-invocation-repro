import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react';

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: '80641bde-ec4e-4ef2-8934-f04b91ca4ca8',
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
