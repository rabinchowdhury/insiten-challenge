import React  from 'react'

const Title = () => (
	<p className="search-title"><b>Search Results:</b></p>
);

const ArticlesListItem = ({ article }) => (
	<article><br /><br />
		<h5>{article.title}</h5>
		{/* <p><time>{(moment(new Date(article.publishedAt))).format('LLLL')}</time></p> */}
		<p className="description">{article.description}</p>
		<p><a href={article.url}>Link</a></p>
	</article>
)

const ArticlesList = ({ articles }) => (
	<section>
		{articles.map((article, index) => (
			<ArticlesListItem article={article} key={index} />
		))}
	</section>
);


class Feed extends React.Component {
	constructor() {
		super();
		
		this.state = {
			articles: [],
		};
	}
	
	componentDidMount() {		
		fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff5f5da68fc548fab779b1807782a8ca')
			.then(response => response.json())
			.then((response) => {
				this.setState({ articles: response.articles });
			});		
	}
	
	render() {
		return (
			<div>
				<Title />
				<ArticlesList articles={this.state.articles} />
			</div>
		);
	}
}

export default Feed;