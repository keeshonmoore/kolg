import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', { email, password, rememberMe })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
      />
      
      <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/logo-white.png" alt="KOLG Logo" className="h-12 mx-auto mb-4" />
        </div>

        <div className="w-full max-w-md bg-dark/50 backdrop-blur-md rounded-2xl shadow-xl border border-accent/20 p-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-accent mb-2">Client Portal</h2>
            <p className="text-secondary">Access your client dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-accent/50"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-dark border border-accent/20 text-secondary focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-accent/50"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-dark border border-accent/20 text-secondary focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-accent focus:ring-accent border-accent/20 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-secondary">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="text-accent hover:text-accent/80 transition-colors duration-200">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-accent text-dark py-3 px-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Return to Home Button */}
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login 