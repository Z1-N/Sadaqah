import React from 'react';

// Import the Google Font
const WhatsAppGRP = () => {
    const quranLink = 'https://chat.whatsapp.com/FafbWaJ1HO45YXEC778k3n';

    return (
        <div className="flex items-center justify-center min-h-screen bg-amber-50">
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
            <div className="bg-gradient-to-b from-teal-400 to-green-500 p-6 rounded-md shadow-lg">
                <div
                    className="bg-white rounded-md p-8 max-w-lg text-center"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    {/* WhatsApp Logo */}
                    <div className="flex justify-center items-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-16 h-16 text-green-600"
                            fill="currentColor"
                        >
                            <path d="M16 .396C7.611.396.792 7.215.792 15.604c0 2.74.715 5.426 2.073 7.796L.396 31.604l8.41-2.43c2.29 1.26 4.89 1.93 7.604 1.93 8.389 0 15.208-6.819 15.208-15.208S24.389.396 16 .396zm0 27.396c-2.45 0-4.85-.646-6.938-1.87l-.496-.29-4.988 1.44 1.43-5.01-.324-.51c-1.26-2.01-1.93-4.34-1.93-6.76 0-7.07 5.75-12.82 12.82-12.82 7.07 0 12.82 5.75 12.82 12.82S23.07 27.792 16 27.792zm7.07-8.57c-.39-.2-2.3-1.14-2.66-1.27-.36-.13-.62-.2-.88.2-.26.39-1.02 1.27-1.25 1.53-.23.26-.46.29-.85.1-.39-.2-1.64-.6-3.12-1.92-1.15-1.03-1.93-2.3-2.16-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.7.2-.23.26-.39.39-.65.13-.26.06-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.32-.78-.65-.67-.88-.68h-.75c-.26 0-.68.1-1.03.49-.36.39-1.36 1.33-1.36 3.25s1.39 3.77 1.58 4.03c.2.26 2.73 4.18 6.63 5.86.93.4 1.65.64 2.22.82.93.3 1.78.26 2.45.16.75-.11 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
                        ختمة لروح الميت
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-6">
                        انضم إلى قروب الختمة وشارك في الأجر. اضغط على الرابط أدناه للانضمام.
                    </p>

                    {/* Button */}
                    <a
                        href={quranLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                        >
                            <path d="M16 .396C7.611.396.792 7.215.792 15.604c0 2.74.715 5.426 2.073 7.796L.396 31.604l8.41-2.43c2.29 1.26 4.89 1.93 7.604 1.93 8.389 0 15.208-6.819 15.208-15.208S24.389.396 16 .396zm0 27.396c-2.45 0-4.85-.646-6.938-1.87l-.496-.29-4.988 1.44 1.43-5.01-.324-.51c-1.26-2.01-1.93-4.34-1.93-6.76 0-7.07 5.75-12.82 12.82-12.82 7.07 0 12.82 5.75 12.82 12.82S23.07 27.792 16 27.792zm7.07-8.57c-.39-.2-2.3-1.14-2.66-1.27-.36-.13-.62-.2-.88.2-.26.39-1.02 1.27-1.25 1.53-.23.26-.46.29-.85.1-.39-.2-1.64-.6-3.12-1.92-1.15-1.03-1.93-2.3-2.16-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.7.2-.23.26-.39.39-.65.13-.26.06-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.32-.78-.65-.67-.88-.68h-.75c-.26 0-.68.1-1.03.49-.36.39-1.36 1.33-1.36 3.25s1.39 3.77 1.58 4.03c.2.26 2.73 4.18 6.63 5.86.93.4 1.65.64 2.22.82.93.3 1.78.26 2.45.16.75-.11 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
                        </svg>
                        انضم الآن
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhatsAppGRP;