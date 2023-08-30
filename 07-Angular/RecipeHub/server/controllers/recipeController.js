const Recipe = require("../models/Recipe");
const User = require("../models/User");

function getAllRecipes(req, res, next) {
  return Recipe.find()
    .populate("userId")
    .then((allRecipes) => res.json(allRecipes))
    .catch(next);
}

function getRecipeById(req, res, next) {
  const { recipeId } = req.params; //TODO: Adjust the recipe ID info

  return Recipe.findById(recipeId) //TODO: Adjust the recipe ID info
    .populate({
      populate: {
        recipeOwner: "userId",
        hasCommented: ["commentList.userId", "firstName", "lastName"],
      },
    })
    .then((foundRecipe) => {
      if (foundRecipe) {
        res.status(200).json(foundRecipe);
      } else {
        res.status(404).json({ message: "Recipe not found." });
      }
    })
    .catch(next);
}

function createRecipe(req, res, next) {
  const { _id: userId } = req.user;
  const recipe = new Recipe({
    title: req.body.title,
    author: req.body.title,
    preparationMinutes: req.body.preparationMinutes,
    cookingMinutes: req.body.cookingMinutes,
    servings: req.body.servings,
    pricePerServing: req.body.pricePerServing,
    image: req.body.image, //TODO: Adjust this part of the recipe model
    summary: req.body.summary,
    dishTypes: req.body.dishTypes, //TODO: Adjust this part of the recipe model
    extendedIngredients: req.body.extendedIngredients,
    analyzedInstructions: req.body.analyzedInstructions,
    saves: req.body.saves,
    commentsList: req.body.comments,
  });

  return Recipe.create({
    recipe,
    userId,
    saves: [userId],
    commentsList: [userId],
    recipeOwner: [userId],
  })
    .then((createdRecipe) => {
      res.status(200).json(createdRecipe);
    })
    .catch(next);
}

function editRecipe(req, res, next) {
  const { recipeId } = req.params;
  const existingRecipe = Recipe.findById(recipeId);
  const { _id: userId } = req.user;

  // Update recipe fields
  existingRecipe.title = req.body.title;
  existingRecipe.author = req.body.author;
  existingRecipe.preparationMinutes = req.body.preparationMinutes;
  existingRecipe.cookingMinutes = req.body.cookingMinutes;
  existingRecipe.servings = req.body.servings;
  existingRecipe.pricePerServing = req.body.pricePerServing;
  existingRecipe.image = req.body.image; //TODO: Adjust this part of the recipe model
  existingRecipe.summary = req.body.summary;
  existingRecipe.dishTypes = req.body.dishTypes; //TODO: Adjust this part of the recipe model
  existingRecipe.extendedIngredients = req.body.extendedIngredients;
  existingRecipe.analyzedInstructions = req.body.analyzedInstructions;
  existingRecipe.saves = req.body.saves;
  existingRecipe.comments = req.body.comments;

  const updatedRecipe = existingRecipe.save();

  // If the userId is not the same as this one of the post, the post will not be updated
  return Recipe.findByIdAndUpdate(
    { _id: recipeId, userId },
    { recipeData: updatedRecipe }, //TODO: Adjust the content of the updated recipe
    { new: true }
  )
    .then((updatedRecipe) => {
      if (updatedRecipe) {
        res.status(200).json(updatedRecipe);
      } else {
        res.status(401).json({ message: `Not allowed!` });
      }
    })
    .catch(next);
}

function deleteRecipe(req, res, next) {
  const { recipeId } = req.params;
  const { _id: userId } = req.user;

  Promise.all([
    Recipe.findByIdAndDelete({ _id: recipeId, userId }),
    User.findByIdAndUpdate(
      { _id: userId },
      { $pull: { userOwnRecipesList: recipeId } }
    ),
  ])
    .then(([deletedRecipe, _, __]) => {
      if (deletedRecipe) {
        res.status(200).json(deletedRecipe);
      } else {
        res.status(401).json({ message: `Not allowed!` });
      }
    })
    .catch(next);
}

function saveRecipe(req, res, next) {
  const { recipeId } = req.params;
  const { _id: userId } = req.user;

  console.log("save");

  return Recipe.findByIdAndUpdate(
    { _id: recipeId },
    { $addToSet: { saves: userId } },
    { new: true }
  )
    .then(() => res.status(200).json({ message: "Saved successful!" }))
    .catch(next);
}

function commentRecipe(req, res, next) {
  const { recipeId } = req.params;
  const commentText = req.body;
  const { _id: userId } = req.user;

  return Recipe.findByIdAndUpdate(
    { _id: recipeId },
    { comment: commentText },
    { $addToSet: { commentsList: userId } },
    { new: true }
  )
    .then((commentedRecipe) => {
      res.status(200).json(commentedRecipe);
    })
    .catch(next);
}

async function search(recipeTitle) {
  let recipes = await getAllRecipes();

  if (recipeTitle) {
    recipes = recipes.filter(
      (x) => x.location.toLowerCase() == recipeTitle.toLowerCase()
    );
  }

  return recipes;
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  editRecipe,
  deleteRecipe,
  saveRecipe,
  commentRecipe,
  search,
};
