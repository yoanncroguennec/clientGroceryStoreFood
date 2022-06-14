import React from 'react'
// COMPONENTS
import Widget from "../components/home/widget/Widget";
import Featured from "../components/home/Featured";
import Chart from "../components/home/Chart";
import Table from "../components/home/Table";
// HOOKS
import useFetch from '../../client/utils/hooks/useFetch';
// ROUTES
import Navbar from "../routes/Navbar";
import Sidebar from "../routes/Sidebar";




export default function HomeAdmin() {

  // const [data, loading, error] = useFetch("/users");
  // console.log(data);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="6 derniers mois (revenus)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Dernières transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}
