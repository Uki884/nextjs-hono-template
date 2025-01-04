import { ExampleList } from "../features/Example/components/ExampleList";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<ExampleList />
		</div>
	);
}
