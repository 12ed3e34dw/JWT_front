import React from "react";
import { render, waitFor } from "@testing-library/react";
import { AuthProvider, AuthContext } from "../AuthContext";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Cookies from "js-cookie";

const mock = new MockAdapter(axios);

describe("AuthContext", () => {
    beforeEach(() => {
        Cookies.remove("token");
        mock.reset();
    });

    it("должен загрузить пользователя, если токен есть", async () => {
        Cookies.set("token", "test_token");
        mock.onGet("http://localhost:3001/auth/me").reply(200, { id: 1, name: "Vlad" });

        let user;
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        user = value.user;
                        return null;
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );

        await waitFor(() => expect(user).toEqual({ id: 1, name: "Vlad" }));
    });

    it("должен логинить пользователя и сохранять токен", async () => {
        mock.onPost("http://localhost:3001/auth/login").reply(200, {
            access_token: "token_123",
            user: { id: 2, name: "TestUser" },
        });

        let contextValue;
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        contextValue = value;
                        return null;
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );

        await contextValue.login("test@example.com", "1234");

        expect(Cookies.get("token")).toBe("token_123");
        expect(contextValue.user).toEqual({ id: 2, name: "TestUser" });
    });

    it("должен регистрировать пользователя", async () => {
        mock.onPost("http://localhost:3001/auth/register").reply(200, {
            access_token: "token_reg",
            user: { id: 3, name: "NewUser" },
        });

        let contextValue;
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        contextValue = value;
                        return null;
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );

        await contextValue.register("NewUser", "new@example.com", "pass");

        expect(Cookies.get("token")).toBe("token_reg");
        expect(contextValue.user).toEqual({ id: 3, name: "NewUser" });
    });

    it("должен разлогинивать пользователя", async () => {
        Cookies.set("token", "token_logout");

        let contextValue;
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        contextValue = value;
                        return null;
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );

        contextValue.logout();

        expect(Cookies.get("token")).toBeUndefined();
        expect(contextValue.user).toBeNull();
    });
});
