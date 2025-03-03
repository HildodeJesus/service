"use client";

import { useReducer, useCallback } from "react";

export interface IPaginationClient {
	page: number;
	take: number;
	order: "asc" | "desc";
}

type PaginationAction =
	| { type: "change_order" }
	| { type: "increment_page" }
	| { type: "decrement_page" }
	| { type: "set_take"; payload: number }
	| { type: "set_page"; payload: number };

function reducer(
	state: IPaginationClient,
	action: PaginationAction
): IPaginationClient {
	switch (action.type) {
		case "change_order":
			return { ...state, order: state.order === "desc" ? "asc" : "desc" };
		case "increment_page":
			return { ...state, page: state.page + 1 };
		case "decrement_page":
			return { ...state, page: Math.max(1, state.page - 1) };
		case "set_take":
			return { ...state, take: action.payload };
		case "set_page":
			return { ...state, page: Math.max(1, action.payload) };
		default:
			return state;
	}
}

export function usePagination(initialState?: Partial<IPaginationClient>) {
	const defaultState: IPaginationClient = {
		page: 1,
		take: 10,
		order: "desc",
		...initialState,
	};

	const [state, dispatch] = useReducer(reducer, defaultState);

	const changeOrder = useCallback(() => {
		dispatch({ type: "change_order" });
	}, []);

	const nextPage = useCallback(() => {
		dispatch({ type: "increment_page" });
	}, []);

	const prevPage = useCallback(() => {
		dispatch({ type: "decrement_page" });
	}, []);

	const setItemsPerPage = useCallback((take: number) => {
		dispatch({ type: "set_take", payload: take });
	}, []);

	const setPage = useCallback((page: number) => {
		dispatch({ type: "set_page", payload: page });
	}, []);

	return {
		...state,

		changeOrder,
		nextPage,
		prevPage,
		setItemsPerPage,
		setPage,

		hasNextPage: true,
		hasPrevPage: state.page > 1,

		dispatch,
	};
}
