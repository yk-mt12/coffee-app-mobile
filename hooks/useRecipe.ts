import AsyncStorage from '@react-native-community/async-storage';
import { Recipe } from '../types/recipe';

// レシピの配列を保存するためのキー
const RECIPE_STORAGE_KEY = '@recipes';

// レシピを保存する関数
export const saveRecipe = async (recipe: Recipe): Promise<void> => {
  try {
    // 既存のレシピを取得する
    const storedRecipes = await getRecipes();
    // 新しいレシピを配列に追加する
    const updatedRecipes = [...storedRecipes, recipe];
    // AsyncStorageに配列を保存する
    await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(updatedRecipes));
  } catch (error) {
    console.error('Failed to save recipe.', error);
  }
};

// 全てのレシピを取得する関数
export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    // AsyncStorageからレシピを取得する
    const recipes = await AsyncStorage.getItem(RECIPE_STORAGE_KEY);
    if (recipes !== null) {
      // レシピがある場合、JSONをパースして返す
      return JSON.parse(recipes);
    } else {
      // レシピがない場合、空の配列を返す
      return [];
    }
  } catch (error) {
    console.error('Failed to get recipes.', error);
    return [];
  }
};

// 特定のレシピを取得する関数
export const getRecipe = async (recipeName: string): Promise<Recipe | undefined> => {
  try {
    // 全てのレシピを取得する
    const recipes = await getRecipes();
    // レシピ名で検索して該当するレシピを返す
    return recipes.find(recipe => recipe.name === recipeName);
  } catch (error) {
    console.error(`Failed to get recipe for ${recipeName}.`, error);
    return undefined;
  }
};

// 特定のレシピを削除する関数
export const deleteRecipe = async (recipeName: string): Promise<void> => {
  try {
    // 全てのレシピを取得する
    const recipes = await getRecipes();
    // レシピ名で検索して該当するレシピを削除する
    const updatedRecipes = recipes.filter(recipe => recipe.name !== recipeName);
    // AsyncStorageに配列を保存する
    await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(updatedRecipes));
  } catch (error) {
    console.error(`Failed to delete recipe for ${recipeName}.`, error);
  }
};

// 特定のレシピを更新する関数
export const updateRecipe = async (recipe: Recipe): Promise<void> => {
  try {
    const recipes = await getRecipes();
    const index = recipes.findIndex((r) => r.created_at === recipe.created_at);
    if (index !== -1) {
      recipes[index] = recipe;
      await AsyncStorage.setItem('@recipes', JSON.stringify(recipes));
    }
  } catch (e) {
    console.error(e);
  }
};

