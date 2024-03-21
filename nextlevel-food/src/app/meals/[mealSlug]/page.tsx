const MealDetailsPage = ({ params }: { params: any }) => {
    return (
        <main>
            <h1>Meal Details</h1>
            <p>Meal: {params}</p>
        </main>
    );
}

export default MealDetailsPage;