const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8" role="contentinfo">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Booking Platform. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer