import React,{useState,useEffect} from "react";
import "../Dashboard.css";
import io from "socket.io-client"
import { Link } from "react-router-dom";

const socket = io.connect("http://localhost:3001");



const Card = ({ img, name, rating, location, status, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="user" />
      <h4>{name}</h4>
      <p>{rating}⭐</p>
      <div className="per">
        <table>
          <tr>
            <td><span>{location.pick}</span></td>
            <td><span>{location.drop}</span></td>
          </tr>
          <tr>
            <td>{status.pick}</td>
            <td>{status.drop}</td>
          </tr>
        </table>
      </div>
      <button onClick={acceptRequest}>Accept for ₹100</button>
    </div>
  );
};

function acceptRequest(){
  console.log("clicking yaya")
  socket.emit("send_data",{
    name: "Driver",
    rating: "4.7",
    position: [28.527650, 77.372254]
  });
}

const RequestCard = ({ data, acceptRequest }) => {
  return (
    <Card
      img ={process.env.PUBLIC_URL + '/man.jpg'}
      name={data.name}
      rating={data.rating}
      location={data.location}
      status={data.status}
      onClick={acceptRequest}
    />
  );
};

const requestsData = [
  {
    name: "Sam David",
    rating: "4.8",
    location: { pick: "India Gate", drop: "Rajiv Chowk" },
    status: { pick: "Pick", drop: "Drop" },
  },
  {
    name: "Balbina kherr",
    rating: "4.9",
    location: { pick: "India Gate", drop: "Rajiv Chowk" },
    status: { pick: "Pick", drop: "Drop" },
  },
  // {
  //   name: "Badan John",
  //   rating: "5.0",
  //   location: { pick: "India Gate", drop: "Rajiv Chowk" },
  //   status: { pick: "Pick", drop: "Drop" },
  // },
  // {
  //   name: "Salina michea",
  //   rating: "4.7",
  //   location: { pick: "India Gate", drop: "Rajiv Chowk" },
  //   status: { pick: "Pick", drop: "Drop" },
  // }
  // More data objects...
];

const AttendanceTable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Depart</th>
          <th>Date</th>
          <th>Pickup Time</th>
          <th>Destination</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.depart}</td>
            <td>{item.date}</td>
            <td>{item.pickupTime}</td>
            <td>{item.destination}</td>
            <td>
              <button>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const attendanceData = [
  {
    id: "01",
    name: "Sam David",
    depart: "Kalkaji Mandir Station",
    date: "03-24-22",
    pickupTime: "8:00PM",
    destination: "Fortis Hospital",
  },
  {
    id: "02",
    name: "Sam David",
    depart: "Kalkaji Mandir Station",
    date: "03-24-22",
    pickupTime: "8:00PM",
    destination: "Fortis Hospital",
  },
  {
    id: "03",
    name: "Sam David",
    depart: "Kalkaji Mandir Station",
    date: "03-24-22",
    pickupTime: "8:00PM",
    destination: "Fortis Hospital",
  },
  {
    id: "04",
    name: "Sam David",
    depart: "Kalkaji Mandir Station",
    date: "03-24-22",
    pickupTime: "8:00PM",
    destination: "Fortis Hospital",
  },
  {
    id: "05",
    name: "Sam David",
    depart: "Kalkaji Mandir Station",
    date: "03-24-22",
    pickupTime: "8:00PM",
    destination: "Fortis Hospital",
  }
  // More data objects...
];

const MainSection = () => {
  const [requests, setRequests] = useState(requestsData);

  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      const updatedRequests = [...requests, data];
      console.log("data: ", data);
      console.log("requests all: ", updatedRequests);
      setRequests(updatedRequests);
    })
  },[socket])

  return (
    <section className="main">
      <div className="main-top">
        <h1>Requests NearBy</h1>
      </div>
      <div className="users">
        {requests.map((data, index) => (
          <RequestCard key={index} data={data} onClick={acceptRequest} />
        ))}
      </div>
      <div className="attendance-list">
        <h1>Advance Booking</h1>
        <AttendanceTable data={attendanceData} />
      </div>
    </section>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MainSection />
    </div>
  );
};

export default Dashboard;