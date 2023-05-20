import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToy = () => {
    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/allToys?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, []);

    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/allToys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('Delete Successfully');
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining)
                }
            })
        }
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
            
                <thead>
                    <tr>
                        <th>picture</th>
                        <th>seller</th>
                        <th>email</th>
                        <th>toy_name</th>
                        <th>sub_category</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>rating</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                
                   {
                    myToys.map(myToy => <MyToyRow
                    key={myToy._id}
                    myToy={myToy}
                    handleDelete={handleDelete}></MyToyRow>)
                   }
                </tbody>

            </table>
        </div>
    );
};

export default MyToy;