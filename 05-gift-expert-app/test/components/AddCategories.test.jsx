import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategories } from "../../src/components/AddCategories";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto ", () => {
    render(<AddCategories onNewCategory={() => { }} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "saitama" } });
    expect(input.value).toBe("saitama");

    // screen.debug();
  });

  test("Debe de llamar onNewCatery si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    // TODO: ???
    render(<AddCategories onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    // screen.debug();
  });
  test("no debe de llamar onNewCatery si el input tiene un valor vacío", () => {
    const onNewCategory = jest.fn();
    render(<AddCategories onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // expecte(onNewCategory).toHaveBeenCalled(0);
    expect(onNewCategory).not.toHaveBeenCalled();

  });
});
