import React from 'react';
import { Folder, File, Code, Settings, Database, Activity, ArrowDown } from 'lucide-react';

const ProjectStructure = () => {
    return (
        <div className="flex flex-col items-center p-4 space-y-8 max-w-2xl mx-auto">
            {/* Monolithic Structure */}
            <div className="border rounded-lg p-4 bg-white shadow-sm w-full max-w-lg">
                <div className="flex items-center space-x-4 text-lg mb-4">
                    <Folder className="text-blue-500" size={24} />
                    <span className="font-bold">Initial Project Structure</span>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="flex items-center space-x-3">
                        <Folder className="text-blue-500" size={20} />
                        <span>KYAB/</span>
                    </div>

                    <div className="ml-6 space-y-2">
                        <div className="flex items-center space-x-3">
                            <Folder className="text-blue-500" size={20} />
                            <span>src/</span>
                        </div>

                        <div className="ml-6">
                            <div className="flex items-center space-x-3">
                                <File className="text-gray-500" size={20} />
                                <span>chunkingProcess.js</span>
                                <span className="text-gray-500 text-sm">All functionality in one file</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separator with Arrow */}
            <div className="flex justify-center -my-2">
                <ArrowDown className="text-gray-800 font-bold" size={48} />
            </div>

            {/* Enhanced Structure */}
            <div className="border rounded-lg p-4 bg-white shadow-sm w-full max-w-lg">
                <div className="flex items-center space-x-4 text-lg mb-4">
                    <Folder className="text-blue-500" size={24} />
                    <span className="font-bold">Enhanced Project Structure</span>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="flex items-center space-x-3">
                        <Folder className="text-blue-500" size={20} />
                        <span>KYAB/</span>
                    </div>

                    <div className="ml-6 space-y-2">
                        <div className="flex items-center space-x-3">
                            <Folder className="text-blue-500" size={20} />
                            <span>src/</span>
                        </div>

                        <div className="ml-6 space-y-3">
                            <div className="flex items-center space-x-3">
                                <Settings className="text-green-500" size={20} />
                                <span>config/</span>
                                <span className="text-gray-500 text-sm">Environment & Constants</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Code className="text-purple-500" size={20} />
                                <span>services/</span>
                                <span className="text-gray-500 text-sm">Document Processing & Embeddings</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Database className="text-orange-500" size={20} />
                                <span>workers/</span>
                                <span className="text-gray-500 text-sm">Parallel Processing</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Activity className="text-red-500" size={20} />
                                <span>utils/</span>
                                <span className="text-gray-500 text-sm">Helper Functions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStructure;