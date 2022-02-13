import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, readProductList } from "../../../Redux/actions";

export default function Test() {
	const dispatch = useDispatch();
	const productState = useSelector(({ product }) => product);

	useEffect(() => {
		console.log({productState})
	}, [productState])

	useEffect(() => {
		fetchProductList();
	}, [])

	const fetchProductList = async () => {
		dispatch(readProductList({
			page: 2
		}))
	}

	const handleProductCreate = () => {
		/**
		 * Create product in redux
		 */

		dispatch(createProduct(productState.products[0]))
	}

	return (
		<div>
			<button onClick={() => handleProductCreate()} className='capitalize text-xl font-extrabold text-cyan-700 py-4 px-6'>
				Create Product
			</button>
		</div>
	)
}
