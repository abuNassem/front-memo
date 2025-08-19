import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const Feature = () => {
  return (
    <div className='my-[100px]'>
      <Typography sx={{ textAlign: 'center', my: 2, fontSize: '20px' }}>Features</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Large Column */}

        <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} className="bg-zinc-500 duration-[0.5s] hover:bg-zinc-600 text-white max-h-[350px] flex flex-col justify-start items-center p-3 rounded-xl row-span-2">
          <img src="/fast-delivery.png" alt="Fast Delivery" className="w-full h-32 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Fast Shipping</h2>
          <p className="text-center mb-4">We deliver your product as quickly as possible.</p>
          <Link to={'/product'}>
            <button className="bg-zinc-800 hover:bg-zinc-600 duration-[0.5s] text-zinc-100 px-4 py-1 rounded-full cursor-pointer">
              Order now
            </button>
          </Link>
        </motion.div>

        {/* Small Column 1 */}
        <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} className="bg-zinc-500/50 duration-[0.5s] hover:bg-zinc-500 text-white max-h-[150px] flex flex-col justify-start items-center p-6 rounded-xl">
          <img src="/secure-payment.png" alt="Secure Payment" className="w-[50%] h-[70%] mb-4" />
          <h2 className="text-xl font-bold mb-2">Secure Payment</h2>
          <p className="text-center">100% safe and protected payment methods.</p>
        </motion.div>

        {/* Small Column 2 */}
        <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} className="bg-zinc-500 duration-[0.5s] bg-zinc-600 text-white flex flex-col justify-center items-center p-6 rounded-xl">
          <img src="/high-quality.png" alt="High Quality" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">High Quality</h2>
          <p className="text-center">Authentic products with trusted quality.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Feature
