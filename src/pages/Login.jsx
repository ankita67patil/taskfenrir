import { FaApple, FaGoogle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { SiMeta } from "react-icons/si"
import { useState } from "react"

function Login() {

const navigate = useNavigate()

const [showPassword,setShowPassword] = useState(false)

return (

<div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10"
style={{ backgroundImage: "url('/bg.png')" }}>

<h1 className="absolute top-6 left-8 text-2xl font-bold text-teal-300">
aps
</h1>

<div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10 lg:gap-20">


<div className="relative flex flex-col justify-start lg:w-1/2 pt-16">

<h2 className="text-3xl text-white lg:text-4xl font-bold mt-2 mb-4">
  Expert level Cybersecurity <br />
  in <span className="text-teal-400">hours</span> not weeks
</h2>

<h4 className="text-white">What's included</h4>

<h5 className="text-white">✅ Effortlessly spider and map targets to uncover hidden security flaws</h5>
<h5 className="text-white">✅ Deliver high-quality, validated findings in hours, not weeks.</h5>
<h5 className="text-white mb-12">✅ Generate professional, enterprise-grade security reports automatically.</h5>


<div className="flex items-center gap-2 mt-24 mb-2">
<span className="text-teal-400 text-xl">★</span>
<span className="font-semibold text-white">Trustpilot</span>
</div>

<p className="text-white mt-2 text-xl font-bold">
Rated 4.5 / 5.0 <span className="text-gray-600 text-sm">(100k+ reviews)</span>
</p>

</div>




<div className="bg-white shadow-xl rounded-2xl p-6 lg:p-8 w-full lg:w-1/2 max-w-md mx-auto">

<h2 className="text-2xl font-semibold mb-2">
Sign Up
</h2>



<p className="text-sm text-gray-500 mb-6">
Already have an account?
<span className="text-teal-500 ml-1 cursor-pointer">
Log in
</span>
</p>

<form className="space-y-4">

<input
type="text"
placeholder="First Name*"
className="w-full border rounded-lg px-3 py-2"
required
/>

<input
type="text"
placeholder="Last Name*"
className="w-full border rounded-lg px-3 py-2"
required
/>

<input
type="email"
placeholder="Email*"
className="w-full border rounded-lg px-3 py-2"
required
/>



<div className="relative">

<input
type={showPassword ? "text" : "password"}
placeholder="Password*"
className="w-full border rounded-lg px-3 py-2"
required
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-3 top-2"
>
👁
</button>



</div>


<div className="flex gap-2 text-sm">

<input type="checkbox"/>

<p>
I agree to APS Terms and Conditions and acknowledge the Privacy Policy
</p>

</div>

<button className="w-full bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600">
Create Account
</button>

<div className="mt-2 flex gap-4 justify-between">

<button className="flex-1 h-12 bg-black text-white rounded-full flex items-center justify-center">
      <FaApple size={30} />
</button>


<button className="flex-1 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">

<img 
src="https://www.svgrepo.com/show/475656/google-color.svg" 
alt="Google"
className="w-6 h-6"
/>

</button>


<button className="flex-1 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
  <SiMeta size={30} />
</button>

</div>

</form>

</div>

</div>

</div>

)

}

export default Login