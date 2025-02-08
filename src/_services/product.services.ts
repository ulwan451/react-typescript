import request from "@/_network/request";
import { IProduct } from "@/types/Product";

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

const getProductById = async (id: number): Promise<IProduct> => {
    try {
        return await request<IProduct>({
            url: `/products/${id}`,
            method: "GET",
        });
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
};

export const productServices = {
    getProducts,
    getProductById,
};
