import request from "../_network/request";
import { IProduct } from "../types/Product";

const getProducts = async (): Promise<IProduct[]> => {
    try {
        return await request<IProduct[]>({
            url: "/products",
            method: "GET",
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const productServices = {
    getProducts,
};
