// fistly we create type like what type we want to create
import type { PageLoad } from './$types';
type Character = {
    id: number,
    name: string,
    image: string,
    about: string
};
// const characters:Character[]=[
//     {
//         id: 1,
//     name: "Gouri",
//     image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     occupation: "student"
//     },
//     {
//         id: 2,
//     name: "Sahil",
//     image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     occupation: "student"
//     },
//     {
//         id: 3,
//     name: "Aashi",
//     image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     occupation: "student"
//     },
//     {
//         id: 4,
//     name: "Roshani",
//     image: "https://images.pexels.com/photos/459971/pexels-photo-459971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     occupation: "student"
//     }
// ]
// fetch data
export const load: PageLoad = async ({ url }) => {
    const searchParam = url.searchParams.get("search") || ''; // Default to empty string if searchParam is null

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`);
    const data = await response.json();

    // Map all the response
    const characters = data.meals
        ? data.meals.map((meal: any) => ({
              id: meal.idMeal,
              name: meal.strMeal,
              image: meal.strMealThumb,
              occupation: "Chef's Special", // Example placeholder
          }))
        : [];

    return {
        characters,
    };
};

// export const load:PageLoad = async ({ url }) => {
//     const searchParam = url.searchParams.get("search")
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s={searchParam}');
//     const data = await response.json();
//     // map all the response
//     const characters = data.meals
//         ? data.meals.map((meal: any) => ({
//             id: meal.idMeal,
//             name: meal.strMeal,
//             image: meal.strMealThumb,
//             occupation: "Chef's Special", // Example placeholder
//         }))
//         : [];

//     return {
//         characters,
//     };
    // const meal:Character[]=data.meals.map((meals:any)=>({

    //         id: meals.idMeal,
    //         name: meals.strMeal,
    //         image: meals.strMealThumb,
    //         about: meals.strInstructions,

    // }));
    // return {meal};
// }