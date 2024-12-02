import React from 'react';
const ProposeThemeForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };

    return ( 
        
        <div className="flex items-center mt-10">
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full ml-32" // Adjust ml-32 as needed
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">Titre de sujet</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Type de sujet</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        rows="4"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Options</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Ajouter le sujet
                </button>
            </form>
        </div>
        
    );
};

export default ProposeThemeForm;
