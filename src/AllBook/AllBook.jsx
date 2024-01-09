import { Link } from "react-router-dom";


const AllBook = (props) => {
    const {Name,Price,Type,image_url}=props.country
    return (
        <div>
             <div className="card card-compact  rounded-md  w-auto bg-base-100 shadow-xl">
  <figure><img className="py-5 border-2 rounded-2xl my-2" src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Name}</h2>
    <h6>Price: {Price}</h6>
    <p>Type: {Type}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">  <Link  className='no-underline' to='/Book'>Book</Link></button>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default AllBook;