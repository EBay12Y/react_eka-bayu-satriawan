import { useSelector } from "react-redux";

export const useProductsSelector = useSelector((state) => state.product.products);

export const useProductTypeSelector = useSelector((state) => state.product.type);

export const useProductDetail = useSelector((state) => state.product.productDetail);