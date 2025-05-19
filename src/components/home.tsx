import { ArrowRight, BarChart2, MessageSquare, Search, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatisticCard from '@/components/StaticCard';

const AppHome = () => {
  return (
    <div className="flex flex-col p-3">
      <section className="relative py-20 md:py-28 rounded-xl p-2 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="animate-fade-in text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Your Voice Matters. We're Listening.
              </h1>
              <p className="mt-6 animate-fade-in text-lg text-primary-100 delay-100 md:text-xl">
                Submit and track your complaints about public services. We ensure they reach the right agencies and get resolved.
              </p>
              <div className="mt-8 flex animate-fade-in flex-col gap-4 delay-200 sm:flex-row">
                <Link to="/submit">
                <button>Submit Complaint</button>
                </Link>
                <Link to="/dashboard" className="btn hover:bg-primary-900">
                  Track Status
                </Link>
              </div>
            </div>
            <div className="hidden animate-slide-in-right md:block">
              <img 
                src="https://mobile.igihe.com/local/cache-vignettes/L1000xH563/whatsapp_image_2025-03-16_at_11.55_11-2-4edc1.jpg?1742119671" 
                alt="Citizen engagement" 
                className="mx-auto rounded-lg object-cover object-center shadow-xl"
                width="500"
                height="350"
              />
            </div>
          </div>
        </div>
        <div className="container mt-12 md:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatisticCard 
              value="15,482" 
              label="Complaints Resolved" 
              icon={<Shield className="h-8 w-8 text-secondary-400 " />}
            />
            <StatisticCard 
              value="92%" 
              label="Resolution Rate" 
              icon={<BarChart2 className="h-8 w-8 text-secondary-400" />}
            />
            <StatisticCard 
              value="38" 
              label="Govt Agencies" 
              icon={<Users className="h-8 w-8 text-secondary-400" />}
            />
            <StatisticCard 
              value="5 days" 
              label="Avg Response Time" 
              icon={<MessageSquare className="h-8 w-8 text-secondary-400" />}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How Mbaza Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Our simple process ensures your complaints are heard and addressed effectively.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group relative rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:from-gray-950 dark:to-gray-900">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-700 text-white shadow-md">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">Submit Your Complaint</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Fill out our simple form with details about your issue and the relevant government service.
              </p>
            </div>

            
            <div className="group relative rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:from-gray-950 dark:to-gray-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-700 text-white shadow-md">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">We Route &amp; Prioritize</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Your complaint is automatically sent to the appropriate agency with the right priority.
              </p>
            </div>

           
  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:from-gray-950 dark:to-gray-900">
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-700 text-white shadow-md">
  <span className="text-xl font-bold">3</span>
  </div>
  <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">Track &amp; Get Updates</h3>
  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
  Follow the progress of your complaint with real-time updates until it's resolved.
  </p>
</div>

          </div>

          <div className="mt-12 text-center">
            <Link to="#" className="btn btn-primary">
              Submit Your First Complaint
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>


      <section className=" md:py-24 group relative rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg transiti dark:from-gray-950 dark:to-gray-900 text-gray-100">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Search Our Knowledge Base</h2>
            <p className="mt-4 text-lg text-primary-100">
              Find answers to common questions and issues before submitting a complaint.
            </p>

            <div className="mt-8 flex items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full rounded-lg border-2 p-1 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Search className="h-5 w-5 text-white/70" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-primary-100">
                Popular searches: Water outage, Road repair, School registration, Healthcare access, Document processing
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className=" py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Common Complaint Categories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We handle complaints across all government services and departments.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="card overflow-hidden">
              <img 
                src="https://turkanawildlifesafaris.com/wp-content/uploads/2024/05/All-you-need-to-know-about-starting-up-a-business-in-Rwanda-1.png" 
                alt="Infrastructure" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Infrastructure</h3>
                <p className="mt-2 text-slate-600">
                  Roads, bridges, public buildings, construction, and maintenance issues.
                </p>
              </div>
            </div>

          
            <div className="card overflow-hidden">
              <img 
                src="https://pbs.twimg.com/media/Dsb1yk8WwAA8PP8.jpg" 
                alt="Utilities" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Utilities</h3>
                <p className="mt-2 text-slate-600">
                  Water supply, electricity, internet connectivity, and service disruptions.
                </p>
              </div>
            </div>

           
            <div className="card overflow-hidden">
              <img 
                src="https://images.theconversation.com/files/498920/original/file-20221205-16-bcm2cc.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop" 
                alt="Healthcare" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Healthcare</h3>
                <p className="mt-2 text-slate-600">
                  Public hospitals, clinics, medical services, and healthcare accessibility.
                </p>
              </div>
            </div>

           
            <div className="card overflow-hidden">
              <img 
                src="https://brokenchalk.org/wp-content/uploads/2023/05/Rwanda_Vvob.jpg" 
                alt="Education" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="mt-2 text-slate-600">
                  Schools, universities, educational quality, facilities, and resources.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img 
                src="https://uploads-garowe.s3.amazonaws.com/upload/images/Article/2023/1673461307/main/thumbnail.jpg" 
                alt="Security" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Security &amp; Safety</h3>
                <p className="mt-2 text-slate-600">
                  Police services, crime reporting, neighborhood safety, and emergency response.
                </p>
              </div>
            </div>

           
            <div className="card overflow-hidden">
              <img 
                src="https://www.wearetech.africa/media/k2/items/cache/b1905ba663a06a651aac60b6e5a0025b_XL.jpg" 
                alt="Public Services" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Public Services</h3>
                <p className="mt-2 text-slate-600">
                  Administrative services, document processing, and customer service issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10 text-gray-900 dark:text-gray-100 transition-colors bg-gradient-to-br from-blue-500 via-yellow-200 to-green-400 dark:from-gray-950 dark:via-gray-800 dark:to-gray-900 shadow-lg">
  <div className="container">
    <div className="mx-auto max-w-3xl text-center px-4">
      <h2 className="text-3xl font-bold md:text-4xl">
        Ready to Get Your Issue Resolved?
      </h2>
      <p className="mt-4 text-lg text-gray-800 dark:text-gray-400">
        Join thousands of citizens who have successfully resolved their issues through Mbaza.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          to="/about-us"
          className="inline-block rounded-full border-2 border-blue-00 px-6 py-2 text-blue-700 font-semibold transition hover:bg-blue-600 hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AppHome;