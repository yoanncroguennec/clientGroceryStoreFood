import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// DATA
import { productInputs } from "../../data/dataFormsInputs";
// HOOKS
import useFetch from "../../utils/hooks/useFetch";
// ICONS
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";




const NewProduct = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});

  const { data, loading, error } = useFetch("products/countByType");
  // console.log(data)


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate()

  console.log(files)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/lamadev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newproduct = {
        ...info,
        photos: list,
      };

      await axios.post("/products", newproduct);
      navigate("/products");
    } catch (err) {console.log(err)}
  };
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Ajouter un nouveau Produit</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {productInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Par unité :</label>
                <select id="unit" onChange={handleChange}>
                  <option value={false}>unité</option>
                  <option value={true}>kg</option>
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
