import React from "react";
import { useAlertViewStore } from "../store/index";

const Alert = () => {
    const msgList = useAlertViewStore(state => state.msgList);
    const { closeMsg } = useAlertViewStore();

    if (msgList.length === 0) return null;

    // Function to get appropriate icon based on alert type
    const getAlertIcon = (alertType) => {
        switch (alertType) {
            case "error":
                return (
                    <div className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 sm:h-5 sm:w-5 min-w-[16px] sm:min-w-[20px] text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                            />
                        </svg>
                    </div>
                );
            case "success":
                return (
                    <div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 sm:h-5 sm:w-5 min-w-[16px] sm:min-w-[20px] text-white"
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </div>
                );
            case "warning":
                return (
                    <div className="bg-yellow-500 rounded-full p-1 flex items-center justify-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 sm:h-5 sm:w-5 min-w-[16px] sm:min-w-[20px] text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                            />
                        </svg>
                    </div>
                );
            case "info":
                return (
                    <div className="bg-blue-500 rounded-full p-1 flex items-center justify-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 sm:h-5 sm:w-5 min-w-[16px] sm:min-w-[20px] text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                    </div>
                );
            default:
                return <></>;
        }
    };

    // Function to get class names for different alert types
    const getAlertClasses = (alertType) => {
        switch (alertType) {
            case "success":
                return "bg-green-100 border-l-4 border-green-500 text-green-800";
            case "error":
                return "bg-red-100 border-l-4 border-red-500 text-red-800";
            case "warning":
                return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800";
            case "info":
                return "bg-blue-100 border-l-4 border-blue-500 text-blue-800";
            default:
                return "bg-green-100 border-l-4 border-green-500 text-green-800";
        }
    };

    return (
        <div className="toast fixed top-16 right-2 sm:top-20 sm:right-5 text-center justify-center items-center w-[90%] sm:w-[350px] max-w-[350px] z-[5000] flex flex-col gap-2 sm:gap-3">
            {msgList.map(a => {
                return (
                    <div 
                        className={`${getAlertClasses(a.alertType)} p-3 rounded-md shadow flex justify-between items-center min-h-[40px] sm:min-h-[48px] w-full`}
                        key={a.id}
                        style={{
                            animation: 'slideIn 0.8s ease-out'
                        }}
                    >
                        <div className="flex items-center gap-2 flex-1">
                            {getAlertIcon(a.alertType)}
                            <span className="text-xs sm:text-sm font-medium flex-1 text-left">{a.alertMsg}</span>
                        </div>
                        <button
                            className="ml-1 sm:ml-2 inline-flex text-current opacity-70 hover:opacity-100 focus:outline-none"
                            onClick={() => closeMsg(a.id)}
                            aria-label="Close"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 sm:h-5 sm:w-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                );
            })}
            <style jsx global>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @media (max-width: 640px) {
                    @keyframes slideIn {
                        from {
                            transform: translateY(-20px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
                }
            `}</style>
        </div>
    );
};

export default Alert;