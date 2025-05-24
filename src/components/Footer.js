export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <img src="/supreme-logo.svg" alt="Supreme Group Logo" className="h-10 mb-4" />
          <p className="text-sm">©2025. All Rights Reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Applications</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apparel</a></li>
            <li><a href="#" className="hover:underline">Automotive</a></li>
            <li><a href="#" className="hover:underline">Filtration</a></li>
            <li><a href="#" className="hover:underline">Customised Solutions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Innovation</a></li>
            <li><a href="#" className="hover:underline">Global Competency</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">More</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Linkedin</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Medium</a></li>
          </ul>
          <p className="text-sm mt-4">
            Supreme house: 110, 16th Road Chembur, Mumbai - 400071
          </p>
        </div>
      </div>
    </footer>
  );
}