import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import axios from axios;
// import { toast } from 'react-toastify';


const initialState = {
    title: "",
    description: "",
    category: "",
    imageUrl: ""
};
const options = ["Hotels", "Travel", "Resturants", "Foods", "LifeStyle"];


const AddEditBlog = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [setCategoryErrMsg] = useState(null);
    const {title, description, category} = formValue;

    const navigate = useNavigate();

    const handleSubmit = (e) => {};

    const inputChange = (e) => {};

   

    const onCategoryChange = () => {};


    return (
        <>
            <div className="addEditBlog my-5 m-auto w-50">
                <div className="container">
                    <div className="addEditForm">
                        <h3>Add Edit Form</h3>
                        <form onSubmit={handleSubmit}>
                        
                            <input type="text" name="title" 
                            validation = "Please Enter Title"
                            className="form-control mt-2"
                            value = {title || ""}
                            onChange = {inputChange} />

                            <input type="text" name="description"
                            className="form-control mt-2" 
                            validation = "Please Enter Description"
                            value = {description || ""}
                            onChange = {inputChange}
                            rows={4} />

                            <select className="category custom-select form-control" onChange={onCategoryChange} value={category}>
                                <option>PLease Select Category</option>
                                {options.map((option, index) =>(
                                    <option value ={option || ""} key={index}>
                                        {option}
                                    </option>
                                ))}
                                {/* <option>Hotels</option>
                                <option>Travel</option>
                                <option>Resturants</option>
                                <option>Foods</option>
                                <option>LifeStyle</option> */}
                            </select>

                            <button type="submit" className="btn btn-primary mt-2">Add</button> 
                            <button type="submit" className="btn btn-info mt-2" onClick={() => navigate("/")}>Go Back</button>                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default AddEditBlog;