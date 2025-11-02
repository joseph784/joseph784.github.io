import React from 'react';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Groups3Icon from '@mui/icons-material/Groups3';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChurchIcon from '@mui/icons-material/Church';
import PublicIcon from '@mui/icons-material/Public';

const LogoWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px',
});

// Temporary icon mapping until we have the actual logos
const iconMap = {
  tesla: <BusinessIcon sx={{ width: '100%', height: '100%', color: '#000' }} />,
  powerex: <BusinessIcon sx={{ width: '100%', height: '100%', color: '#000' }} />,
  cascade: <BusinessIcon sx={{ width: '100%', height: '100%', color: '#000' }} />,
  trading: <WorkIcon sx={{ width: '100%', height: '100%', color: '#fff' }} />,
  rocket: <RocketLaunchIcon sx={{ width: '100%', height: '100%', color: '#fff' }} />,
  imuna: <PublicIcon sx={{ width: '100%', height: '100%', color: '#000' }} />,
  social: <HandshakeIcon sx={{ width: '100%', height: '100%', color: '#fff' }} />,
  mental: <PsychologyIcon sx={{ width: '100%', height: '100%', color: '#fff' }} />,
  ucm: <ChurchIcon sx={{ width: '100%', height: '100%', color: '#fff' }} />,
  geomun: <Groups3Icon sx={{ width: '100%', height: '100%', color: '#000' }} />,
};

export default function TimelineLogo({ id }) {
  return (
    <LogoWrapper>
      {iconMap[id]}
    </LogoWrapper>
  );
}