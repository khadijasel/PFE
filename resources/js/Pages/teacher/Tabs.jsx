import React from 'react';

const Tabs = ({ tabs, currentTab, setCurrentTab }) => {
    return (
        <div className="flex space-x-4 border-b-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`py-2 px-4 ${
                        currentTab === tab
                            ? 'border-b-4 border-blue-500 text-blue-500 font-bold'
                            : 'text-gray-500'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
