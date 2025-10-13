"use client";

import { motion } from 'motion/react';
import { Badge } from './ui/badge';

const allSkills = [
  { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
  { name: 'Laravel', icon: '🔴', color: 'from-red-500 to-orange-500' },
  { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-amber-500' },
  { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-indigo-600' },
  { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
  { name: 'PHP', icon: '🐘', color: 'from-purple-500 to-violet-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-700' },
  { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-400' },
  { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-400' },
  { name: 'Git', icon: '📚', color: 'from-gray-600 to-gray-700' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-400 to-blue-500' },
  { name: 'Next.js', icon: '▲', color: 'from-black to-gray-800' },
  { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-green-600' },
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-800' }
];

// Split skills into two rows
const firstRowSkills = allSkills.slice(0, 8);
const secondRowSkills = allSkills.slice(8, 16);

// Skill card component
function SkillCard({ skill }: { skill: typeof allSkills[0] }) {
  return (
    <div className="flex-shrink-0 mx-3">
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateY: 5
        }}
        className="group perspective-1000"
      >
        <div className="relative">
          <div className={`
            p-4 sm:p-5 rounded-xl bg-gradient-to-br ${skill.color} 
            text-white shadow-lg hover:shadow-2xl transition-all duration-300
            transform-gpu group-hover:scale-105
            border border-white/20 w-[120px] sm:w-[140px] h-[100px] sm:h-[110px]
            flex flex-col items-center justify-center
          `}>
            <div className="text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-xs sm:text-sm leading-tight">
                {skill.name}
              </h3>
            </div>
          </div>
          
          {/* Glow effect */}
          <motion.div
            className={`
              absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} 
              opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300
              -z-10
            `}
            initial={false}
            whileHover={{ scale: 1.2 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Scrolling row component
function ScrollingRow({ skills, direction, className }: { 
  skills: typeof firstRowSkills, 
  direction: 'left' | 'right',
  className?: string
}) {
  // Duplicate skills multiple times for seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex ${className}`}>
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Infinite Scrolling Skills */}
        <div className="space-y-6 skills-scroll-container">
          {/* First row - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <ScrollingRow 
              skills={firstRowSkills} 
              direction="left" 
              className="animate-scroll-left"
            />
          </motion.div>

          {/* Second row - Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <ScrollingRow 
              skills={secondRowSkills} 
              direction="right" 
              className="animate-scroll-right"
            />
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="relative mt-16 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-10 blur-xl"
          />
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-xl"
          />
        </div>
      </div>
    </section>
  );
}