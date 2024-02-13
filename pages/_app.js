import { Fragment } from "react";
import Head from "next/head";
import "./global.css";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  }, []);

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>to do</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
