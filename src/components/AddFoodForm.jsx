import { useState } from "react";

export default function AddFoodForm ({onSubmit}) {
    /*
    const [newFood, setNewFood] = useState({
        name:'',
        image:'',
        calories:0,
        servings:0,
    });
    */
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    return (
        <>
        <button className="btn" onClick={()=>window.modalNewFood.showModal()}>Add New Food</button>
        <dialog id="modalNewFood" className="modal">
            <form className="px-6 py-4 space-y-6 border rounded-lg bg-gray-100 text-left">
                <h2 className="text-center">Add new Food</h2>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                        <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                        <input className="w-full form-input border rounded-lg input-lg" name="name" onChange={(e) => setName(e.target.value)} type="text" value={name} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                        <label className="block mb-1 font-medium" htmlFor="image">Image</label>
                        <input className="w-full form-input border rounded-lg input-lg" name="image" onChange={(e) => setImage(e.target.value)} type="text" value={image} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                        <label className="block mb-1 font-medium" htmlFor="calories">Calories</label>
                        <input className="w-full form-input border rounded-lg input-lg" name="calories" onChange={(e) => setCalories(e.target.value)} type="number" min={0} value={calories} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                        <label className="block mb-1 font-medium" htmlFor="servings">Servings</label>
                        <input className="w-full form-input border rounded-lg input-lg" name="servings" onChange={(e) => setServings(e.target.value)} type="number" min={0} value={servings} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <input className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600" type="submit" onClick={(e) => onSubmit(e, { name, image, calories, servings })} value={'Create'} />
                </div>
            </form>
        </dialog>
        
        </>
    );
}