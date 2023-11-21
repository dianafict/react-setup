import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

// export function Panel() {
// const [data, setData] = useState([
//     {
//         id: 1,
//         word: "kot",
//         translation: "cat",
//         category: "noun",
//     },
//     {
//         id: 2,
//         word: "pies",
//         translation: "dog",
//         category: "noun",
//     },
//     {
//         id: 3,
//         word: "skakać",
//         translation: "jump",
//         category: "verb",
//     },
// ]);

export function Panel() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3000/words")
			.then(res => res.json())
			.then(res => {
				setData(res);
				setIsLoading(false);
			});
	}, []);

	// function handleLoadClick() {
	// 	fetch("http://localhost:3000/words")
	// 		.then(res => res.json())
	// 		.then(res => {
	// 			setData(res);
	// 		});
	// }

	// return (
	// <>
	// 	{/* <Button onClick={handleLoadClick}>Załaduje dane</Button> */}

	// 	<section className={styles.section}>
	// 		<List data={data}></List>
	// 	</section>
	// </>

	if (isLoading) {
		return <p>ladowanie</p>;
	}

	// return isLoading ? (
	// 	<p>ladowanie</p>
	// ) : (

	return (
		<>
			<section className={styles.section}>
				<List data={data}></List>
			</section>
		</>
	);
}
