export default function Home() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-primary/10 rounded-xl p-8 text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Connect with Skilled Teachers</h1>
          <p className="text-gray-600 mb-8">Discovering talented teachers can be a challenge. Explore the pool of skilled educators available on Teacherrs.com</p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-orange-600">
            Search Teachers
          </button>
        </div>
  
        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Steps 1-3 */}
            {[1, 2, 3].map((step) => (
              <div key={step} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">Step {step}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Teacher Feed */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Post Creation */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <textarea
              className="w-full border rounded-lg p-4 mb-4"
              placeholder="Share a teaching opportunity..."
              rows="3"
            ></textarea>
            <button className="bg-primary text-white px-6 py-2 rounded-lg">
              Post
            </button>
          </div>
  
          {/* Posts Feed */}
          <div className="space-y-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Teacher Name</h4>
                    <p className="text-sm text-gray-500">Mathematics · Lagos</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Looking for students interested in advanced calculus...</p>
                <button className="text-gray-500 hover:text-primary flex items-center">
                  <HeartIcon className="h-5 w-5 mr-1" />
                  24 Likes
                </button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Pricing Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pricing Cards */}
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="border rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-primary text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-orange-600">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }