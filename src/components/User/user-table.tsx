import React, { useState } from "react";
import { Table } from "evergreen-ui";
import { getUsers } from "../../stores/user/user.action";
import { connect } from "react-redux";
import { RootState } from "../../stores/state";

function UserTable(props) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "taquy",
      age: 10,
    },
  ]);

  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Name</Table.TextHeaderCell>
        <Table.TextHeaderCell>Age</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.TextCell>{user.name}</Table.TextCell>
            <Table.TextCell isNumber>{user.age}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

const mapStateToProps = (state: RootState) => {
  return state.users;
};

const mapDispatchToProps = {
  getUsers,
};

export const UserTableComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable) as any;
