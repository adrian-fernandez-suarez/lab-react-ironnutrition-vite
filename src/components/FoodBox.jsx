
export default function FoodBox({food, onDeleteFood}){
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl" style={{
            textAlign:'left',
            marginBottom:20,
            }}>
            <figure><img src={food.image} alt={food.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{food.name}</h2>
                <p>Calories: {food.calories}</p>
                <p>Servings {food.servings}</p>
                <p><b>Total Calories: {food.servings * food.calories}</b> kcal</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-error btn-xs" onClick={ ()=> onDeleteFood( food.id ) }>Delete</button>
                </div>
            </div>
        </div>
    );
}