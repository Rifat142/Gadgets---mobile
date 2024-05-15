


import Banner from "../Components/Banner";
import CardData from "../Components/CardData";
import ClintComment from "../Components/ClientComment";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";



const Home = () => {
    return (
        <div className="bg-slate-200 ">
            <Navbar></Navbar>
                <br />
            <Banner></Banner>
            <br />
            <Welcome></Welcome>
             
            <CardData></CardData>
            <ClintComment></ClintComment>
            
            <Footer></Footer>
           
            </div>
    );
};

export default Home;