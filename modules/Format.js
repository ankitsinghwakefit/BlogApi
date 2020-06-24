exports.userFormat = (user, token) => {
	let UserFormat = {
		user: {
			email: user.email,
			token: token,
			username: user.username,
			bio: user.bio,
			image: user.image,
			articles : user.articles
		}
	};
	return UserFormat;
};

exports.articleFormat = article => {
	let ArticleFormat = {
		article: {
			title: article.title,
			description: article.description,
			body: article.body,
			tagList: article.tagList
		}
	};
	return ArticleFormat;
};
exports.singleArticleFormat = (article, userid) => {

	return (article = {
		slug: article.slug,
		title: article.title,
		description: article.description,
		body: article.body,
		tagList: article.tagList,
		createdAt: article.createdAt,
		updatedAt: article.updatedAt,
		
	});
};
