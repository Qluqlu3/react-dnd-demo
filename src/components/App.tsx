import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//@ts-ignore
import DragArea from './DragArea';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragArea />
    </DndProvider>
  );
};

export default App;
