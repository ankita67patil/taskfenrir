import { useState } from "react"
import {FiHome,FiFolder,FiSearch,FiCalendar,FiBell,FiSettings,FiHelpCircle,FiFilter,FiColumns,FiMenu,FiX} from "react-icons/fi"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

const navigate = useNavigate()

const [isOpen, setIsOpen] = useState(false)


const scans = [

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},

{
name: "Web App Servers",
type: "Greybox",
status: "Completed",
progress: 100,
vuln: [5,12,23,18],
last: "4d ago"
},


{
name: "Web App Servers",
type: "Greybox",
status: "Scheduled",
progress: 100,
vuln: [0, 5, 12, 0],
last: "4d ago"
},


{
name: "Web App Servers",
type: "Greybox",
status: "Scheduled",
progress: 100,
vuln: [0, 5, 12, 0],
last: "4d ago"
},

{
name: "IoT Devices",
type: "Blackbox",
status: "Failed",
progress: 10,
vuln: [2,4,8,1],
last: "3d ago"
},

{
name: "Temp Data",
type: "Blackbox",
status: "Failed",
progress: 10,
vuln: [2,4,8,1],
last: "3d ago"
}

]



return (
  

<div className="flex min-h-screen bg-gray-100">

  <button
    onClick={() => setIsOpen(true)}
    className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
  >
    <FiMenu size={22} />
  </button>


  {isOpen && (
    <div
      className="fixed inset-0 bg-black/40 z-40 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  )}

      
<>
 
  <div className="hidden md:flex flex-col justify-between w-64 bg-white shadow-md">
    <div>
      <h2 className="text-xl font-bold p-6 text-teal-600">aps</h2>

      <nav className="flex flex-col gap-2">
        <SidebarItem icon={<FiHome />} text="Dashboard" active />
        <SidebarItem icon={<FiFolder />} text="Projects" />
        <SidebarItem icon={<FiSearch />} text="Scans" />
        <SidebarItem icon={<FiCalendar />} text="Schedule" />

        <div className="border-t my-4"></div>

        <SidebarItem icon={<FiBell />} text="Notifications" />
        <SidebarItem icon={<FiSettings />} text="Settings" />
        <SidebarItem icon={<FiHelpCircle />} text="Support" />
      </nav>
    </div>

    <div className="p-4 border-t flex items-center gap-3">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-700">
          admin@edu.com
        </p>
        <p className="text-xs text-gray-400">Security Lead</p>
      </div>
    </div>
  </div>

  
  <div
  className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-50 transform transition-transform duration-300 md:hidden
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  <div className="flex flex-col justify-between h-full">

    <div>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold text-teal-600">aps</h2>
        <FiX
          size={22}
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        <SidebarItem icon={<FiHome />} text="Dashboard" active />
        <SidebarItem icon={<FiFolder />} text="Projects" />
        <SidebarItem icon={<FiSearch />} text="Scans" />
        <SidebarItem icon={<FiCalendar />} text="Schedule" />

        <div className="border-t my-4"></div>

        <SidebarItem icon={<FiBell />} text="Notifications" />
        <SidebarItem icon={<FiSettings />} text="Settings" />
        <SidebarItem icon={<FiHelpCircle />} text="Support" />
      </nav>
    </div>

    {/* Bottom User Info (NOW visible on mobile) */}
    <div className="p-4 border-t flex items-center gap-3">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-700">
          admin@edu.com
        </p>
        <p className="text-xs text-gray-400">Security Lead</p>
      </div>
    </div>

  </div>
</div>
</>


  <div className="flex-1 p-4 md:p-6">

    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

      <h2 className="text-lg md:text-xl font-semibold">
        Scan / Private Assets / <span className="text-teal-600">New Scan</span>
      </h2>

      <div className="flex flex-wrap gap-2">
        <button className="border px-4 py-2 rounded-lg">
          Export Report
        </button>

        <button className="border border-red-300 text-red-500 px-4 py-2 rounded-lg">
          Stop Scan
        </button>
      </div>

    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
      <Card title="Critical Severity" number="86" color="red"/>
      <Card title="High Severity" number="16" color="orange"/>
      <Card title="Medium Severity" number="26" color="yellow"/>
      <Card title="Low Severity" number="16" color="blue"/>
    </div>


    <div className="bg-white rounded-xl p-4 shadow overflow-x-auto">

      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">

        <div className="relative w-full lg:w-[500px]">
          <FiSearch className="absolute left-3 top-3 text-gray-400"/>

          <input
            placeholder="Search scans by name or type..."
            className="border w-full pl-10 py-2 rounded-lg"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="border px-3 py-2 rounded-lg flex items-center gap-2">
            <FiFilter/> Filter
          </button>

          <button className="border px-3 py-2 rounded-lg flex items-center gap-2">
            <FiColumns/> Column
          </button>

          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
            + New scan
          </button>
        </div>

      </div>


      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">

          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Scan Name</th>
              <th className="text-left">Type</th>
              <th className="text-left">Status</th>
              <th className="text-left">Progress</th>
              <th className="text-left">Vulnerability</th>
              <th className="text-left">Last Scan</th>
            </tr>
          </thead>

          <tbody>
            {scans.map((scan,i)=>(
              <tr
                key={i}
                onClick={() => navigate(`/scan/${i}`)}
                className="cursor-pointer hover:bg-gray-50"
              >

                <td className="py-3">{scan.name}</td>
                <td>{scan.type}</td>

                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs">
                    {scan.status}
                  </span>
                </td>

                <td className="w-60">
                  <div className="flex items-center gap-2">

                    <div className="w-32 md:w-40 h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-teal-500 rounded"
                        style={{width:`${scan.progress}%`}}
                      ></div>
                    </div>

                    <span>{scan.progress}%</span>

                  </div>
                </td>

                <td>
                  <div className="flex gap-1 flex-wrap">
                    <span className="bg-red-500 text-white px-2 rounded text-xs">{scan.vuln[0]}</span>
                    <span className="bg-orange-500 text-white px-2 rounded text-xs">{scan.vuln[1]}</span>
                    <span className="bg-yellow-500 text-white px-2 rounded text-xs">{scan.vuln[2]}</span>
                    <span className="bg-green-500 text-white px-2 rounded text-xs">{scan.vuln[3]}</span>
                  </div>
                </td>

                <td>{scan.last}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>

  </div>

</div>

)

}

function SidebarItem({icon,text,active}){

return(

<div
className={`flex items-center gap-3 px-6 py-3 cursor-pointer
${active ? "bg-teal-100 text-teal-600 rounded-l-full" : "text-gray-600"}
`}> {icon}{text}</div>

)

}

function Card({title,number}){

return(

<div className="bg-white p-4 rounded-xl shadow">

<p className="text-gray-500 text-sm">{title}</p>

<h2 className="text-2xl font-bold mt-2">{number}</h2>

<p className="text-red-500 text-xs mt-1">
↑ +2% increase than yesterday
</p>

</div>

)

}