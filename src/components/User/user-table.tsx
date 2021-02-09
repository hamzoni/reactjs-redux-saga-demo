import React, { useState, useEffect } from "react";
import { Avatar, Table, Text } from "evergreen-ui";
import { getUsers } from "../../stores/user/user.action";
import { connect, ConnectedProps } from "react-redux";
import { RootState, SortType } from "../../stores/state";
import { Paging } from "../../stores/state";
import { User } from "./user";

const UserTable: React.FC<UserTableProps> = (props) => {
  const [users, setUsers] = useState([] as User[]);

  const [pageRequest, setPageRequest] = useState({} as Paging | any);

  useEffect(() => {
    const initialRequest: Paging = {
      page: 1,
      size: 10,
      sortField: null,
      sortType: SortType.ASC,
    };

    setPageRequest(initialRequest);
  }, []);

  useEffect(() => {
    if (pageRequest.page === undefined) {
      return;
    }
    props.getUsers(pageRequest);
  }, [pageRequest]);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  const setPage = (page: number) => {
    setPageRequest({
      ...pageRequest,
      page
    });
  }

  const PagingComponent = () => {
    return (
      <nav className="mt-3 d-flex justify-content-center">
        <ul className="pagination mx-auto">
          {pageRequest.page > 1 && (
            <li className="page-item">
              <span className="page-link">
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          )}
          {pageRequest.page > 1 && (
            <li className="page-item" onClick={() => setPage(pageRequest.page - 1)}>
              <span className="page-link">{pageRequest.page - 1}</span>
            </li>
          )}
          <li className="page-item active">
            <span className="page-link">{pageRequest.page}</span>
          </li>
          <li className="page-item" onClick={() => setPage(pageRequest.page + 1)}>
            <span className="page-link">{pageRequest.page + 1}</span>
          </li>
          <li className="page-item" onClick={() => setPage(pageRequest.page + 1)}>
            <span className="page-link">
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Table className="mt-3">
        <Table.Head>
          <Table.TextHeaderCell></Table.TextHeaderCell>
          <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Username</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {users.map((user) => (
            <Table.Row key={user.username}>
              <Table.Cell display="flex" alignItems="center">
                <Avatar
                  className={"mr-3"}
                  src={user.icon}
                  name={user.username}
                  size={40}
                />
                <Text marginLeft={8} size={300} fontWeight={500}>
                  {user.username}
                </Text>
              </Table.Cell>
              <Table.TextCell>{user.name}</Table.TextCell>
              <Table.TextCell>{user.username}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {PagingComponent()}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return state.users;
};

const mapDispatchToProps = (dispatch: any) => ({
  getUsers: (payload: Paging) => dispatch(getUsers(payload)),
});

type UserTableProps = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserTable);
