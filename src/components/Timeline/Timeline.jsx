import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'; 
import Box from '@mui/material/Box';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import Typography from '@mui/material/Typography';
import { experiences } from '../../data/experiences';
import WorkCard from '../Work/WorkCard';
import TimelineLogo from './TimelineLogo';

const getBackgroundColor = (id) => {
  if (['tesla', 'powerex', 'cascade'].includes(id)) {
    return '#ffffff'; 
  }
  if (['rocket', 'trading'].includes(id)) {
    return '#002145';  
  }
  if (['social', 'mental', 'ucm'].includes(id)) {
    return '#002145';  
  }
  return '#ffffff'; 
};

export default function TimelineEx() {
  const [hoveredId, setHoveredId] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); 
  const timelineRefs = useRef([]);
  const allExperiences = [...experiences.software, ...experiences.business]
    .sort((a, b) => b.year - a.year); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.transform = 'translateX(-50px)';
        ref.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        observer.observe(ref);
      }
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const handleMouseEnter = (id, event) => {
    const clientY = event.clientY;
    setTooltipPosition({
      x: window.innerWidth * 0.2, 
      y: clientY,
    });
    setHoveredId(id);
  };
  
  const handleMouseLeave = () => setHoveredId(null);
  const hoveredExp = allExperiences.find((exp) => exp.id === hoveredId);
  const tooltipRoot = document.getElementById('tooltip-root'); 

  return (
    <Box
      id="timeline-scroll-container"
      sx={{
        position: 'relative',
        perspectiveOrigin: '0 0',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll',
        transformStyle: 'preserve-3d',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transform: 'translateZ(-5px) scale(1.5)',
          zIndex: -1,
          background: 'inherit',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
          zIndex: 1,
        }}
      >
        <Timeline
          sx={{
            '& .MuiTimelineItem-root': { 
              width: '100vw', 
              marginBottom: '40px',
              paddingLeft: '120px' 
            },
            '& .MuiTypography-root': { marginBottom: '16px', fontSize: '2rem' },
            '& .MuiTimelineDot-root': { width: '80px', height: '80px', margin: '12px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' },
            '& .MuiSvgIcon-root': { width: '50px', height: '50px' },
            '& .MuiTimelineContent-root:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)', borderRadius: '8px', transition: 'background-color 0.3s' },
          }}
        >
          {allExperiences.map((exp, index) => {
            const backgroundColor = getBackgroundColor(exp.id);

            return (
              <TimelineItem key={exp.id} ref={(el) => (timelineRefs.current[index] = el)}>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      position: 'absolute',
                      right: '100%',
                      marginRight: '2rem',
                      color: 'text.secondary',
                      fontWeight: 'bold',
                      opacity: 0.7
                    }}
                  >
                    {exp.year}
                  </Typography>
                </Box>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot 
                    sx={{ 
                      backgroundColor: backgroundColor,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <TimelineLogo id={exp.id} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: '12px',
                    px: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                  onMouseEnter={(e) => handleMouseEnter(exp.id, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Typography variant="h5" component="span">{exp.company}</Typography>
                  <Typography variant="h5">{exp.title}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
      {hoveredExp && tooltipRoot && createPortal(
        <Box
          sx={{
            position: 'fixed', 
            top: `${tooltipPosition.y}px`,
            left: `${tooltipPosition.x}px`,
            transform: 'translate(-50%, -50%)', 

            zIndex: 9999,
            maxWidth: '600px',
            width: '30vw', 
            opacity: 0.95,
            animation: 'fadeIn 0.3s',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 0.95 },
            },
            background: 'transparent',
            p: 3, 
          }}
        >
          <WorkCard
            key={hoveredExp.id}
            Company={hoveredExp.company}
            Title={hoveredExp.title}
            Description={
              <>
                {hoveredExp.description.map((desc, i) => (
                  <span key={i}>
                    • {desc}
                    <br />
                  </span>
                ))}
                {hoveredExp.technologies && (
                  <b>Technologies Utilized: {hoveredExp.technologies}</b>
                )}
              </>
            }
            Class={hoveredExp.cardClass}
          />
        </Box>,
        tooltipRoot
      )}
    </Box>
  );
}