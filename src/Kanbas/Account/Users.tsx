import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState<string>("");
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  const { uid } = useParams();

  const fetchUsers = async () => {
    try {
      const allUsers = await client.findAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const applyFilters = async (currentRole: string, currentName: string) => {
    try {
      let filteredUsers = await client.findAllUsers();

      if (currentRole) {
        filteredUsers = filteredUsers.filter((user: any) => user.role === currentRole);
      }

      if (currentName) {
        filteredUsers = filteredUsers.filter((user: any) =>
          `${user.firstName} ${user.lastName}`.toLowerCase().includes(currentName.toLowerCase())
        );
      }

      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error filtering users:", error);
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    await applyFilters(role, name);
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    await applyFilters(role, name);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div>
      <h3>Users</h3>
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>

      <div className="mb-3">
        <input
          type="text"
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="form-control float-start w-25 me-2 wd-filter-by-name"
        />
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select float-start w-25 wd-select-role"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      </div>
      <PeopleTable users={users} />
    </div>
  );
}
