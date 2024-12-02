import React, { useState } from 'react';
import Tabs from './Tabs';
import StudentThemes from './StudentThemes';
import ProposeThemeForm from './ProposeThemeForm';
import MyThemes from './MyThemes';

const PFYIdeas = () => {
    const [currentTab, setCurrentTab] = useState('Theme proposé par étudiants'); 

    const tabs = ['Theme proposé par étudiants', 'Proposer un theme', 'Mes themes'];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">List of PFY Ideas</h1>
            <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} /> 
            <div className="mt-6">
                {currentTab === 'Theme proposé par étudiants' && <StudentThemes />}
                {currentTab === 'Proposer un theme' && <ProposeThemeForm />}
                {currentTab === 'Mes themes' && <MyThemes />}
            </div>
        </div>
    );
};

export default PFYIdeas;
