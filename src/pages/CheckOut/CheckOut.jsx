import { useLoaderData } from "react-router-dom";
const CheckOut = () => {
    const service = useLoaderData();
    const { title , price } = service
    console.log(service)

    return (
        <div>
            <h2 className="text-3xl text-center">Book Service : {title}</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name : </span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name :" className="input input-bordered" />
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
                        <input type="text" placeholder="Enter Your Email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button >Login</button>
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>

    );
};

export default CheckOut;