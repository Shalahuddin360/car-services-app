import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    console.log(service)
    const { _id, title, price,img} = service
    // console.log(service)
    const { user } = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const bookings = {
            customerName : name,
            email,
            img,
            date,
            service : title,
            service_id: _id,
            price: price
        }

    //   console.log(order)
    fetch('http://localhost:5000/bookings',{
        method :'POST',
        headers : {
            'content-type':'application/json',
        },
        body:JSON.stringify(bookings)

    })

    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    }
    return (
        <div>
            <h2 className="text-3xl text-center">Book Service : {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name : </span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Enter Your Name :" className="input input-bordered read-only:" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" defaultValue={user?.email} name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default BookService;