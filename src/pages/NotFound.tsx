import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gameIcon from "@/assets/game-icon.png";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10 text-center py-20">
          <motion.img
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            src={gameIcon}
            alt="404"
            className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-8xl md:text-9xl font-black text-gradient">404</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-md mx-auto mb-8"
          >
            Oops! The page you're looking for doesn't exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-glow transition-shadow duration-300"
              >
                <Home size={20} />
                Go to Homepage
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-muted text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted/80 transition-colors"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;