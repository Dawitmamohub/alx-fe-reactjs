import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList.jsx";

test("renders initial todo", () => {
  render(<TodoList />);
  expect(screen.getByText("Sample Todo")).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("New Todo"), { target: { value: "Test Todo" } });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Sample Todo");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Delete"));
  expect(screen.queryByText("Sample Todo")).not.toBeInTheDocument();
});
