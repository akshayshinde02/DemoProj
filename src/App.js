import AddOnModel from "./rentalreview/AddOnModel";
import ProgressBar from "./rental/ProgressBar";
import TruckServices from "./rental/TruckServices";
import UserRegistration from "./user/UserRegistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DropUpTime from './rental/DropUpTime'
import Review from "./reviews/Review";
import EditReservation from "./editreservation/EditReservation";
import Navbar from "./rental/Navbar";
import MuiStepper from "./steper/MuiStepper";

// AddOn's Export
// import LaborPickUp from "./addons/addon-pages/Pickup&dropoff/LaborPickUp";
import LaborPickUp from './addOns/addon-pages/Pickup&dropoff/LaborPickUp';
import PickUp_list from "./addOns/addon-pages/Pickup&dropoff/PickUp_list";
import CarAddOn from "./addOns/addon-pages/CarAddOn";
import Towing from "./addOns/addon-pages/Towing";
import Trailer from "./addOns/addon-pages/Trailer";
import TruckRender from "./landingpage/TruckRender";
import  Home from "./home1/Home";
import Context from "./Context";

function App() {
  return (<>
    
   {/* <AddOnCard title="Truck Add On's" description=" trucks Addon's for rent." /> */}
   {/* <TruckServices/> */}
   {/* <ProgressBar/> */}
   {/* <UserRegistration/> */}

 
    <BrowserRouter>
    <Context>
    {/* <MuiStepper></MuiStepper> */}
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/rendar" element={<TruckRender/>}></Route>
        <Route path="/service" exact element={<TruckServices />}/>
        <Route path="/edit" exact element={<EditReservation />}/>
        <Route path="/dropuptime" exact element={<DropUpTime />}/>
        <Route path="/addon" exact element={<AddOnModel />}/>
        <Route path="/registration" exact element={<UserRegistration />} />

        {/* Add- On's */}
        <Route path="/laborpickup" exact element={<LaborPickUp />} />
        <Route path="/pickuplist" exact element={<PickUp_list />} />
        <Route path="/caraddon" exact element={<CarAddOn />} />
        <Route path="/towing" exact element={<Towing />} />
        <Route path="/trailer" exact element={<Trailer />} />

       
      </Routes>
      </Context>
    </BrowserRouter>
   </>
  );
}



export default App;
