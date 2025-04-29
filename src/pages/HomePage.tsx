import { FiMonitor, FiShare2, FiCloud, FiLayers, FiSearch, FiBarChart2 } from 'react-icons/fi'
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
                  Capture & Share
                </span>
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Screenshots Easily
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Captly helps teams capture, organize, and share screenshots with
                powerful annotation tools and instant sharing capabilities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/signup" className="btn btn-primary px-8 py-3">
                  Get Started Free
                </Link>
                <a href="#features" className="btn btn-secondary px-8 py-3">
                  Learn More
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                No credit card required • Free 14-day trial
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
                  src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Captly screenshot tool" 
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
              Powerful Screenshot Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Everything you need to capture, annotate, organize, and share your screenshots
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
              icon={<FiMonitor />}
              title="Screen Capture"
              description="Capture your entire screen, a specific window, or a selected area with a single click."
            />
            <Feature 
              icon={<FiLayers />}
              title="Annotation Tools"
              description="Add text, arrows, shapes, and highlights to make your point crystal clear."
            />
            <Feature 
              icon={<FiShare2 />}
              title="Instant Sharing"
              description="Share screenshots via link, email, or integrate with your favorite tools."
            />
            <Feature 
              icon={<FiCloud />}
              title="Cloud Storage"
              description="All your screenshots are securely stored in the cloud and accessible from anywhere."
            />
            <Feature 
              icon={<FiSearch />}
              title="Smart Search"
              description="Find any screenshot using OCR technology that reads text in your images."
            />
            <Feature 
              icon={<FiBarChart2 />}
              title="Analytics"
              description="Track views and interactions with your shared screenshots."
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
              Loved by thousands of teams
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              See what our customers have to say about Captly
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
              quote="Captly has streamlined our bug reporting process. Being able to quickly capture, annotate, and share screenshots has cut our debugging time in half."
              author="Sarah Johnson"
              title="Product Manager at TechCorp"
            />
            <Testimonial 
              quote="As a designer, I use Captly daily to share my work and gather feedback. The annotation tools are incredibly intuitive and powerful."
              author="Michael Chen"
              title="UX Designer at DesignHub"
            />
            <Testimonial 
              quote="The ability to organize screenshots into projects and add searchable tags has been a game-changer for our documentation process."
              author="Emily Rodriguez"
              title="Technical Writer at DocuSoft"
            />
          </motion.div>
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
              Ready to supercharge your workflow?
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of teams who use Captly to streamline their communication and documentation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="btn px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
                Get Started Free
              </Link>
              <a href="#demo" className="btn px-8 py-3 bg-blue-700 text-white hover:bg-blue-800">
                Request a Demo
              </a>
            </div>
            <p className="mt-4 text-sm text-white/80">
              No credit card required • Free 14-day trial
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
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
    </motion.div>
  )
}

const Testimonial = ({ quote, author, title }: { quote: string, author: string, title: string }) => {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
    >
      <svg className="h-8 w-8 text-gray-300 dark:text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
      </div>
    </motion.div>
  )
}

export default HomePage
