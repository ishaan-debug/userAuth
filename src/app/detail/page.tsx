"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function DetailPage(){
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const userDetail = async () => {
        try {
            console.log("Hello")
            router.push("/profile");
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    const [formData, setFormData] = useState({
        address: '',
        age: '',
        experience: '',
        education: '',
        skills: '',
      });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const handleSubmit = () =>{
        const handleSubmit = (e:any) => {
            e.preventDefault();
            // You can send the formData to your server here
            console.log('Form data submitted:', formData);
          };
    }
    return (
        <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
    )
}
