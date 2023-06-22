import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 45,
        color: 'pink',
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman',
		color: 'gray',
	},

	header: {
		fontSize: 18,
		marginBottom: 20,
		marginTop: 20,
		// textAlign: 'center',
		color: 'blue',
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
});

const PDFFile = () => {
	return (
		<Document>
			<Page style={styles.body}>
				<Text style={styles.header} >
					1 .Tell us the differences between uncontrolled and controlled
					components.
				</Text>
				<Text style={styles.text}>
					Ans : Uncontrolled and controlled components are two approaches to
					building user interfaces in web applications. The main difference
					between these two types of components is how they handle user input.
					Uncontrolled components rely on the browser to maintain and update
					their state, while controlled components use React to manage the
					component state. Uncontrolled components are often used for simple use
					cases where the user input is not critical to the application's
					functionality. They are easy to implement and can be useful when
					working with native HTML form elements. However, they offer less
					control over the component state and can be harder to work with when
					building complex user interfaces. Controlled components are more
					flexible and powerful than uncontrolled components, as they provide
					greater control over the component state and allow for more complex
					interactions with the user. They are often used for more advanced use
					cases where the user input is critical to the application's
					functionality. Controlled components require more setup and code to
					manage the component state, but they offer more control and
					flexibility over the user interface. In general, the choice between
					uncontrolled and controlled components depends on the specific needs
					of the application and the complexity of the user interface being
					built.
				</Text>

				<Text style={styles.header} >
					2 . How to validate React props using PropTypes?
				</Text>
				<Text style={styles.text}>
					Ans : React PropTypes is a built-in feature that allows developers to
					validate the props passed to a component, ensuring that they conform
					to the expected type and structure. To use PropTypes, developers need
					to import it from the 'prop-types' package and define a propTypes
					object within their component. This object specifies the types of
					props that are expected and whether they are required or optional.
					PropTypes can validate a wide range of data types, including strings,
					numbers, booleans, arrays, and objects. If the props passed to a
					component don't match the expected type or structure, PropTypes will
					throw a console warning, helping to identify errors early on in the
					development process. PropTypes is a valuable tool for improving the
					reliability and maintainability of React components, making it easier
					for developers to ensure that their code is robust and free from
					errors.
				</Text>

				<Text style={styles.header} >
					3 . Tell us the difference between nodejs and express js.
				</Text>
				<Text style={styles.text}>
					Ans : Node.js and Express.js are both commonly used technologies for
					building server-side applications in JavaScript. However, Node.js is a
					runtime environment for JavaScript, while Express.js is a web
					application framework that runs on top of Node.js. Node.js is a
					platform for executing JavaScript outside of a browser. It provides a
					set of built-in modules for performing various tasks, such as file
					input/output, networking, and HTTP handling. Node.js is used to build
					server-side applications that run on the server, rather than in a
					browser, and can be used for a variety of use cases, such as building
					APIs, server-side rendering, and real-time applications.Express.js is
					a lightweight web application framework built on top of Node.js. It
					provides a set of features and tools for building web applications,
					such as routing, middleware, and template engines. Express.js allows
					developers to easily define HTTP routes, handle requests and
					responses, and implement middleware to perform additional processing
					on requests and responses. Express.js is widely used for building APIs
					and web applications, and is known for its simplicity and flexibility
					In summary, Node.js provides a platform for executing JavaScript on
					the server-side, while Express.js is a web application framework built
					on top of Node.js, providing additional features and tools for
					building web applications. While Node.js provides a basic set of
					built-in modules for handling HTTP requests and responses, Express.js
					offers a more complete and structured approach for building web
					applications.
				</Text>

				<Text style={styles.header} >
					4 . What is a custom hook, and why will you create a custom hook?
				</Text>
				<Text style={styles.text}>
					Ans : A custom hook in React is a reusable function that encapsulates
					a specific piece of logic. It allows developers to extract and reuse
					stateful logic from components, reducing code duplication and
					improving code maintainability. Custom hooks are useful when there is
					complex or repetitive logic that needs to be shared across multiple
					components. Custom hooks provide several benefits, such as code reuse,
					encapsulation, abstraction, and composition. They allow you to extract
					and reuse stateful logic across multiple components, reducing code
					duplication and making it easier to reason about and test the code.
					Custom hooks also encapsulate complex or repetitive logic, making it
					easier to change the underlying implementation without affecting the
					components that use the hook. Additionally, custom hooks can be
					composed together to create more complex behavior from simple,
					reusable hooks. Overall, custom hooks are a powerful tool in React
					that help developers create more modular, reusable, and maintainable
					code. They allow for easier code organization, better code reuse, and
					improved abstraction of implementation details.
				</Text>

				<Text
					style={styles.pageNumber}
					render={({ pageNumber, totalPages }) =>
						`${pageNumber} / ${totalPages}`
					}
				/>
			</Page>
		</Document>
	);
};

export default PDFFile;
