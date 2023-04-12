import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../config/redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import CreateProductFormik from "./CreateProductFormik.view";

describe("CreateProduct component", () => {
    it('renders product name input and displays entered text', () => {
        render(
            <Router>
                <Provider store={store}>
                    <CreateProductFormik />
                </Provider>
            </Router>
        );
        const productNameInput = screen.getByLabelText("Product Name");
        fireEvent.change(productNameInput, { target: { value: "New Product" } });
        expect(productNameInput).toHaveValue("New Product");
    });

    it("should render form and display selected option", () => {
        render(
            <Router>
                <Provider store={store}>
                    <CreateProductFormik />
                </Provider>
            </Router>
        );
        const categorySelect = screen.getByLabelText("Product Category");
        const categoryOption = "Category 1";
        fireEvent.change(categorySelect, { target: { value: categoryOption } });
        expect(categorySelect.value).toBe(categoryOption);
        const categoryDisplay = screen.getByText(categoryOption);
        expect(categoryDisplay).toBeInTheDocument();
    });

    // it("should show error message when Product Name is empty", async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateProductFormik />
    //             </Provider>
    //         </Router>
    //     );
    //     const submitButton = screen.getByText("Create Product");
    //     fireEvent.click(submitButton);
    //     await waitFor(() => {
    //         expect(screen.getByText("Product Name is required")).toBeInTheDocument();
    //     });
    // });

    // it("should show error message when Product Name contains invalid characters", async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateProductFormik />
    //             </Provider>
    //         </Router>
    //     );
    //     const productNameInput = screen.getByLabelText("Product Name");
    //     fireEvent.change(productNameInput, { target: { value: `~!@#$%^&*` } });
    //     const submitButton = screen.getByText("Create Product");
    //     fireEvent.click(submitButton);
    //     await waitFor(() => {
    //         expect(
    //             screen.getByText("Name must not contain symbols")
    //         ).toBeInTheDocument();
    //     });
    // });

    // it("should show error message when Product Name exceeds 25 characters", async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateProductFormik />
    //             </Provider>
    //         </Router>
    //     );
    //     const productNameInput = screen.getByLabelText("Product Name");
    //     fireEvent.change(productNameInput, { target: { value: "A".repeat(26) } });
    //     const submitButton = screen.getByText("Create Product");
    //     fireEvent.click(submitButton);
    //     await waitFor(() => {
    //         expect(
    //             screen.getByLabelText("Product Name must not exceed 25 characters")
    //         ).toBeInTheDocument();
    //     });
    // });

    // it("should show error messages when all form fields are empty", async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateProductFormik />
    //             </Provider>
    //         </Router>
    //     );
    //     const submitButton = screen.getByText("Create Product");
    //     fireEvent.click(submitButton);
    //     await waitFor(() => {
    //         expect(screen.getByText("Product Name is required")).toBeInTheDocument();
    //         expect(
    //             screen.getByText("Product Category is required")
    //         ).toBeInTheDocument();
    //         expect(
    //             screen.getByText("Image Of Product is required")
    //         ).toBeInTheDocument();
    //         expect(
    //             screen.getByText("Product Freshness is required")
    //         ).toBeInTheDocument();
    //         expect(screen.getByText("Product Price is required")).toBeInTheDocument();
    //         expect(
    //             screen.getByText("Additional Description is required")
    //         ).toBeInTheDocument();
    //     });
    // });
});