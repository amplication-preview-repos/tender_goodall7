import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Clients"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contactInformation" source="contactInformation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
