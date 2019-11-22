import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';

const port = 9000;
const app = express();


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/blog', (req, res) => {
	let blog = {
		"heading": "Blog", 
		"subHeading": "Read our blog",
		"blogProps": [
			{
				"id": 1,
				"backgroundImage": "images/image_1.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "01 - Even the all-powerful Pointing has no control about the blind texts",
				"content": {

				}
			},
			{
				"id": 2,
				"backgroundImage": "images/image_2.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "02 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 3,
				"backgroundImage": "images/image_3.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "03 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 4,
				"backgroundImage": "images/image_4.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "04 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 5,
				"backgroundImage": "images/image_5.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "05 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 6,
				"backgroundImage": "images/image_6.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "06 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 7,
				"backgroundImage": "images/image_1.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "07 - Even the all-powerful Pointing has no control about the blind texts",
				"content": {

				}
			},
			{
				"id": 8,
				"backgroundImage": "images/image_2.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "08 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 9,
				"backgroundImage": "images/image_3.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "09 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 10,
				"backgroundImage": "images/image_4.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "10 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 11,
				"backgroundImage": "images/image_5.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"contentHeading": "11 - Even the all-powerful Pointing has no control about the blind texts"
			},
			{
				"id": 12,
				"backgroundImage": "images/image_6.jpg",
				"dateLink": "#",
				"date": "July 12, 2018",
				"authorLink": "#",
				"author": "Admin",
				"countLink": "#",
				"count": "3",
				"blogSingleLink": "/blog-single/",
				"contentHeading": "12 - Even the all-powerful Pointing has no control about the blind texts"
			}

		]
	}
	res.json(blog);
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});	
