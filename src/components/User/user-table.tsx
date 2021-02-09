import React, { useState, useEffect } from "react";
import { Table } from "evergreen-ui";
import { getUsers } from "../../stores/user/user.action";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../stores/state";
import { Paging } from "../../stores/state";

const UserTable: React.FC<UserTableProps> = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "taquy",
      age: 10,
    },
  ]);

  const [pageRequest, setPageRequest] = useState({} as Paging | any);

  useEffect(() => {
    const initialRequest: Paging = {
      page: 1,
      size: 10,
    };

    setPageRequest(initialRequest);
  }, []);

  useEffect(() => {
    if (pageRequest.page === undefined) {
      return;
    }
    props.getUsers(pageRequest);
  }, [pageRequest]);

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
};

const mapStateToProps = (state: RootState) => {
  return state.users;
};

const mapDispatchToProps = {
  getUsers,
};

type UserTableProps = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserTable);
