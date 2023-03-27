import React from 'react';
import { Table, Button } from 'rsuite';
import { mockUsers } from './mock';
import Form from 'react-bootstrap/Form';
import 'rsuite/dist/rsuite.css';

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(8);

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === 'EDIT';
  return (
    <Cell {...props} className={editing ? 'table-content-editing' : ''}>
      {editing ? (
        <Form.Control
          size="sm"
          type="text"
          defaultValue={rowData[dataKey]}
          placeholder="Enter here..."
          onChange={(event) => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData.id);
        }}>
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};

const POC = () => {
  const [data, setData] = React.useState(defaultData);

  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find((item) => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEditState = (id) => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find((item) => item.id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setData(nextData);
  };

  return (
    <Table rowHeight={70} height={500} data={data}>
      <Column width={200}>
        <HeaderCell>First Name</HeaderCell>
        <EditableCell dataKey="firstName" onChange={handleChange} />
      </Column>

      <Column width={200}>
        <HeaderCell>Last Name</HeaderCell>
        <EditableCell dataKey="lastName" onChange={handleChange} />
      </Column>

      <Column width={300}>
        <HeaderCell>Email</HeaderCell>
        <EditableCell dataKey="email" onChange={handleChange} />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Actions</HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState} />
      </Column>
    </Table>
  );
};

export default POC;
