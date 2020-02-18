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
  { id }: Props,
  { signal }: AbortController
): Promise<UserResponse> {
  const res = await fetch(`https://reqres.in/api/users/${id}`, { signal });
  if (!res.ok) throw new Error(res.statusText);
  const { data } = await res.json();
  return data;
}

function User({ id }: Props) {
  // TS throws errors with both of these examples.
  // Need to either:
  // - @ts-ignore
  // - Change `dataFetching(props: any)` :(
  const { data, error, isPending } = useAsync(dataFetching, { id });
  // const { data, error, isPending } = useAsync({ promiseFn: dataFetching, id });

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
