import React from 'react';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = function (props) {
  const { title } = props;
  return (
    <div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default App;
