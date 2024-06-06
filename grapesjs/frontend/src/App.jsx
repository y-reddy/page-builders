import React, { useState } from 'react';
import EditorComponent from './EditorComponent';
import CustomSection from './CustomSection';

const App = () => {
  const [view, setView] = useState(''); // 'content' or 'editor'

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div>
      <h1>Website with GrapesJS Editor</h1>
      <div>
        <button onClick={() => handleViewChange('content')}>Load Content</button>
        <button onClick={() => handleViewChange('editor')}>Load Editor</button>
      </div>
      {view === 'content' && <CustomSection contentId="myCustomContent" />}
      {view === 'editor' && <EditorComponent />}
    </div>
  );
};

export default App;
