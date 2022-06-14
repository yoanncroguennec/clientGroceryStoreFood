import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// ROUTES
import Sidebar from "../../routes/Sidebar";
import Navbar from "../../routes/Navbar";
// ICONS
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";




export default function NewUser({ inputs, title }) {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    // Crée un objet "FormData" vide
    const data = new FormData();
    // Ajoute un couple "clé/valeur" en utilisant "FormData.append"
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dky2vpnyr/image/upload/",
        data
      );
      console.log(uploadRes.data);

      // Déstructuration en stockant dans la Variable "url"
      const { url } = uploadRes.data;

      // "info" + "url" afin de mettre à jour
      const newUser = {
        ...info,
        img: url,
      };

      // On fait une requête en passant la variable "newUser" & on redirige vers la page "users"
      await axios.post("/products", newUser);
      // await axios.post("/auth/register", newUser);
      navigate("/users");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(info);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter un nouveau Utilisateur</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  // "URL.createObjectURL() crée une chaîne contenant une URL représentant l’objet passé en paramètre. La durée de vie de l’URL est liée au document de la fenêtre depuis laquelle elle a été créée. La nouvelle URL d’objet représente l’objet File ou Blob spécifié. 
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Administrateur :</label>
                <select id="isAdmin" onChange={handleChange}>
                  <option value={false}>Non</option>
                  <option value={true}>Oui</option>
                </select>
              </div>

              <button onClick={handleClick}>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
