import { FiVideo, FiMessageSquare, FiCalendar, FiFileText, FiClock, FiBell } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">
                  Increase Dental Bookings
                </span>
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  By 40% & Reduce No-Shows
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Captly helps dental practices grow with personalized video greetings, simplified patient intake, and automated reminders. Save time and connect with more patients! ✨
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/signup" className="btn btn-primary px-8 py-3">
                  Start A Free 30 Days Trial
                </Link>
                <a href="#features" className="btn btn-secondary px-8 py-3">
                  Learn More
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                30 day money back guarantee • Trusted by 28 dental offices
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Dentist office receptionist" 
                  className="w-full h-auto"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
              </div>
              <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg blur-xl opacity-20 dark:opacity-30 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Features Designed for Dental Practices
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Everything your dental office needs to attract new patients and provide exceptional service
            </motion.p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Feature 
              icon={<FiVideo />}
              title="Interactive Personalized Video"
              description="Greet your visitors with a personalized video greeting so they feel more welcome vs. a tedious form."
              inProgress={false}
            />
            <Feature 
              icon={<FiFileText />}
              title="Automate Patient Intake"
              description="Transform manual paperwork into intelligent, automated conversations that capture patient information effortlessly."
              inProgress={false}
            />
            <Feature 
              icon={<FiMessageSquare />}
              title="AI Conversational Agents"
              description="Conversational AI Agent's who book appointments and reduce no-shows!"
              inProgress={true}
            />
            <Feature 
              icon={<FiCalendar />}
              title="Automated Workflows"
              description="Send personalized emails and SMS messages that convert leads into appointments."
              inProgress={false}
            />
            <Feature 
              icon={<FiClock />}
              title="Reduce No-Shows"
              description="Automated reminders and follow-ups ensure patients never miss their appointments."
              inProgress={false}
            />
            <Feature 
              icon={<FiBell />}
              title="Patient Engagement"
              description="Keep patients engaged with personalized communication before and after appointments."
              inProgress={false}
            />
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Dentists using Captly are seeing growth
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              See what dental professionals have to say about Captly
            </motion.p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Testimonial 
              quote="Captly.io helped us increase our email sign-ups by 40% in just two weeks. Highly recommend!"
              author="Sarah Lee"
              title="Office Manager"
              stars={5}
            />
            <Testimonial 
              quote="Setting up Captly.io was a breeze. It fits seamlessly with our site and looks great."
              author="Dr. Emily Roger"
              title="Dentist, Roger Dental Clinic"
              stars={5}
            />
            <Testimonial 
              quote="We saw immediate results with Captly.io. It's now a key part of our marketing strategy."
              author="David Leo"
              title="Marketing Director, Smile Dental Group"
              stars={5}
            />
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Introductory Pricing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Affordable plans designed to help your practice grow
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Monthly"
              price="$30"
              description="Increase booking by 40% and reduce no-shows by 20%"
              features={[
                "Personalized Video",
                "Intake Form Automation",
                "Email & SMS Templates",
                "Priority VIP Support",
                "Month to Month Contract"
              ]}
              buttonText="Start Free Trial"
              buttonLink="/signup"
            />
            <PricingCard 
              title="Yearly"
              price="$300"
              description="Increase booking by 40% and reduce no-shows by 20%"
              features={[
                "Personalized Video",
                "Intake Form Automation", 
                "Email & SMS Templates",
                "Priority VIP Support",
                "Save 16% Annually"
              ]}
              buttonText="Start Free Trial"
              buttonLink="/signup"
              highlighted={true}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to grow your dental practice?
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Join 28+ dental offices who use Captly to streamline patient intake and increase bookings.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="btn px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a href="#demo" className="btn px-8 py-3 bg-blue-700 text-white hover:bg-blue-800">
                Request a Demo
              </a>
            </div>
            <p className="mt-4 text-sm text-white/80">
              30 day money back guarantee • No credit card required
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const Feature = ({ 
  icon, 
  title, 
  description, 
  inProgress = false
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  inProgress?: boolean 
}) => {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      {inProgress && (
        <div className="mt-4 py-2 px-3 bg-amber-100 text-amber-800 text-sm rounded-md inline-flex items-center">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
          Coming Soon
        </div>
      )}
    </motion.div>
  )
}

const Testimonial = ({ quote, author, title, stars = 5 }: { quote: string, author: string, title: string, stars?: number }) => {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
    >
      <div className="flex text-yellow-400 mb-3">
        {[...Array(stars)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
      </div>
    </motion.div>
  )
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonLink,
  highlighted = false 
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[], 
  buttonText: string, 
  buttonLink: string,
  highlighted?: boolean 
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden ${
        highlighted ? 'border-2 border-blue-500 shadow-lg' : 'border border-gray-200 dark:border-gray-700'
      }`}
    >
      {highlighted && (
        <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
          Save Upto 20%
        </div>
      )}
      <div className="p-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="ml-1 text-gray-500 dark:text-gray-400">{title === "Monthly" ? "/month" : "/year"}</span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-8 w-full py-3 px-4 rounded-md text-white font-medium ${
            highlighted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-700'
          }`}
          onClick={() => window.location.href = buttonLink}
        >
          {buttonText}
        </motion.button>
        
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default HomePage
