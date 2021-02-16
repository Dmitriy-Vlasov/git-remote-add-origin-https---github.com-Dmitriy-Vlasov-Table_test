import React, {useState} from 'react';
import Table from './Table';


const data = [
  {id: Math.random(), value: ['cell1', 'cell2', 'cell3', 'cell4']},
  {id: Math.random(), value: ['cell1', 'cell2', 'cell3', 'cell4']},
  {id: Math.random(), value: ['cell1', 'cell2', 'cell3', 'cell4']},
  {id: Math.random(), value: ['cell1', 'cell2', 'cell3', 'cell4']},
];


function App() {
  const [tabData, setTabData] = useState(data);

  function onEdit(arr, idx, value) {
    const editedLine = tabData.find(el => el.value === arr);
    const idxLine = tabData.indexOf(editedLine);

    tabData[idxLine].value[idx] = value;

    setTabData(tabData);
  };

  function onRemove(id) {
    const newState = tabData.filter(el => el.id !== id);

    setTabData(newState);
  };

  function onAdd() {
    console.log('kkdkd')

    const newState = [...tabData, {id: Math.random(), value: ['cell1','cell2','cell3','cell4']}]
      


    setTabData(newState)
  }

  return (
    <Table data={tabData} onEdit={onEdit} onRemove={onRemove} onAdd={onAdd} head={true}/>
  );
};

export default App;
