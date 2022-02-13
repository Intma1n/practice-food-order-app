import Card from "../UI/Card";

import classes from './AvailableMeals.module.css';
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Труа бутыль де водка',
        description: 'Аве плезир',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Оливье',
        description: 'Однажды я даже в обморок упал - накушался',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Шашлык',
        description: 'А мне шашлык',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Мясо',
        description: 'Виски с содовой и льда побольше',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />)

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals