
import MealItem from './meal-item';
import classes from './meals-grid.modules.css'

const MealsGrid: React.FC = () => {
    const meals: {id: string, title: string, slug: string, image: string, summary: string, creator: string }[] = []; // Declare and initialize the 'meals' variable as an array of objects with the specified properties

    return (
        <ul className={classes.meals}>
            {meals.map((meal: { id: string ,title: string, slug: string, image: string, summary: string, creator: string }) => (
                <li key={meal.id}> 
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>   
    );
}

export default MealsGrid;