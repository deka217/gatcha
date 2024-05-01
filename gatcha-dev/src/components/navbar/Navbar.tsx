import Link from "next/link"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 ">
    <nav>
        <div className="max-w-5xl mx-auto px-4 py-1">
          <div className="flex justify-center h-16">
            
            <div className="flex items-center space-x-4 text-gray-900">
              <Link href="/about" className="font-rubik px-4">About Us</Link>
              <Link href="/products" className="font-rubik px-4">Merchandises</Link>
              <div>
              <Link href="/" className="px-4"><img className="w-30 h-14" src="yosh-id-logo.png"  /></Link>
              </div>
              
              <Link href="/offers" className="font-rubik px-4">Offers For You</Link>
              <Link href="/contact" className="font-rubik bg-[#253370] rounded-full px-4 text-white">Collaborate With Us</Link>
            </div>
          </div>
        </div>
      </nav>
      </header>
    )
}
export default Navbar