import Card from "./Card";
export default function BodyMain(props) {
  const completeFlagHandler = (data) => {
    const changeData = { ...data, isCompleted: !data.isCompleted };
    const newTodo = props.todo.map((data) => {
      if (data.id == changeData.id) return changeData;
      else return data;
    });

    props.updateTodo(newTodo);
  };
  const deleteTodoHandler = (data) => {
    props.deleteTodo(data);
  };

  return props.todo.map((data) => (
    <Card
      data={data}
      key={data.id}
      onPress={completeFlagHandler}
      onLongPress={deleteTodoHandler}
    />
  ));
}
