export const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "Photo",
    width: 50,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
        </div>
      );
    },    
  },  
  {
    field: "username",
    headerName: "Prénom",
    width: 100,
  },
  {
    field: "lastname",
    headerName: "Nom de Famille",
    width: 100,
  },  
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Adresse",
    width: 150,
  },
  {
    field: "postal_code",
    headerName: "Code Postale",
    width: 100,
  },  
  {
    field: "city",
    headerName: "Ville",
    width: 150,
  },
  {
    field: "country",
    headerName: "Pays",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Téléphone",
    width: 150,
  },
  {
    field: "isAdmin",
    headerName: "Administrateur",
    width: 150,
  },  
];


export const productColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "photo",
    width: 50,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="photo" />
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Nom du produit",
    width: 150,
  },

  {
    field: "brand",
    headerName: "Marque",
    width: 100,
  },
  {
    field: "type",
    headerName: "Caégorie",
    width: 150,
  },
  {
    field: "",
    headerName: "Prix",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          {params.row.price} € / {params.row.unit}
        </>
      );
    },
  },  
];
