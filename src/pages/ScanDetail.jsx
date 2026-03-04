import React, { useState } from "react";
import {FiHome,FiFolder,FiSearch,FiCalendar,FiBell,FiSettings,FiHelpCircle,FiFilter,FiColumns,FiMenu,FiX} from "react-icons/fi"


function ScanDetail() {
  const [isOpen, setIsOpen] = useState(false)

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
    

      
        <div className="p-4 overflow-auto">
     
<div className="bg-white p-6 rounded-xl shadow-sm">

  <div className="flex flex-col lg:flex-row gap-8 items-center">

    <div className="flex items-center gap-6">
      
      <div className="w-28 h-28 rounded-full bg-slate-900 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-teal-400">0%</span>
        <span className="text-xs text-gray-300">In Progress</span>
      </div>

    
      <div className="hidden lg:block h-24 w-px bg-gray-300"></div>

    </div>

   
    <div className="flex-1 w-full">

     
      <div className="relative flex justify-between items-center mb-6">

        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300 -z-10"></div>

       
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-md">
            🔍
          </div>
          <p className="text-sm mt-2 font-medium">Spiderring</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            🗺️
          </div>
          <p className="text-sm mt-2 text-gray-500">Mapping</p>
        </div>

      
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            🧪
          </div>
          <p className="text-sm mt-2 text-gray-500">Testing</p>
        </div>

        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            ✔ 
          </div>
          <p className="text-sm mt-2 text-gray-500">Validating</p>
        </div>
        
      
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            📄
          </div>
          <p className="text-sm mt-2 text-gray-500">Reporting</p>
        </div>

      </div>

   
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm border-t pt-4">

        <div>
          <p className="text-gray-500">Scan Type</p>
          <p className="font-medium">Grey Box</p>
        </div>

        <div>
          <p className="text-gray-500">Targets</p>
          <p className="font-medium">google.com</p>
        </div>

        <div>
          <p className="text-gray-500">Started At</p>
          <p className="font-medium">Nov 22, 09:00AM</p>
        </div>

        <div>
          <p className="text-gray-500">Credentials</p>
          <p className="font-medium">2 Active</p>
        </div>

        <div>
          <p className="text-gray-500">Files</p>
          <p className="font-medium">Control.pdf</p>
        </div>

        <div>
          <p className="text-gray-500">Checklists</p>
          <p className="font-medium text-teal-600">40/350</p>
        </div>

      </div>

    </div>

  </div>

</div>

     

         
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">

           
            <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold mb-4">Live Scan Console<span className="ml-10 px-2 py-1 rounded-xl bg-gray-400 text-white text-sm">🕛Running</span></h3>
            <div className="bg-gray-50 rounded-lg p-5  text-xs sm:text-xs md:text-sm font-mono space-y-3 leading-relaxed break-words">
            <h3 className="font-semibold mb-4 text-teal-300">Activity Log<span className="ml-10 px-2 py-1 text-gray-300 text-sm">Verifictaion Loops </span></h3>
            <hr className="border-t border-gray-300 my-4" />
              <p><span className="text-gray-300">[09:00:00]</span> begin a systematic penetration test on <span className="text-teal-500">helpdesk.democorp.com.</span> Let me start with reconnaissance and enumeration.</p>
              <p><span className="text-gray-300">[09:01:00]</span> Good! target is online. Now let me perform port scanning to identify running services.</p>
              <p><span className="text-gray-300">[09:02:00]</span> Excellent reconnaissance results:</p>
              <p className="text-gray-300"> <span className="text-black font-bold">|</span>   - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)</p>
              <p>Let me probe the web server on target first to understand its structure.</p>
              <p><span className="text-gray-300">[09:03:00]</span> Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span className="text-teal-300">"TODO: Delete the testing account (test:test)"</span>. Let me test this credential. The login redirects to <span className="inline-block bg-black text-white px-2 py-1 rounded-2xl font-bold text-sm"> /password/test</span>. Let me follow that path and explore it. </p>
              <p><span className="text-gray-300">[09:04:00]</span>The POST method not allowed on /password/test. Let me check what Javscript does - it posts to <span className="text-teal-300">'#'</span> which means the correct page.
              Let me try different approach.</p>
              <p><span className="text-gray-300">[09:05:00]</span>It redirects to /password/test. Let me check if there's an /api endpoint or look for other paths.
              Let me also try to exploring with <span className="text-teal-300">test:test</span> password directly on other endpoints.</p>
              <p><span className="text-gray-300">[09:06:00]</span>Great! I can access dashboard using <span className="text-teal-300">'X-UserId: 10032'</span> header. The dashboard shows
              "Welcome, John Doe". This suggests an <span className="text-red-600">**IDOR vulnerability</span> - I can access any user's dashboard by just changing the X-UserId header.
                Let me explore more of the application...</p>

            </div>
          </div>

           
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h2 className="font-semibold mb-4">Finding Log</h2>

              <div className="space-y-3">

                <div className="p-3  rounded-2xl border border-gray-200">
                 <p className="inline-block px-3 py-1 text-white rounded-2xl font-semibold text-sm bg-red-600">Critical</p>

                  <p className="text-sm font-medium">
                    SQL Injection in Authentication Endpoint
                  </p>
                  <p className="text-teal-300 text-sm">/api/users/profile</p>
                  <h6 className="text-gray-300 text-sm">Time-based blind SQL injectionconfirmed on user-controlled input during authentication flow. Exploitation allows database level access. </h6>

                </div>

                <div className="p-3 rounded-2xl border border-gray-200">
                  <p className="text-white font-semibold rounded-2xl inline-block px-3 py-1 text-sm bg-orange-600">High</p>
                  <p className="text-sm font-medium">
                    Unauthorized Access to Metadata
                  </p>
                   <p className="text-teal-300 text-sm">/api/auth/login</p>
                   <h6 className="text-gray-300 text-sm">Authenticated low-privilege user was able to access metadata of other users. Access control checks where missing.</h6>
                </div>

                <div className="p-3 rounded-2xl border border-gray-200">
                  <p className="text-white font-semibold rounded-2xl inline-block px-3 py-1 text-sm bg-yellow-500">Medium</p>
                  <p className="text-sm font-medium">
                    Broken Rate Limiting
                  </p>
                   <p className="text-teal-300 text-sm">/api/search</p>
                  <h6 className="text-gray-300 text-sm">No effective rate limiting detected on login attempts. Automated brute- force attempts possible.</h6>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-6 py-2 cursor-pointer 
      ${active ? "text-teal-600 font-semibold" : "text-gray-600 hover:text-teal-500"}`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}


export default ScanDetail;
