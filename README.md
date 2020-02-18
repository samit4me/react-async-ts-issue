## Summary

In a nutshell, both of the following usages of `useAsync` are throwing TypeScript errors, see `src/User.tsx` for further details.

```
const { data, error, isPending } = useAsync(dataFetching, { id: 1 });

const { data, error, isPending } = useAsync({ promiseFn: dataFetching, id: 1 });
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`
