import "./admin.css"

import { useState, } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [data, setData] = useState({ title: '', author: '', price1: '',price2: '', aboutbook: '', Hardback: '', Paperback: '' })
    const [reset, setReset] = useState('')
    const [file, setFile] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    // navigation
    const navanotherpage = () => {
        navigate("/list")
    }

    //   title, author,price
    const handlechange = (e) => {
        const { name, value } = e.target;
    //     const regex =/^[a-zA-Z0-9](?!.*--)[a-zA-Z0-9-]*[a-zA-Z0-9]$/g;
    
    //   const prevs =   value.match(regex);
        setData((prev) => {
            return { ...prev, [name]: value  }
           
        })
        
       
        
    }
    // checkbox
    const handlecheck = (e) => {
        const { checked, value } = e.target;
        setChecked(!checked);
        console.log(checked, value)
    }
    // category
    const getInitialState = () => {
        const value = "Select the Category";
        return value;
    };
    const [value, setValue] = useState(getInitialState);
    const seletedoption = (e) => {
        setValue(e.target.value);
    }
    
    // bookimage
    const handleimgchange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    // form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Once the form has been submitted, this function will post to the backend
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('author', data.author);
        formData.append('Category', value);
        formData.append('Hardback',data.Hardback)
        formData.append('price1', data.price1);
        formData.append('Paperback',data.Paperback)
        formData.append('price2',data.price2)
        formData.append('aboutbook', data.aboutbook);
       
        formData.append('file', file);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post("http://localhost:6688/api/lynas/addproduct",formData, config)
            .then(res => {
                console.log(res.data);
                console.log(formData);
            })
    }
    console.log(data)
    console.log(value)

    return (<>
    
        {/* bOOK information  start details */}
        
        <div className="header">
        <h1 className="headingin">Lynas Publications</h1>
            <button type="button"> Dashboard</button>
            <button type="button" onClick={navanotherpage}> Add book list</button>

        </div>
        <section className="sign" id="sign">
            <div className="personal-form-header">
                <h1 className="headingin"> Lynas Admin Portal</h1>
                <h3>New Book Release To Update On Live Server</h3>
            </div>
            <form  onSubmit={handleSubmit} method="get" className="personal-form" >
                <div className="form-row">
                    <label >Title</label>
                    <input name="title" type="text" value={data.title} onChange={handlechange} placeholder="Please Enter your Title" />
                </div>
                <div className="form-row">
                    <label >Author</label>
                    <input name="author" type="text" value={data.author} onChange={handlechange} placeholder="Please Enter your author" />
                </div>
                <div className="form-row">
                    <label >Book Image</label>
                    <div className="Image">Drop here book image
                        <input className="ChoosdImage" type="file" name="file" value={data.bookimg} onChange={handleimgchange} /></div>
                </div>

                <div className="form-row">
                    <label >ISBN Hardback </label>
                    <input name="Hardback" type="text" value={data.Hardback } placeholder=" 978-91-88364-33-3" onChange={handlechange} />
                </div>

                <div className="form-row">
                    <label >Price</label>
                    <input name="price1"  type="number" value={data.price1} placeholder="$13.45" onChange={handlechange} />
                </div>
                <div className="form-row">
                    <label >ISBN Paperback </label>
                    <input name="Paperback" type="text" value={data.Paperback } placeholder="978-91-8833-8" onChange={handlechange} />
                </div>
                <div className="form-row">
                    <label >Price</label>
                    <input name="price2"  type="number" value={data.price2} placeholder="$14.95" onChange={handlechange} />
                </div>

                <div className="form-row">
                    <label >Category </label>
                    <select name="choosed" value={value} onChange={seletedoption}>
                    <option value="Select the Category">Select the Category </option>
                        <option value="Biography">Biography </option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Literary Collections">Literary Collections </option>
                        <option value="English Classics">English Classics</option>
                        <option value="Fiction, Novels, and Short stories">Fiction, Novels, and Short stories</option>
                        <option value="Health, Fitness & Motivation">Health, Fitness & Motivation</option>
                        <option value="Social Science">Social Science</option>
                        <option value="Physical Science">Physical Science</option>
                        <option value="Life Science">Life Science</option>
                    </select>
                </div>

                <div className="form-row">
                    <label >About This Book</label>
                    <textarea name="aboutbook" value={data.aboutbook} onChange={handlechange} placeholder="About this Book ..."></textarea>
                </div>

                <div className="form-rows">
                    <label className="checkbox-label" >
                        <input id="available" name="available" type="checkbox" value="true" onChange={handlecheck} />
                    </label>
                </div>
                
                <span>I’m here by</span>
                <div className="form-rows">
                    {/* <Link to="/list"> */}
                    <button type="submit" >Add book</button>
                    {/* </Link> */}
                </div>

            </form>
        </section>

    </>)
}
export default Admin