import { Users, Shield, Award, Clock, } from 'lucide-react';
const About = () => {
  return (
    <div className="flex flex-col p-5">
     
      <section className=" py-10 md:py-10 bg-gray-200 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">About Mbaza</h1>
            <p className="mt-6 text-xl text-primary-100">
              Empowering citizens and improving public services through effective complaint management and government accountability.
            </p>
          </div>
        </div>
      </section>

    
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-primary-800 md:text-4xl">Our Mission</h2>
              <div className="mt-6 space-y-4 text-lg text-slate-400">
                <p>
                  Mbaza exists to bridge the gap between citizens and government services by providing an efficient, transparent platform for addressing public service complaints.
                </p>
                <p>
                  We aim to empower citizens to actively participate in improving public services while helping government agencies respond effectively to the needs of the people they serve.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-primary-800 md:text-4xl">Our Vision</h2>
              <div className="mt-6 space-y-4 text-lg text-slate-400">
                <p>
                  We envision a future where every citizen's voice is heard, where public services consistently meet the highest standards, and where government and citizens work together in mutual accountability.
                </p>
                <p>
                  Through continuous improvement driven by citizen feedback, we strive to create a model of responsive governance that enhances quality of life for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-200 dark:bg-gray-900 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-slate-600">
              These principles guide everything we do at Mbaza.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 p-2">
           
            <div className="card p-6 text-center bg-gray-300 dark:bg-gray-950 rounded-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 bg-gray-200 dark:bg-gray-900">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Transparency</h3>
              <p className="mt-2 text-slate-600">
                We believe in complete openness in our processes, decisions, and outcomes.
              </p>
            </div>


            <div className="card p-6 text-center bg-gray-300 dark:bg-gray-950 rounded-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 bg-gray-200 dark:bg-gray-900">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Accountability</h3>
              <p className="mt-2 text-slate-600">
                We hold ourselves and public institutions responsible for their actions and decisions.
              </p>
            </div>

     
            <div className="card p-6 text-center bg-gray-300 dark:bg-gray-950 rounded-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 bg-gray-200 dark:bg-gray-900">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Efficiency</h3>
              <p className="mt-2 text-slate-600">
                We strive for timely responses and resolutions to all citizen complaints.
              </p>
            </div>

           
            <div className="card p-6 text-center bg-gray-300 dark:bg-gray-950 rounded-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 bg-gray-200 dark:bg-gray-900">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Inclusion</h3>
              <p className="mt-2 text-slate-600">
                We ensure our platform is accessible to all citizens regardless of background or ability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;