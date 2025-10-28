import { NavLink } from 'react-router-dom';

const GetStarted = () => (
     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-5xl font-bold text-gray-800 mb-6">Start Verifying Today</h1>
               <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    Upload any document, get instant blockchain certification, and share tamper-proof links. No more fakes.
               </p>

               {/* Steps Grid */}
               <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                         <h3 className="text-3xl font-semibold mb-2">1. Upload</h3>
                         <p className="text-gray-600">Drag & drop PDFs, images, contracts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                         <h3 className="text-3xl font-semibold mb-2">2. Verify</h3>
                         <p className="text-gray-600">AI + Blockchain hash in seconds.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                         <h3 className="text-3xl font-semibold mb-2">3. Share</h3>
                         <p className="text-gray-600">Global, secure links forever.</p>
                    </div>
               </div>

               <NavLink
                    to="/register"
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition"
               >
                    Create Free Account
               </NavLink>

               <div className="mt-12 text-sm text-gray-500">
                    <p>Trusted by innovators | Hackathon Winner 2025</p>
               </div>
          </div>
     </div>
);

export default GetStarted;