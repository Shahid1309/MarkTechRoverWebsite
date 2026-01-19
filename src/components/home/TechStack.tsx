import { motion } from 'framer-motion';
import Section from '../ui/Section';

const TechStack = () => {
  const technologies = {
    'Development': [
      { name: 'React', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiMzNzQxNTEiLz4KPHN2ZyB4PSI2IiB5PSI2IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Im0xMS45OTggM2MtMS41MzEgMC0yLjUgMS4wMzEtMi41IDIuNXMuOTY5IDIuNSAyLjUgMi41IDIuNS0xLjAzMSAyLjUtMi41LS45NjktMi41LTIuNS0yLjV6bTAgMTRjLTEuNTMxIDAtMi41IDEuMDMxLTIuNSAyLjVzLjk2OSAyLjUgMi41IDIuNSAyLjUtMS4wMzEgMi41LTIuNS0uOTY5LTIuNS0yLjUtMi41em0tNy00Yy0xLjUzMSAwLTIuNSAxLjAzMS0yLjUgMi41cy45NjkgMi41IDIuNSAyLjUgMi41LTEuMDMxIDIuNS0yLjUtLjk2OS0yLjUtMi41LTIuNXptMTQgMGMtMS41MzEgMC0yLjUgMS4wMzEtMi41IDIuNXMuOTY5IDIuNSAyLjUgMi41IDIuNS0xLjAzMSAyLjUtMi41LS45NjktMi41LTIuNS0yLjV6IiBmaWxsPSIjNjFkYWZiIi8+CjxwYXRoIGQ9Im0xMiA1LjVjMy4wNDIgMCA1LjUtMS43OTEgNS41LTRzLTIuNDU4LTQtNS41LTQtNS41IDEuNzkxLTUuNSA0IDIuNDU4IDQgNS41IDR6bTAgMTNjMy4wNDIgMCA1LjUtMS43OTEgNS41LTRzLTIuNDU4LTQtNS41LTQtNS41IDEuNzkxLTUuNSA0IDIuNDU4IDQgNS41IDR6bTAtNi41YzMuMDQyIDAgNS41LTEuNzkxIDUuNS00cy0yLjQ1OC00LTUuNS00LTUuNSAxLjc5MS01LjUgNCAyLjQ1OCA0IDUuNSA0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4KPC9zdmc+' },
      { name: 'Next.js', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE4LjQgMjcuNGgtMi44VjEyLjZoNy4ydjIuNGgtNC40djQuNGgzLjl2Mi40aC0zLjl2NS42em04IDBoLTIuOFYxNS4xbC00LjEgMTIuM2gtMi44bDQuMS0xMi4zVjEyLjZoMi44djE0LjhoMi44eiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+' },
      { name: 'Node.js', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiM2ODk0NGEiLz4KPHBhdGggZD0iTTIwIDhsLTggNHY4bDggNCA4LTR2LThsLTgtNHptNiAxMGwtNiAzLTYtM3YtNmw2LTMgNiAzdjZ6IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=' },
      { name: 'TypeScript', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMxNzhjNiIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UUzwvdGV4dD4KPC9zdmc+' }
    ],
    'Marketing Tools': [
      { name: 'Google Ads', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiM0Mjg1ZjQiLz4KPHBhdGggZD0iTTIwIDEwYy01LjUgMC0xMCA0LjUtMTAgMTBzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMGMwLTEuNS0uMy0yLjktLjgtNC4xbC0yLjUgMi41Yy4yLjUuMyAxIC4zIDEuNiAwIDMuMy0yLjcgNi02IDZzLTYtMi43LTYtNiAyLjctNiA2LTZjMS42IDAgMy4xLjYgNC4yIDEuN2wyLjEtMi4xQzI1LjIgMTEuMSAyMi43IDEwIDIwIDEweiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0ibTI4IDEyLTgtOHY2aDZ2MnoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==' },
      { name: 'Meta Ads', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiMxODc3ZjIiLz4KPHBhdGggZD0iTTIwIDhDMTMuNCA4IDggMTMuNCA4IDIwczUuNCA1IDEyIDUgMTItNS40IDEyLTEyUzI2LjYgOCAyMCA4em0wIDJjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTAtMTAtNC41LTEwLTEwUzE0LjUgMTAgMjAgMTB6IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAgMTJjLTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHptMCAyYzMuMyAwIDYgMi43IDYgNnMtMi43IDYtNiA2LTYtMi43LTYtNiAyLjctNiA2LTZ6IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAgMTZjLTIuMiAwLTQgMS44LTQgNHMxLjggNCA0IDQgNC0xLjggNC00LTEuOC00LTQtNHoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==' },
      { name: 'SEMrush', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmZjY0MDAiLz4KPHRleHQgeD0iMjAiIHk9IjE4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0VNPC90ZXh0Pgo8dGV4dCB4PSIyMCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJVU0g8L3RleHQ+Cjwvc3ZnPg==' },
      { name: 'Mailchimp', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmZmU4MDEiLz4KPHBhdGggZD0iTTIwIDEwYy01LjUgMC0xMCA0LjUtMTAgMTBzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEwem0wIDJjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDgtOC0zLjYtOC04IDMuNi04IDgtOHoiIGZpbGw9IiMzMzMiLz4KPHBhdGggZD0iTTIwIDE0Yy0zLjMgMC02IDIuNy02IDZzMi43IDYgNiA2IDYtMi43IDYtNi0yLjctNi02LTZ6bTAgMmMyLjIgMCA0IDEuOCA0IDRzLTEuOCA0LTQgNC00LTEuOC00LTQgMS44LTQgNC00eiIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=' }
    ],
    'Analytics': [
      { name: 'Google Analytics', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmZjk4MDAiLz4KPHBhdGggZD0iTTEyIDI4aDR2LThoLTR2OHptNiAwaDR2LTE2aC00djE2em02IDBoNHYtMTJoLTR2MTJ6IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=' },
      { name: 'Hotjar', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmZjM5NTciLz4KPHBhdGggZD0iTTIwIDEwYy01LjUgMC0xMCA0LjUtMTAgMTBzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEwem0wIDJjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDgtOC0zLjYtOC04IDMuNi04IDgtOHoiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==' },
      { name: 'Mixpanel', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiM2NzQwZmYiLz4KPHBhdGggZD0iTTIwIDEwYy01LjUgMC0xMCA0LjUtMTAgMTBzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEwem0wIDJjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDgtOC0zLjYtOC04IDMuNi04IDgtOHoiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE0IiB5PSIxNiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjgiIHJ4PSIxIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=' },
      { name: 'Looker', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiM0Mjg1ZjQiLz4KPHBhdGggZD0iTTIwIDEwYy01LjUgMC0xMCA0LjUtMTAgMTBzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEwem0wIDJjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDgtOC0zLjYtOC04IDMuNi04IDgtOHoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNiAxNmg4djhoLTh2LTh6IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=' }
    ],
    'Design': [
      { name: 'Figma', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmMjRlMWUiLz4KPHBhdGggZD0iTTIwIDEwYy01LjUgMC0xMCA0LjUtMTAgMTBzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEwem0wIDJjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDgtOC0zLjYtOC04IDMuNi04IDgtOHoiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjIiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==' },
      { name: 'Adobe XD', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmZjYxZjYiLz4KPHRleHQgeD0iMjAiIHk9IjI2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WEQ8L3RleHQ+Cjwvc3ZnPg==' },
      { name: 'Photoshop', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiMzMWE4ZmYiLz4KPHRleHQgeD0iMjAiIHk9IjI2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHM8L3RleHQ+Cjwvc3ZnPg==' },
      { name: 'Illustrator', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiNmZjllMDAiLz4KPHRleHQgeD0iMjAiIHk9IjI2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWk8L3RleHQ+Cjwvc3ZnPg==' }
    ]
  };

  return (
    <Section className="relative overflow-hidden" id="tech-stack">
      {/* Removed background elements for transparency */}

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-white">Our Tech Stack</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              We use cutting-edge technologies and tools to deliver exceptional results 
              across development, marketing, and analytics.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {Object.entries(technologies).map(([category, tools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-purple-300">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl flex flex-col items-center text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group border border-white/20"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image container with fixed size and gradient background */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br from-white/20 to-white/10 group-hover:shadow-inner transition-all duration-300">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className={`${tool.name === 'SEMrush' ? 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'} object-contain transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>
                    <p className="font-medium text-white text-sm sm:text-base">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
