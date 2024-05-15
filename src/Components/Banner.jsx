

const Banner = () => {
    return (
        <div className="">
            {/* <p className=""> hi this is banner </p> */}
            {/* <img className="w-full  h-96 " src="https://i.ibb.co/sqzhjXJ/premium-photo-1667775650592-d811205ed595.jpg" alt="" /> */}
 
        
            <div 
               className="text-center"                 
            style={{ 
            width:'full',
            height: '384px',
            
            backgroundImage:`url('https://i.ibb.co/GxTgz4F/first-bg-2.jpg')`,
            backgroundSize:'cover' 
            }}  >


            <h1 className="text-center font-bold text-6xl text-cyan-50    pt-10">Cheers to love! Join us in honoring another year of cherished memories and endless love. </h1>
            
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... self-center mt-10  ">Explore Now!</button>
            </div>
        </div>
    );
};

export default Banner;