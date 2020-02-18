import React from "react";
import { useAsync } from "react-async";

interface Props {
  id: number;
}

// https://reqres.in/
interface UserResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function dataFetching(
  { id }: any, // Props should work
  { signal }: AbortController
): Promise<UserResponse> {
  const res = await fetch(
    `https://reqres.in/api/users/${id}?ts=${new Date().getTime()}`,
    { signal }
  );
  if (!res.ok) throw new Error(res.statusText);
  const { data } = await res.json();
  return data;
}

function User({ id }: Props) {
  const { data, error, isPending } = useAsync({
    promiseFn: dataFetching,
    watch: id,
    id
  });

  if (isPending) return <span>Loading...</span>;
  if (error) return <span>{`Something went wrong: ${error.message}`}</span>;
  if (!data) return <span>Nothing to show you :(</span>;

  return (
    <span>
      {id} &mdash; {data.first_name} {data.last_name}
    </span>
  );
}

export default User;
