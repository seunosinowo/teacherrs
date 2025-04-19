export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-primary text-xl font-bold mb-4">Teacherrs</h3>
              <p className="text-gray-400">Connecting students with skilled educators since 2023</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">For Teachers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary">Find a Teaching Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Browse Job Listings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Membership Pricing</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                2nd Floor, Tapa House,<br/>
                Surulere, Lagos 101271, Nigeria
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Teacherrs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }