import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Configuration } from "./Configuration";

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('a pagina de configuracao', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render(<RecoilRoot>
            <Configuration />
        </RecoilRoot>)

        expect(container).toMatchSnapshot()
    })
})