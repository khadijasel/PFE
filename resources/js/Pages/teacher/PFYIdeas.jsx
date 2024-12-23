import React, { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Layout from '../Shared/Layout';
import Tabs from './Tabs';
import StudentThemes from './StudentThemes';
import ProposeThemeForm from './ProposeThemeForm';
import MyThemes from './MyThemes';

const PFYIdeas = () => {
    const [currentTab, setCurrentTab] = useState('Theme proposé par étudiants');
    const { themes } = usePage().props;

    const tabs = ['Theme proposé par étudiants', 'Proposer un theme', 'Mes themes'];

    return (
        <Layout>
            <Head title="List of PFY Ideas" />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">List of PFY Ideas</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                    <div className="mt-6">
                        {currentTab === 'Theme proposé par étudiants' && <StudentThemes />}
                        {currentTab === 'Proposer un theme' && <ProposeThemeForm />}
                        {currentTab === 'Mes themes' && <MyThemes themes={themes} />}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PFYIdeas;

