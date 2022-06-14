import React from 'react'
// ROUTES
import Sidebar from "../routes/Sidebar"
// DATA
import Datatable from "../components/Datatable"


export default function List({columns}) {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable columns={columns} />
      </div>
    </div>
  )
}
