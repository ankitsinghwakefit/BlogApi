var Article = require("../models/article");
var User = require("../models/user");
var format = require("../modules/Format");
var slugify = require("slug");

exports.createArticle = async (req, res, next) => {
	try {
		req.body.article.author = req.user.userid;
		const createdArticle = await Article.create(req.body.article);
		var user = await User.findByIdAndUpdate(req.user.userid, {
			$addToSet: { articles: createdArticle.id }
		});
		var token = req.user.token;
		var resArticle = format.articleFormat(createdArticle, token);
		res.status(200).json(resArticle);
	} catch (error) {
		next(error);
	}
};
exports.getSingleArticle = async (req, res, next) => {
	try {
		let slug = req.params.slug;
		const singlearticle = await Article.findOne({ slug });

		var resArticle = format.singleArticleFormat(singlearticle);
		res.status(200).json(resArticle);
	} catch (error) {
		next(error);
	}
};
exports.updateArticle = async (req, res, next) => {
	try {
		if (req.body.article) {
			let slug = req.params.slug;
			var articleToUpdate = await Article.findOne({ slug });

			if (req.user.userid == articleToUpdate.author._id) {
				if (req.body.article.title) {
					var sluggedTitle = slugify(req.body.article.title, {
						lower: true
					});
					req.body.article.slug = sluggedTitle + "-" + Date.now();
				}
				let newArticle = await Article.findByIdAndUpdate(
					articleToUpdate._id,
					req.body.article,
					{ new: true }
				);
				var resArticle = format.singleArticleFormat(newArticle);
				res.status(200).json({ article: resArticle });
			}
		} else {
			res.status(200).json({ error: "Invalid user" });
		}
	} catch (error) {
		next(error);
	}
};
exports.deleteArticle = async (req, res, next) => {
	try {
		let slug = req.params.slug;
		var articleToDelete = await Article.findOne({ slug }).populate(
			"author"
		);
		if (req.user.userid == articleToDelete.author._id) {
			let deletedArticle = await Article.findByIdAndDelete(
				articleToDelete._id
			);
			res.status(200).json({ Success: "Article deleted successfully" });
		}
	} catch (error) {
		next(error);
	}
};


