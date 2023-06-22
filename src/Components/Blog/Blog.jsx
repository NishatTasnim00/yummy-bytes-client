import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import PDFFile from '../PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-daisyui';

const Blog = () => {
	const [blogData, setBlogData] = useState([]);
	// console.log(blogData);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://yummy-bytes-server-nishattasnim00.vercel.app/blog'
			);
			const data = await response.json();
			setBlogData(data);
		};
		fetchData();
	}, []);

	return (
		<>
			<PDFDownloadLink
				document={<PDFFile />}
				fileName="Blog.pdf"
				className="flex justify-center"
			>
				{({ loading }) =>
					loading ? (
						<button className="btn-primary">Downloaded</button>
					) : (
						<Button className="btn-primary">Download</Button>
					)
				}
			</PDFDownloadLink>
			<div className="my-container">
				<h1 className="title-2 lg:pb-16 ">Blog</h1>
				{blogData &&
					blogData.map((qCard) => (
						<BlogCard qCard={qCard} key={qCard.id}></BlogCard>
					))}
			</div>
		</>
	);
};

export default Blog;
