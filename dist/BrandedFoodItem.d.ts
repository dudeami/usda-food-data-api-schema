import mongoose from "mongoose";
import FoodAttribute from "./FoodAttribute.js";
import FoodNutrient from "./FoodNutrient.js";
import FoodUpdateLog from "./FoodUpdateLog.js";
import LabelNutrients from "./LabelNutrients.js";
export default interface BrandedFoodItem {
    fdcId: Number;
    availableDate: String;
    brandName: String;
    subbrandName: String;
    brandOwner: String;
    dataSource: String;
    dataType: String;
    description: String;
    foodClass: String;
    gtinUpc: String;
    householdServingFullText: String;
    ingredients: String;
    modifiedDate: String;
    publicationDate: String;
    marketCountry: String;
    packageWeight: String;
    servingSize: Number;
    servingSizeUnit: String;
    brandedFoodCategory: String;
    foodAttributes: FoodAttribute[];
    foodNutrients: FoodNutrient[];
    foodUpdateLog: FoodUpdateLog[];
    labelNutrients: LabelNutrients;
}
export declare const BrandedFoodItemSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
