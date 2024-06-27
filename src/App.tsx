import type React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import Technologies from './components/Technologies';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PersonalExperience from './components/PersonalExperience';
import Projects from './components/Projects';
import TabPanel from './components/TabPanel';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number):void => {
    setActiveTab(newValue);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Box className="p-4 my-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <img
                src="/perfil-photo.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Tabs
            orientation="vertical"
            value={activeTab}
            onChange={handleChange}
            aria-label="CV sections"
            className="border-r border-gray-300 w-60 justify-start"
          >
            <Tab
              label="Profile"
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                activeTab === 0 ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={(event: React.SyntheticEvent) => { handleChange(event, 0); }}
            />
            <Tab
              label="Technologies"
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                activeTab === 1 ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={(event: React.SyntheticEvent) => { handleChange(event, 1); }}
            />
            <Tab
              label="Work Experience"
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                activeTab === 2 ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={(event: React.SyntheticEvent) => { handleChange(event, 2); }}
            />
            <Tab
              label="Education"
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                activeTab === 3 ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={(event: React.SyntheticEvent) => { handleChange(event, 3); }}
            />
            <Tab
              label="Personal Experience"
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                activeTab === 4 ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={(event: React.SyntheticEvent) => { handleChange(event, 4); }}
            />
            <Tab
              label="Projects"
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                activeTab === 4 ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={(event: React.SyntheticEvent) => { handleChange(event, 5); }}
            />
          </Tabs>
        </Box>
        <div className="flex-1 flex justify-center items-center p-4">
          <TabPanel value={activeTab} index={0}>
            <Profile />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <Technologies />
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <WorkExperience />
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
            <Education />
          </TabPanel>
          <TabPanel value={activeTab} index={4}>
            <PersonalExperience />
          </TabPanel>
          <TabPanel value={activeTab} index={5}>
            <Projects />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default App;
