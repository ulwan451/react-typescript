import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../../src/components/Title";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("Title Component", () => {
    it("should render the title with correct text", () => {
        render(<Title>Exclusive Product</Title>);

        expect(screen.getByRole("heading", { level: 2, name: "Exclusive Product" })).toBeInTheDocument();
    });

    it("should apply additional class names", () => {
        render(<Title className="text-red-500">Exclusive Product</Title>);

        const titleElement = screen.getByRole("heading", { level: 2, name: "Exclusive Product" });
        expect(titleElement).toHaveClass("text-red-500");
    });
});
